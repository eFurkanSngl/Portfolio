import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export default function WorkshopScene({ lang }) {
  const canvasRef = useRef(null);
  const controls = useRef({});
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return undefined;
    }

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
    camera.position.set(7.7, 9.4, 10.5);
    camera.lookAt(0, 0, 0);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    scene.add(new THREE.HemisphereLight(0xc8d6ff, 0x12121a, 2.5));
    const key = new THREE.DirectionalLight(0xffe3ce, 5);
    key.position.set(-3, 9, 5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6 });
    key.shadow.normalBias = 0.025;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x4169ff, 4);
    rim.position.set(4, 2, -5);
    scene.add(rim);

    const world = new THREE.Group();
    scene.add(world);
    const materials = [0x4169e1, 0xff873c, 0xe7e7dc].map(color =>
      new THREE.MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.12 }));
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x232734, roughness: 0.6 });
    const base = new THREE.Mesh(new RoundedBoxGeometry(5.9, 0.5, 5.9, 3, 0.18), baseMaterial);
    base.position.y = -0.6;
    base.receiveShadow = true;
    base.castShadow = true;
    world.add(base);
    const trim = new THREE.Mesh(new RoundedBoxGeometry(5.82, 0.12, 5.82, 2, 0.06), materials[0]);
    trim.position.y = -0.85;
    world.add(trim);

    const tileGeometry = new RoundedBoxGeometry(1.17, 0.6, 1.17, 3, 0.15);
    const socketGeometry = new RoundedBoxGeometry(1.3, 0.08, 1.3, 2, 0.06);
    const socketMaterial = new THREE.MeshStandardMaterial({ color: 0x10121b, roughness: 0.85 });
    const dotGeometry = new THREE.CylinderGeometry(0.11, 0.11, 0.025, 16);
    const dotMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const tiles = [];
    for (let i = 0; i < 16; i += 1) {
      const x = (i % 4 - 1.5) * 1.35;
      const z = (Math.floor(i / 4) - 1.5) * 1.35;
      const socket = new THREE.Mesh(socketGeometry, socketMaterial);
      socket.position.set(x, -0.3, z);
      socket.receiveShadow = true;
      world.add(socket);
      if (i === 7 || i === 13) continue;
      const tile = new THREE.Mesh(tileGeometry, materials[(i + Math.floor(i / 4)) % 3]);
      tile.position.set(x, 0.05, z);
      tile.castShadow = true;
      tile.receiveShadow = true;
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.set(-0.28, 0.31, -0.28);
      tile.add(dot);
      world.add(tile);
      tiles.push({ mesh: tile, x, z, index: i, target: 0.05 });
    }

    let frame = 0;
    let visible = true;
    let manualPause = false;
    let sequence = 0;
    let lastTime = 0;
    const pointer = new THREE.Vector2();
    const render = (time = 0) => {
      frame = 0;
      const moving = !motion.matches && !manualPause;
      const step = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      if (moving) {
        world.rotation.y += (pointer.x * 0.16 - world.rotation.y) * 0.06;
        world.rotation.x += (-pointer.y * 0.06 - world.rotation.x) * 0.06;
        tiles.forEach(({ mesh, index, target }) => {
          const y = target + Math.sin(time * 0.0012 + index * 0.5) * 0.045;
          mesh.position.y += (y - mesh.position.y) * Math.min(step * 7, 1);
        });
      }
      renderer.render(scene, camera);
      if (visible && !document.hidden && moving) frame = requestAnimationFrame(render);
    };
    const wake = () => {
      cancelAnimationFrame(frame);
      render(performance.now());
    };
    controls.current = {
      shuffle() {
        sequence += 1;
        tiles.forEach(tile => {
          tile.mesh.material = materials[(tile.index + sequence) % 3];
          tile.target = (tile.index + sequence) % 5 === 0 ? 0.75 : 0.05;
          if (motion.matches || manualPause) tile.mesh.position.y = tile.target;
        });
        wake();
      },
      pause(value) { manualPause = value; wake(); },
    };
    const onPointer = event => {
      const rect = canvas.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5);
    };
    const resetPointer = () => pointer.set(0, 0);
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerleave", resetPointer);
    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
      wake();
    });
    resize.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else cancelAnimationFrame(frame);
    });
    intersection.observe(canvas);
    document.addEventListener("visibilitychange", wake);
    motion.addEventListener("change", wake);
    setReady(true);
    wake();

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", wake);
      motion.removeEventListener("change", wake);
      controls.current = {};
      const geometries = new Set();
      scene.traverse(object => { if (object.geometry) geometries.add(object.geometry); });
      geometries.forEach(geometry => geometry.dispose());
      [...materials, baseMaterial, socketMaterial, dotMaterial].forEach(material => material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div className="puzzle-scene">
      <div className="scene-orbit" aria-hidden="true" />
      <div className="scene-label"><span>01 / PUZZLE LAB</span><span>UNITY · C#</span></div>
      {!ready && <img className="scene-fallback" src={`${import.meta.env.BASE_URL}CarStack-Store-01.png`} alt="Car Stack" />}
      <canvas ref={canvasRef} className="puzzle-canvas" role="img" aria-label={lang === "tr" ? "Mavi, turuncu ve krem parçalı üç boyutlu puzzle tahtası" : "A three-dimensional puzzle board with blue, orange and ivory tiles"} />
      {ready && <div className="scene-controls">
        <button onClick={() => controls.current.shuffle?.()}>{lang === "tr" ? "Parçaları değiştir" : "Remix the board"} <span aria-hidden="true">↗</span></button>
        <button aria-pressed={paused} onClick={() => { const next = !paused; setPaused(next); controls.current.pause?.(next); }}>
          {lang === "tr" ? paused ? "Hareketi başlat" : "Hareketi durdur" : paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>}
    </div>
  );
}
