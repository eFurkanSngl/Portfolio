import { Gamepad2, Layers3, Sparkles, Zap } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

const bio =
  "Junior Unity Game Developer olarak mobil puzzle ve casual oyunlarda gameplay sistemleri, level logic, object pooling ve event-driven mimari üzerinde çalışıyorum. Beş yıla yakın hobi ve okul projeleriyle biriktirdiğim deneyimi, yayınlanabilir kalitede ürün üretmeye odaklıyorum. Yeni bir oyun ya da prototip için birlikte harika bir şey inşa edelim!";

const corners = [
  { Icon: Gamepad2, position: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]", delay: 0.1, x: -80 },
  { Icon: Layers3, position: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]", delay: 0.25, x: -80 },
  { Icon: Zap, position: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]", delay: 0.15, x: 80 },
  { Icon: Sparkles, position: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]", delay: 0.3, x: 80 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]"
    >
      {corners.map(({ Icon, position, delay, x }) => (
        <FadeIn
          key={position}
          delay={delay}
          x={x}
          y={0}
          duration={0.9}
          className={`hidden sm:flex absolute ${position} items-center justify-center w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-3xl border border-[#D7E2EA]/15 text-[#D7E2EA]/60`}
        >
          <Icon size={48} strokeWidth={1} />
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={bio}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton label="Contact Me" href="#contact" />
      </div>
    </section>
  );
}
