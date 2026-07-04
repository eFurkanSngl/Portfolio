import { Download, Github, Linkedin, Mail } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { asset } from "../data/projects";
import { recordPortfolioEvent } from "../lib/portfolioAnalytics";

export default function ContactSection() {
  const trackCvDownload = () => {
    recordPortfolioEvent("external_click", { label: "CV download", projectId: "cv-download" });
  };

  const links = [
    { icon: Mail, label: "Email", href: "mailto:efrknsngl@gmail.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/eFurkanSngl?tab=overview", external: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/efurkansengull/", external: true },
  ];

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32">
      <FadeIn delay={0} y={30} className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,8vw,90px)]">
          Let&apos;s talk
        </h2>
        <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-xl">
          Unity tabanlı mobil oyun geliştirme, level tool üretimi veya mevcut prototipleri yayınlanabilir
          seviyeye taşıma konusunda yardımcı olabilirim.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
          <a
            href={asset("Enes-Furkan-Sengul-CV-2026-06-17.pdf")}
            download="Enes-Furkan-Sengul-CV.pdf"
            onClick={trackCvDownload}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-sm uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
          >
            <Download size={16} />
            CV indir
          </a>
        </div>
      </FadeIn>
      <p className="text-center text-[#D7E2EA]/40 text-xs mt-20">
        © 2026 Furkan Şengül. Game Developer Portfolio.
      </p>
    </section>
  );
}
