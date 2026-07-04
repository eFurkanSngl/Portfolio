import { useRef, useState, type ReactNode, type CSSProperties } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = event.clientX - centerX;
    const distY = event.clientY - centerY;
    const distance = Math.hypot(distX, distY);
    const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < maxDistance) {
      setIsActive(true);
      setTranslate({ x: distX / strength, y: distY / strength });
    } else if (isActive) {
      setIsActive(false);
      setTranslate({ x: 0, y: 0 });
    }
  };

  const onMouseLeave = () => {
    setIsActive(false);
    setTranslate({ x: 0, y: 0 });
  };

  const style: CSSProperties = {
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    transition: isActive ? activeTransition : inactiveTransition,
    willChange: "transform",
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
