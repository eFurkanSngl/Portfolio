import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={className}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;
        return (
          <Character key={index} char={char} start={start} end={end} progress={scrollYProgress} />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function Character({ char, start, end, progress }: CharacterProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{char === " " ? " " : char}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {char === " " ? " " : char}
      </motion.span>
    </span>
  );
}
