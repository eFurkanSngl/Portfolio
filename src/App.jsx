import { useEffect, useMemo, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Code2,
  Cpu,
  Gamepad2,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const copy = {
  tr: {
    nav: ["Hakkımda", "Projeler", "Google Play", "Yetenekler", "İletişim"],
    language: "EN",
    heroTitle: "Furkan Şengül",
    heroRole: "Mobile Game Developer",
    heroText:
      "Unity ve C# ile mobil puzzle ve casual oyunlar geliştiriyorum. Odak noktam temiz mimari, güçlü game feel, Android performansı ve yayınlanabilir ürün kalitesi.",
    primaryCta: "Projeleri incele",
    secondaryCta: "Google Play",
    featuredTitle: "Color Blast Match",
    featuredText:
      "Aktif geliştirme sürecindeki match puzzle prototipi. Level dengesi, görsel kalite ve mobil oynanış akışı düzenli olarak iyileştiriliyor.",
    stats: [
      ["11+", "Oyun ve araç"],
      ["Unity/C#", "Ana teknoloji"],
      ["Google Play", "Android yayın akışı"],
    ],
    aboutTitle: "Mobil oyunları prototipten yayın kalitesine taşımaya odaklanıyorum.",
    aboutText:
      "Junior Unity Game Developer olarak mobil puzzle ve casual oyunlarda gameplay sistemleri, level logic, UI akışı, object pooling, event-driven mimari ve Android build hazırlığı üzerinde çalışıyorum. CV’deki deneyimimi mevcut projelerle birleştirerek bu portföyü daha ürün odaklı hale getirdim.",
    experienceTitle: "Deneyim",
    experience: [
      {
        role: "Jr. Game Developer",
        place: "Virtual Projects",
        date: "2025 - 2026",
      },
      {
        role: "Intern Game Developer",
        place: "Ice Frost",
        date: "2024",
      },
    ],
    highlights: [
      "OOP/SOLID ve modüler Unity mimarisi",
      "Object Pooling, ScriptableObject ve event-driven sistemler",
      "DOTween, Zenject, Unity Profiler ve Android build pipeline",
      "SDK entegrasyonu, Firebase Analytics ve Google Play Console",
      "Game feel, haptic, audio, VFX ve UI polish",
    ],
    playTitle: "Google Play",
    playText:
      "Fill The Block Google Play üzerinde konumlandırılan mobil puzzle projesi. Android optimizasyonu, SDK entegrasyonu, Firebase Analytics, reklam altyapısı, performans ve mağaza beklentileri ürün akışının parçası.",
    playCta: "Google Play sayfası",
    playWebsite: "Oyun websitesi",
    playPrev: "Önceki oyun",
    playNext: "Sonraki oyun",
    playCards: [
      ["Fill The Block", "Google Play yayında / yayın akışı hazır"],
      ["Android Pipeline", "SDK, Firebase Analytics, reklam ve build akışı"],
      ["Store Ready Polish", "Haptic, audio, particle pooling ve mobil UI"],
    ],
    projectsTitle: "Seçilmiş projeler",
    projectsText:
      "CV’deki teknik deneyimle harmanlanmış mobil puzzle prototipleri, client işi, Unity Editor aracı ve yayınlanmış oyun çalışmaları.",
    allFilter: "Tümü",
    watchVideo: "Videoyu izle",
    visitProject: "Projeye git",
    githubDetails: "GitHub & detaylar",
    googlePlay: "Google Play",
    pendingTitle: "Google Play Durumu",
    pendingText: "Bu oyun için Google Play yayını hazırlık aşamasında.",
    skillsTitle: "Teknik odak",
    skillsText:
      "Kod tarafında ölçeklenebilir mimariyi, oyun tarafında ise hızlı ve tatmin edici mobil deneyimi önceliklendiriyorum.",
    contactTitle: "Yeni oyun, prototip veya freelance iş için konuşalım.",
    contactText:
      "Unity tabanlı mobil oyun geliştirme, level tool üretimi veya mevcut prototipleri yayınlanabilir seviyeye taşıma konusunda yardımcı olabilirim.",
    footer: "© 2026 Furkan Şengül. Game Developer Portfolio.",
  },
  en: {
    nav: ["About", "Projects", "Google Play", "Focus", "Contact"],
    language: "TR",
    heroTitle: "Furkan Şengül",
    heroRole: "Mobile Game Developer",
    heroText:
      "I build mobile puzzle and casual games with Unity and C#. My focus is clean architecture, strong game feel, Android performance and release-ready quality.",
    primaryCta: "Explore projects",
    secondaryCta: "Google Play",
    featuredTitle: "Color Blast Match",
    featuredText:
      "An actively developed match puzzle prototype. Level balance, visual quality and mobile gameplay flow are improved continuously.",
    stats: [
      ["11+", "Games and tools"],
      ["Unity/C#", "Core technology"],
      ["Google Play", "Android release flow"],
    ],
    aboutTitle: "I focus on taking mobile games from prototype to release quality.",
    aboutText:
      "As a Junior Unity Game Developer, I work on gameplay systems, level logic, UI flow, object pooling, event-driven architecture and Android build preparation for mobile puzzle and casual games. I blended the CV experience with the existing projects so the portfolio reads like a product-focused profile.",
    experienceTitle: "Experience",
    experience: [
      {
        role: "Jr. Game Developer",
        place: "Virtual Projects",
        date: "2025 - 2026",
      },
      {
        role: "Intern Game Developer",
        place: "Ice Frost",
        date: "2024",
      },
    ],
    highlights: [
      "OOP/SOLID and modular Unity architecture",
      "Object Pooling, ScriptableObject and event-driven systems",
      "DOTween, Zenject, Unity Profiler and Android build pipeline",
      "SDK integration, Firebase Analytics and Google Play Console",
      "Game feel, haptics, audio, VFX and UI polish",
    ],
    playTitle: "Google Play",
    playText:
      "Fill The Block is the mobile puzzle project positioned on Google Play. Android optimization, SDK integration, Firebase Analytics, ad foundations, performance and store expectations are part of the product flow.",
    playCta: "Google Play page",
    playWebsite: "Game website",
    playPrev: "Previous game",
    playNext: "Next game",
    playCards: [
      ["Fill The Block", "Published / release flow ready"],
      ["Android Pipeline", "SDK, Firebase Analytics, ads and build flow"],
      ["Store Ready Polish", "Haptics, audio, particle pooling and mobile UI"],
    ],
    projectsTitle: "Selected projects",
    projectsText:
      "Mobile puzzle prototypes, client work, Unity Editor tooling and released game work blended with the technical experience from the CV.",
    allFilter: "All",
    watchVideo: "Watch video",
    visitProject: "Visit project",
    githubDetails: "GitHub & details",
    googlePlay: "Google Play",
    pendingTitle: "Google Play Status",
    pendingText: "This game is currently being prepared for Google Play release.",
    skillsTitle: "Technical focus",
    skillsText:
      "On the code side I prioritize scalable architecture; on the game side I prioritize fast and satisfying mobile play.",
    contactTitle: "Let’s talk about a new game, prototype or freelance build.",
    contactText:
      "I can help with Unity-based mobile game development, level tooling or taking an existing prototype closer to release quality.",
    footer: "© 2026 Furkan Şengül. Game Developer Portfolio.",
  },
};

const projects = [
  {
    id: "color-blast-match",
    title: "Color Blast Match",
    status: { tr: "Aktif prototip", en: "Active prototype" },
    description: {
      tr: "Match puzzle prototipi. Level dengesi, görsel kalite, mobile game feel ve yayınlanabilir sistem akışı üzerinde aktif geliştirme sürüyor.",
      en: "A match puzzle prototype with active work on level balance, visual quality, mobile game feel and release-ready systems.",
    },
    image: "Funny.png",
    previewVideo: "ColorBlastMatchHero.mp4",
    video: "ColorBlastMatchHero.mp4",
    tags: ["Unity", "C#", "Match Puzzle", "Mobile"],
    category: "Puzzle",
    accent: "#23d3b2",
    googlePending: true,
  },
  {
    id: "level-generator",
    title: "Level Generator",
    status: { tr: "Unity Editor aracı", en: "Unity Editor tool" },
    description: {
      tr: "Unity Editor içinde çalışan, grid tabanlı hücre ve obstacle yerleşimiyle level prefab ve level data üretimini hızlandıran özel araç.",
      en: "A custom Unity Editor tool that accelerates grid-based cell, obstacle, level prefab and level data production.",
    },
    image: "LevelGenerator.png",
    tags: ["Unity", "C#", "Editor Tool", "Automation"],
    category: "Tooling",
    accent: "#f6b73c",
    github: "https://github.com/eFurkanSngl/colorblastmatch-level-generator",
  },
  {
    id: "unity-folder-forge",
    title: "Unity Folder Forge",
    status: { tr: "Unity Editor paketi", en: "Unity Editor package" },
    description: {
      tr: "Unity Editor içinde hızlı proje klasör yapısı oluşturan Tools paneli. Seçili ana klasöre alt klasör ekleme, Scripts/Sprites presetleri ve root path kontrolü sunar.",
      en: "A Unity Editor Tools panel for quickly creating project folder structures, with selected-folder subfolders, Scripts/Sprites presets and root path control.",
    },
    image: "UnityFolderForge.png",
    video: "UnityFolderForge-demo.mp4",
    tags: ["Unity", "C#", "Editor Tool", "UPM"],
    category: "Tooling",
    accent: "#7dd3fc",
    github: "https://github.com/eFurkanSngl/Unity-Folder-Forge",
  },
  {
    id: "fill-the-block",
    title: "Fill The Block",
    status: { tr: "Google Play", en: "Google Play" },
    description: {
      tr: "Grid tabanlı mobil puzzle oyunu. ScriptableObject data akışı, object pooling, localized grid validation, particle pooling, audio/haptic servisleri ve Google Play süreci içerir.",
      en: "A grid-based mobile puzzle game with ScriptableObject data flow, object pooling, localized grid validation, particle pooling, audio/haptic services and Google Play workflow.",
    },
    image: "FTB.png",
    tags: ["Unity", "C#", "Google Play", "Performance"],
    category: "Released",
    accent: "#ff6b5f",
    play: "https://mellifluous-faloodeh-fbbf29.netlify.app/#game",
    googlePlay: "https://play.google.com/store/apps/details?id=com.SGLGAMES.FillTheBlocks",
  },
  {
    id: "find-the-differences",
    title: "DoubleTake",
    status: { tr: "Freelance client işi", en: "Freelance client work" },
    description: {
      tr: "AI kişiselleştirme akışı olan 2D fark bulma oyunu. Difference detection, hint/lives sistemi, player progression, coin economy ve IAP-ready store yapısı geliştirildi.",
      en: "A 2D spot-the-difference game with AI personalization, difference detection, hint/lives systems, player progression, coin economy and IAP-ready store structure.",
    },
    image: "FDTH.png",
    video: "GAmePlayVideos.mp4",
    tags: ["Unity", "C#", "AI Flow", "Client"],
    category: "Client",
    accent: "#5cc8ff",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.drawtopia.doubletake",
  },
  {
    id: "block-sort",
    title: "Block Sort",
    status: { tr: "Virtual Projects", en: "Virtual Projects" },
    description: {
      tr: "Renkli blokları doğru sırayla eşleştirme ve zincirleme reaksiyon oluşturma üzerine kurulu tekrar oynanabilir puzzle deneyimi.",
      en: "A replayable puzzle experience built around sorting colorful blocks, matching colors and creating chain reactions.",
    },
    image: "blocksortss.png",
    video: "Block Sort.mp4",
    tags: ["Unity", "C#", "Sorting", "Casual"],
    category: "Puzzle",
    accent: "#a9e44d",
  },
  {
    id: "royal-match-clone",
    title: "Royal Match Clone",
    status: { tr: "Match-3 clone", en: "Match-3 clone" },
    description: {
      tr: "Match-3 core, L/T/2x2 shape detection, rocket, bomb, light bomb, propeller ve obstacle sistemi içeren modular prototip.",
      en: "A modular prototype with Match-3 core, L/T/2x2 shape detection, rockets, bombs, light bomb, propeller and obstacle systems.",
    },
    image: "RoyalMatch.png",
    video: "royal-match-video.mp4",
    tags: ["Unity", "Zenject", "Object Pooling", "DOTween"],
    category: "Puzzle",
    accent: "#d9b563",
    github: "https://github.com/eFurkanSngl/Royal-Match-Clone",
  },
  {
    id: "this-is-blast",
    title: "This is Blast Clone",
    status: { tr: "Tap-to-blast", en: "Tap-to-blast" },
    description: {
      tr: "Zenject SignalBus, ScriptableObject grid data, object pooling ve güçlü squash/push feedback ile GC allocation azaltımına odaklanan prototip.",
      en: "A prototype focused on Zenject SignalBus, ScriptableObject grid data, object pooling, squash/push feedback and reduced GC allocations.",
    },
    image: "ThisIsBlast.png",
    video: "ThisIsBlastVideo.mp4",
    tags: ["Unity", "SignalBus", "Performance", "Game Feel"],
    category: "Puzzle",
    accent: "#ff7f87",
    github: "https://github.com/eFurkanSngl/This-is-Blast-Clone-VP",
  },
  {
    id: "funny-match",
    title: "Funny Match",
    status: { tr: "Match-2", en: "Match-2" },
    description: {
      tr: "UnityEvent/UnityAction ile gevşek bağlı gameplay iletişimi, responsive Safe Area UI, SFX/Music kontrolü ve PlayerPrefs kalıcılığı.",
      en: "A match game with UnityEvent/UnityAction communication, responsive Safe Area UI, SFX/Music controls and PlayerPrefs persistence.",
    },
    image: "Funny.png",
    video: "Funny Match.mp4",
    tags: ["Unity", "C#", "Match-2", "UI Polish"],
    category: "Casual",
    accent: "#ff9f43",
    googlePending: true,
  },
  {
    id: "flip-it",
    title: "Flip It",
    status: { tr: "Itch.io", en: "Itch.io" },
    description: {
      tr: "Solo geliştirilen hafıza oyunu. OOP/SOLID mimari, central GameManager flow, genişleyebilir power-up sistemi ve adaptive UI içerir.",
      en: "A solo-developed memory game with OOP/SOLID architecture, central GameManager flow, extensible power-up system and adaptive UI.",
    },
    image: "FliptIt.png",
    tags: ["Unity", "OOP/SOLID", "Power-Up", "Puzzle"],
    category: "Puzzle",
    accent: "#c084fc",
    play: "https://frknsngl.itch.io/flip-it",
    github: "https://github.com/eFurkanSngl/FlipIt-",
  },
  {
    id: "dino-run",
    title: "Dino Run",
    status: { tr: "Endless runner", en: "Endless runner" },
    description: {
      tr: "Dinamik zorluk, engel çeşitliliği ve yüksek hızlı sonsuz koşu akışı üzerine kurulu arcade oyun.",
      en: "An arcade endless runner built around dynamic difficulty, varied obstacles and high-speed movement.",
    },
    image: "DinoRun.png",
    tags: ["Unity", "C#", "Runner", "Arcade"],
    category: "Casual",
    accent: "#65d68b",
    play: "https://frknsngl.itch.io/dino-run-dino",
    github: "https://github.com/eFurkanSngl/Dino-Run-Game",
  },
  {
    id: "ocean-blast",
    title: "OceanBlast",
    status: { tr: "Match & launch", en: "Match & launch" },
    description: {
      tr: "3D match & launch puzzle sistemi. Grid tabanlı color matching, launcher mechanics, merge yapısı, Zenject SignalBus ve ScriptableObject level data.",
      en: "A 3D match and launch puzzle system with grid color matching, launcher mechanics, merge systems, Zenject SignalBus and ScriptableObject level data.",
    },
    image: "OceanBlast.png",
    video: "OceanBlast.mp4",
    tags: ["Unity", "3D Puzzle", "Zenject", "Grid"],
    category: "Puzzle",
    accent: "#30d5c8",
    github: "https://github.com/eFurkanSngl/Royal-Match-Clone",
  },
];

const googlePlayProjects = [
  {
    id: "fill-the-block",
    title: "Fill The Block",
    image: "FTB.png",
    description: {
      tr: "Fill The Block Google Play uzerinde konumlandirilan mobil puzzle projesi. Android optimizasyonu, SDK entegrasyonu, Firebase Analytics, reklam altyapisi, performans ve magaza beklentileri urun akisinin parcasi.",
      en: "Fill The Block is the mobile puzzle project positioned on Google Play. Android optimization, SDK integration, Firebase Analytics, ad foundations, performance and store expectations are part of the product flow.",
    },
    cards: {
      tr: [
        ["Fill The Block", "Google Play yayinda / yayin akisi hazir"],
        ["Android Pipeline", "SDK, Firebase Analytics, reklam ve build akisi"],
        ["Store Ready Polish", "Haptic, audio, particle pooling ve mobil UI"],
      ],
      en: [
        ["Fill The Block", "Published / release flow ready"],
        ["Android Pipeline", "SDK, Firebase Analytics, ads and build flow"],
        ["Store Ready Polish", "Haptics, audio, particle pooling and mobile UI"],
      ],
    },
    googlePlay: "https://play.google.com/store/apps/details?id=com.SGLGAMES.FillTheBlocks",
    website: "https://mellifluous-faloodeh-fbbf29.netlify.app/",
  },
  {
    id: "doubletake",
    title: "DoubleTake",
    image: "FDTH.png",
    description: {
      tr: "DoubleTake, dikkat ve gozlem odakli mobil fark bulma oyunu. Yapay zeka destekli icerik akisiyla seviye cesitliligi, progression ve monetization taraflarinda gelistirme suruyor.",
      en: "DoubleTake is a mobile spot-the-difference game focused on attention and observation. Development continues on AI-assisted content flow, level variety, progression and monetization.",
    },
    cards: {
      tr: [
        ["DoubleTake", "Google Play yayininda"],
        ["Core Gameplay", "Difference detection, hint/lives sistemi"],
        ["Progression", "Coin economy, level flow ve IAP-ready store"],
      ],
      en: [
        ["DoubleTake", "Published on Google Play"],
        ["Core Gameplay", "Difference detection and hint/lives systems"],
        ["Progression", "Coin economy, level flow and IAP-ready store"],
      ],
    },
    googlePlay: "https://play.google.com/store/apps/details?id=com.drawtopia.doubletake",
  },
];

const focusItems = [
  {
    icon: Layers3,
    title: "Scalable Architecture",
    text: {
      tr: "OOP/SOLID, event-driven yapı, ScriptableObject data akışı ve modüler gameplay sistemleriyle genişleyebilir kod tabanı kurarım.",
      en: "I build extensible codebases with OOP/SOLID, event-driven structures, ScriptableObject data flow and modular gameplay systems.",
    },
  },
  {
    icon: Zap,
    title: "Performance & Pooling",
    text: {
      tr: "Object Pooling, GC azaltımı, localized validation, Unity Profiler ve Android optimizasyonu ile mobil stabiliteyi güçlendiririm.",
      en: "I improve mobile stability through Object Pooling, reduced GC allocations, localized validation, Unity Profiler and Android optimization.",
    },
  },
  {
    icon: Sparkles,
    title: "Game Feel & Polish",
    text: {
      tr: "DOTween animasyonları, camera feedback, haptic, SFX, particle pooling ve UI transition ile oyuna daha canlı bir his kazandırırım.",
      en: "I improve feel through DOTween animation, camera feedback, haptics, SFX, particle pooling and UI transitions.",
    },
  },
];

const projectOrder = [
  "color-blast-match",
  "fill-the-block",
  "level-generator",
  "unity-folder-forge",
  "find-the-differences",
  "block-sort",
  "this-is-blast",
  "royal-match-clone",
  "funny-match",
  "flip-it",
  "dino-run",
  "ocean-blast",
];

function asset(name) {
  return `${import.meta.env.BASE_URL}${encodeURI(name)}`;
}

function App() {
  const [lang, setLang] = useState("tr");
  const [activeFilter, setActiveFilter] = useState("All");
  const [video, setVideo] = useState(null);
  const [pendingOpen, setPendingOpen] = useState(false);
  const [playIndex, setPlayIndex] = useState(0);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const filteredProjects = useMemo(() => {
    const scopedProjects =
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return [...scopedProjects].sort(
      (first, second) => projectOrder.indexOf(first.id) - projectOrder.indexOf(second.id),
    );
  }, [activeFilter]);

  const activePlayProject = googlePlayProjects[playIndex];
  const onPrevPlay = () => {
    setPlayIndex((current) => (current - 1 + googlePlayProjects.length) % googlePlayProjects.length);
  };
  const onNextPlay = () => {
    setPlayIndex((current) => (current + 1) % googlePlayProjects.length);
  };

  return (
    <main className="site-shell">
      <Header t={t} onToggleLang={() => setLang(lang === "tr" ? "en" : "tr")} />

      <section className="hero" id="top">
        <div className="hero__copy">
          <h1>{t.heroTitle}</h1>
          <p className="hero__role">{t.heroRole}</p>
          <p className="hero__text">{t.heroText}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              <Gamepad2 size={18} />
              {t.primaryCta}
            </a>
            <a className="button button--store" href="#google-play">
              <Store size={18} />
              {t.secondaryCta}
            </a>
            <a className="button button--ghost" href="mailto:efrknsngl@gmail.com">
              <Mail size={18} />
              Email
            </a>
          </div>
          <dl className="hero__stats">
            {t.stats.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-stage" aria-label={t.featuredTitle}>
          <div className="hero-stage__phone">
            <video autoPlay muted loop playsInline poster={asset("Funny.png")}>
              <source src={asset("ColorBlastMatchHero.mp4")} type="video/mp4" />
            </video>
          </div>
          <div className="hero-stage__panel">
            <div>
              <span>{t.featuredTitle}</span>
              <strong>{t.featuredText}</strong>
            </div>
            <CheckCircle2 size={20} />
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about__content">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <div className="about__highlights">
            {t.highlights.map((item) => (
              <span key={item}>
                <ShieldCheck size={16} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="timeline">
          <h3>{t.experienceTitle}</h3>
          {t.experience.map((item) => (
            <article key={`${item.role}-${item.place}`}>
              <span>{item.date}</span>
              <h4>{item.role}</h4>
              <strong>{item.place}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="google-play" id="google-play">
        <div className="google-play__media">
          <img src={asset(activePlayProject.image)} alt={activePlayProject.title} />
          <div className="store-badge">
            <Store size={18} />
            Google Play
          </div>
          <button className="play-nav play-nav--prev" type="button" onClick={onPrevPlay} aria-label={t.playPrev}>
            <ChevronLeft size={18} />
          </button>
          <button className="play-nav play-nav--next" type="button" onClick={onNextPlay} aria-label={t.playNext}>
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="google-play__content">
          <Store size={28} />
          <h2>{t.playTitle}</h2>
          <h3 className="google-play__game-title">{activePlayProject.title}</h3>
          <p>{activePlayProject.description[lang]}</p>
          <div className="play-card-row">
            {activePlayProject.cards[lang].map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="hero__actions">
            <a
              className="button button--store"
              href={activePlayProject.googlePlay}
              target="_blank"
              rel="noreferrer"
            >
              <Store size={18} />
              {t.playCta}
            </a>
            {activePlayProject.website && (
              <a
                className="button button--ghost"
                href={activePlayProject.website}
                target="_blank"
                rel="noreferrer"
              >
                <Globe2 size={18} />
                {t.playWebsite}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section section--projects" id="projects">
        <div className="section__heading">
          <div>
            <h2>{t.projectsTitle}</h2>
            <p>{t.projectsText}</p>
          </div>
          <div className="filters" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "filter is-active" : "filter"}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter === "All" ? t.allFilter : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              lang={lang}
              project={project}
              t={t}
              onOpenVideo={() => setVideo(project)}
              onOpenPending={() => setPendingOpen(true)}
            />
          ))}
        </div>
      </section>

      <section className="section focus" id="focus">
        <div className="focus__intro">
          <Cpu size={24} />
          <h2>{t.skillsTitle}</h2>
          <p>{t.skillsText}</p>
          <div className="tool-cloud">
            {[
              "Unity",
              "C#",
              "Zenject",
              "DOTween",
              "Odin",
              "Profiler",
              "SDK",
              "Firebase Analytics",
              "Git",
              "Google Play Console",
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <div className="focus__grid">
          {focusItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="focus-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text[lang]}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cert-strip" aria-label="Certificates and education">
        <div>
          <Award size={22} />
          <span>Unity Essentials Pathway</span>
        </div>
        <div>
          <GraduationCap size={22} />
          <span>Game Developer Certificate / 240h technical training</span>
        </div>
        <div>
          <Wrench size={22} />
          <span>C#, Python, JavaScript basics, SQL fundamentals</span>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:efrknsngl@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <a href="https://github.com/eFurkanSngl?tab=overview" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/efurkansengull/" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      <footer>{t.footer}</footer>

      {video && <VideoModal project={video} t={t} onClose={() => setVideo(null)} />}
      {pendingOpen && <PendingModal t={t} onClose={() => setPendingOpen(false)} />}
    </main>
  );
}

function Header({ onToggleLang, t }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Portfolio home">
        <img src={asset("My Photo.jpg")} alt="Furkan Şengül" />
        <span>
          <strong>Furkan</strong>
          <small>Unity Developer</small>
        </span>
      </a>

      <nav aria-label="Primary navigation">
        <a href="#about">{t.nav[0]}</a>
        <a href="#projects">{t.nav[1]}</a>
        <a href="#google-play">{t.nav[2]}</a>
        <a href="#focus">{t.nav[3]}</a>
        <a href="#contact">{t.nav[4]}</a>
      </nav>

      <button className="language-button" onClick={onToggleLang} type="button" aria-label="Change language">
        <Languages size={17} />
        {t.language}
      </button>
    </header>
  );
}

function ProjectCard({ lang, onOpenPending, onOpenVideo, project, t }) {
  return (
    <article className="project-card" style={{ "--accent": project.accent }}>
      <div className="project-card__media">
        {project.previewVideo ? (
          <video autoPlay muted loop playsInline poster={asset(project.image)}>
            <source src={asset(project.previewVideo)} type="video/mp4" />
          </video>
        ) : (
          <img src={asset(project.image)} alt={project.title} />
        )}
        <span className="project-card__status">{project.status[lang]}</span>
      </div>
      <div className="project-card__body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description[lang]}</p>
        </div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-card__actions">
          {project.video && (
            <button className="icon-button" onClick={onOpenVideo} type="button">
              <Play size={16} />
              {t.watchVideo}
            </button>
          )}
          {project.play && (
            <a className="icon-button" href={project.play} target="_blank" rel="noreferrer">
              <Globe2 size={16} />
              {t.visitProject}
            </a>
          )}
          {project.googlePlay && (
            <a className="icon-button icon-button--store" href={project.googlePlay} target="_blank" rel="noreferrer">
              <Store size={16} />
              {t.googlePlay}
            </a>
          )}
          {project.googlePending && (
            <button className="icon-button icon-button--store" onClick={onOpenPending} type="button">
              <Store size={16} />
              {t.googlePlay}
            </button>
          )}
          {project.github && (
            <a className="icon-button" href={project.github} target="_blank" rel="noreferrer">
              <Github size={16} />
              {t.githubDetails}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function VideoModal({ onClose, project, t }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const type = project.video?.toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4";

  return (
    <div className="modal" onClick={onClose} role="presentation">
      <div className="modal__panel" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} type="button" aria-label="Close video">
          <X size={20} />
        </button>
        <div className="modal__heading">
          <BriefcaseBusiness size={18} />
          <h3>{project.title}</h3>
        </div>
        <video controls autoPlay playsInline poster={asset(project.image)}>
          <source src={asset(project.video)} type={type} />
          {t.watchVideo}
        </video>
      </div>
    </div>
  );
}

function PendingModal({ onClose, t }) {
  return (
    <div className="modal" onClick={onClose} role="presentation">
      <div className="modal__panel modal__panel--compact" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} type="button" aria-label="Close status">
          <X size={20} />
        </button>
        <Store size={28} />
        <h3>{t.pendingTitle}</h3>
        <p>{t.pendingText}</p>
      </div>
    </div>
  );
}

export default App;
