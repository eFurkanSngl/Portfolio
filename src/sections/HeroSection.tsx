import { Download, Mail } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import { asset } from "../data/projects";
import { recordPortfolioEvent } from "../lib/portfolioAnalytics";

const navLinks = ["About", "Services", "Projects", "Contact"];

export default function HeroSection() {
  const trackCvDownload = () => {
    recordPortfolioEvent("external_click", { label: "CV download", projectId: "cv-download" });
  };

  return (
    <section className="h-screen flex flex-col" style={{ overflowX: "clip" }}>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m furkan
          </h1>
        </FadeIn>
      </div>

      <div className="flex-1 relative">
        <FadeIn
          delay={0.3}
          y={20}
          className="hidden md:block absolute left-6 md:left-10 top-6 md:top-10 max-w-xs lg:max-w-sm"
        >
          <p className="text-[#D7E2EA] uppercase tracking-widest text-xs font-medium mb-3">
            Junior Unity Game Developer
          </p>
          <p className="text-[#D7E2EA]/60 font-light leading-relaxed text-sm lg:text-base">
            Mobil puzzle ve casual oyunlarda gameplay sistemleri, level logic, object pooling ve
            event-driven mimari üzerinde çalışıyorum. Prototipten yayınlanabilir kaliteye taşıyan,
            ürün odaklı bir geliştirme sürecine odaklanıyorum.
          </p>
          <dl className="flex gap-6 lg:gap-8 mt-8">
            {[
              ["12+", "Oyun & araç"],
              ["Unity/C#", "Ana teknoloji"],
              ["Google Play", "Yayın akışı"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-lg lg:text-xl font-semibold text-[#D7E2EA]">{value}</dt>
                <dd className="text-[10px] lg:text-xs text-[#D7E2EA]/50 uppercase tracking-wide mt-1">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src={asset("My Photo.jpg")}
              alt="Furkan Şengül"
              className="w-full h-auto rounded-[40px] object-cover"
            />
          </FadeIn>
        </Magnet>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn
          delay={0.35}
          y={20}
          as="p"
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
        >
          a mobile game developer driven by crafting striking and unforgettable player experiences
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="flex gap-3">
            <a
              href="mailto:efrknsngl@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA] uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href={asset("Enes-Furkan-Sengul-CV-2026-06-17.pdf")}
              download="Enes-Furkan-Sengul-CV.pdf"
              onClick={trackCvDownload}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA] uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              <Download size={16} />
              CV
            </a>
            <ContactButton label="Contact Me" href="#contact" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
