import { useEffect, useRef, useState } from "react";
import { marqueeRowOne, marqueeRowTwo } from "../data/projects";

function useSectionScrollOffset() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(value);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { sectionRef, offset };
}

export default function MarqueeSection() {
  const { sectionRef, offset } = useSectionScrollOffset();

  const rowOne = [...marqueeRowOne, ...marqueeRowOne, ...marqueeRowOne];
  const rowTwo = [...marqueeRowTwo, ...marqueeRowTwo, ...marqueeRowTwo];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
        >
          {rowOne.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
        >
          {rowTwo.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
