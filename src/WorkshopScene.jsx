import { useEffect, useRef } from "react";
import * as THREE from "three";

function box(width, height, depth, color) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth, 2, 2, 2),
    new THREE.MeshStandardMaterial({ color, roughness: 0.48, metalness: 0.03 }),
  );
}

export default function WorkshopScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch {
      canvas.dataset.failed = "true";
      return undefined;
    }

    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.1 : 1.55));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = !mobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(6, 5.2, 8);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xbadfd3, 3.3));
    const sun = new THREE.DirectionalLight(0xfff5df, 5);
    sun.position.set(-5, 8, 6);
    sun.castShadow = true;
    scene.add(sun);
    const blueLight = new THREE.PointLight(0x78c7f4, 25, 14);
    blueLight.position.set(4, 3, 4);
    scene.add(blueLight);

    const world = new THREE.Group();
    world.rotation.set(0.06, -0.42, 0);
    scene.add(world);

    const floor = box(7.4, 0.3, 5.6, 0xf2e8d5);
    floor.position.y = -1.75;
    world.add(floor);

    const desk = box(5.7, 0.28, 2.45, 0xfffaf0);
    desk.position.y = -0.25;
    world.add(desk);
    [-2.3, 2.3].forEach((x) => [-0.72, 0.72].forEach((z) => {
      const leg = box(0.24, 1.55, 0.24, 0x24314f);
      leg.position.set(x, -1.05, z);
      world.add(leg);
    }));

    const monitor = new THREE.Group();
    const frame = box(2.55, 1.55, 0.18, 0x24314f);
    const screen = box(2.28, 1.27, 0.05, 0x8ed8ff);
    screen.position.z = 0.12;
    screen.material.emissive = new THREE.Color(0x52aee3);
    screen.material.emissiveIntensity = 0.32;
    const stand = box(0.18, 0.65, 0.18, 0x34425f);
    stand.position.y = -1.05;
    const base = box(1.05, 0.12, 0.54, 0x34425f);
    base.position.y = -1.38;
    monitor.add(frame, screen, stand, base);
    monitor.position.set(-0.55, 1.08, -0.28);
    monitor.rotation.y = 0.08;
    world.add(monitor);

    const lines = [];
    [1.5, 1.8, 1.12, 1.62, 0.92].forEach((width, index) => {
      const line = box(width, 0.055, 0.025, index % 2 ? 0xff9b69 : 0x294e70);
      line.position.set(-0.35 + width * 0.08, 0.35 - index * 0.18, 0.16);
      monitor.add(line);
      lines.push(line);
    });

    const keyboard = box(2.25, 0.14, 0.78, 0xdce5e9);
    keyboard.position.set(-0.35, 0.02, 0.75);
    keyboard.rotation.y = 0.08;
    world.add(keyboard);
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        const key = box(0.15, 0.04, 0.12, (row + col) % 7 === 0 ? 0xff9b69 : 0xffffff);
        key.position.set(-1.08 + col * 0.23, 0.105, 0.53 + row * 0.2);
        keyboard.add(key);
      }
    }

    const gamepad = new THREE.Group();
    const padMaterial = new THREE.MeshStandardMaterial({ color: 0x84d8bd, roughness: 0.42 });
    const left = new THREE.Mesh(new THREE.SphereGeometry(0.42, 18, 12), padMaterial);
    left.scale.set(1.2, 0.35, 0.9);
    left.position.x = -0.3;
    const right = left.clone();
    right.position.x = 0.3;
    const bridge = box(0.7, 0.28, 0.55, 0x84d8bd);
    gamepad.add(left, right, bridge);
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 14), new THREE.MeshStandardMaterial({ color: 0x24314f }));
    stick.rotation.x = Math.PI / 2;
    stick.position.set(-0.28, 0.2, 0.03);
    gamepad.add(stick);
    [0xff9b69, 0xffd66b].forEach((color, index) => {
      const button = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 8), new THREE.MeshStandardMaterial({ color }));
      button.scale.y = 0.45;
      button.position.set(0.25 + index * 0.16, 0.17, -0.02 + index * 0.05);
      gamepad.add(button);
    });
    gamepad.position.set(1.85, 0.22, 0.65);
    gamepad.rotation.set(-0.2, -0.35, 0.1);
    world.add(gamepad);

    const puzzle = new THREE.Group();
    const colors = [0xff9b69, 0x78c7f4, 0x84d8bd, 0xffd66b, 0x9e8bff];
    for (let i = 0; i < (mobile ? 4 : 7); i += 1) {
      const piece = box(0.42, 0.42, 0.42, colors[i % colors.length]);
      piece.position.set(-2.4 + (i % 3) * 0.52, 0.2 + Math.floor(i / 3) * 0.5, -0.75);
      piece.rotation.y = i * 0.22;
      puzzle.add(piece);
    }
    world.add(puzzle);

    const orbiters = [];
    if (!mobile) {
      for (let i = 0; i < 9; i += 1) {
        const object = i % 2 === 0
          ? new THREE.Mesh(new THREE.IcosahedronGeometry(0.13, 0), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.35 }))
          : box(0.2, 0.2, 0.2, colors[i % colors.length]);
        const angle = (i / 9) * Math.PI * 2;
        object.position.set(Math.cos(angle) * 3.5, 0.7 + Math.sin(i * 1.7) * 1.4, Math.sin(angle) * 2.4);
        world.add(object);
        orbiters.push(object);
      }
    }

    world.traverse((object) => {
      if (object.isMesh) object.castShadow = !mobile;
    });

    const pointer = new THREE.Vector2();
    let scroll = 0;
    const onPointer = (event) => pointer.set(event.clientX / window.innerWidth - 0.5, event.clientY / window.innerHeight - 0.5);
    const onScroll = () => { scroll = Math.min(window.scrollY / Math.max(window.innerHeight * 1.35, 1), 1); };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const clock = new THREE.Clock();
    let frameId = 0;
    const render = () => {
      const elapsed = clock.getElapsedTime();
      world.rotation.y += ((-0.42 + pointer.x * 0.22 + scroll * 0.16) - world.rotation.y) * 0.035;
      world.rotation.x += ((0.06 - pointer.y * 0.1 + scroll * 0.05) - world.rotation.x) * 0.035;
      camera.position.y += ((5.2 - scroll * 0.7) - camera.position.y) * 0.025;
      camera.position.z += ((8 + scroll * 0.6) - camera.position.z) * 0.025;
      camera.lookAt(0, -0.15 + scroll * 0.25, 0);
      if (!reduced) {
        gamepad.position.y = 0.22 + Math.sin(elapsed * 1.25) * 0.055;
        puzzle.rotation.y = Math.sin(elapsed * 0.45) * 0.08;
        lines.forEach((line, index) => { line.scale.x = 0.9 + Math.sin(elapsed * 1.1 + index) * 0.08; });
        orbiters.forEach((object, index) => {
          object.rotation.x += 0.004 + index * 0.0003;
          object.rotation.y += 0.006;
        });
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      scene.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry?.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material?.dispose());
      });
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="workshop-canvas" aria-label="Interactive 3D game developer workshop desk" />
      <div className="workshop-canvas-fallback" aria-label="Game developer workshop illustration">
        <span>UNITY</span><strong>GAME<br />WORKSHOP</strong>
      </div>
    </>
  );
}