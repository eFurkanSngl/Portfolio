import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({ src, className }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => null);
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} muted loop playsInline preload="none" className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
