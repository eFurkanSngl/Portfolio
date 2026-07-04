export function asset(name: string): string {
  return `${import.meta.env.BASE_URL}${encodeURI(name)}`;
}

export const marqueeRowOne: string[] = [
  "FunnyMatch.png",
  "LevelGenerator.png",
  "UnityFolderForge.png",
  "FTB.png",
  "FDTH.png",
  "blocksortss.png",
].map(asset);

export const marqueeRowTwo: string[] = [
  "RoyalMatch.png",
  "ThisIsBlast.png",
  "DinoRun.png",
  "OceanBlast.png",
  "FliptIt.png",
].map(asset);

export interface StackProject {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  links: { href: string; label: string }[];
}

export const stackProjects: StackProject[] = [
  {
    id: "color-blast-match",
    number: "01",
    category: "Active Prototype",
    title: "Color Blast Match",
    description:
      "Aktif geliştirme sürecindeki bir match puzzle prototipi. Level dengesi, obstacle çeşitliliği ve görsel kaliteyi mobil game feel'i bozmadan iyileştirmeye odaklanıyorum; grid tabanlı match mantığı, combo/chain sistemleri ve yayınlanabilir kalitede bir sisteme doğru düzenli olarak güncelleniyor.",
    video: asset("ColorBlastMatchHero.mp4"),
    links: [],
  },
  {
    id: "fill-the-block",
    number: "02",
    category: "Google Play",
    title: "Fill The Block",
    description:
      "Google Play'de yayınlanan grid tabanlı mobil puzzle oyunu. ScriptableObject data akışıyla level tasarımını kod dışına taşıdım, object pooling ve localized grid validation ile mobilde stabil performans sağladım. Particle pooling, audio/haptic servisleri ve Firebase Analytics entegrasyonuyla mağaza-hazır bir ürün akışı kurdum.",
    image: asset("FTB.png"),
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.SGLGAMES.FillTheBlocks",
        label: "Google Play",
      },
    ],
  },
  {
    id: "level-generator",
    number: "03",
    category: "Unity Editor Tool",
    title: "Level Generator",
    description:
      "Color Blast Match için yazdığım, Unity Editor içinde çalışan özel bir level tasarım aracı. Grid tabanlı hücre ve obstacle yerleşimini görsel olarak düzenleyip tek tıkla level prefab ve ScriptableObject level data üretiyor; level tasarımcısının kod yazmadan onlarca level çıkarmasını sağlıyor.",
    image: asset("LevelGenerator.png"),
    links: [
      {
        href: "https://github.com/eFurkanSngl/colorblastmatch-level-generator",
        label: "GitHub",
      },
    ],
  },
  {
    id: "unity-folder-forge",
    number: "04",
    category: "Editor Package",
    title: "Unity Folder Forge",
    description:
      "Unity Editor içinde Tools panelinden çalışan, açık kaynak bir proje klasörleme paketi. Seçili ana klasöre tek tıkla alt klasör ekleme, Scripts/Sprites gibi hazır presetler ve root path kontrolü sunuyor; UPM paketi olarak dağıtılıyor ve yeni bir projeye başlarken klasör yapısı kurulumunu dakikalar yerine saniyelere indiriyor.",
    image: asset("UnityFolderForge.png"),
    video: asset("UnityFolderForge-demo.mp4"),
    links: [
      {
        href: "https://github.com/eFurkanSngl/Unity-Folder-Forge",
        label: "GitHub",
      },
    ],
  },
  {
    id: "find-the-differences",
    number: "05",
    category: "Client Work",
    title: "DoubleTake",
    description:
      "Bir client için geliştirdiğim, AI destekli içerik kişiselleştirmesi olan 2D fark bulma oyunu. Difference detection sistemi, hint/lives mekaniği, player progression ve coin economy kurdum; IAP-ready mağaza yapısı ve Google Play yayın süreciyle production kalitesine taşıdım.",
    image: asset("FDTH.png"),
    video: asset("GAmePlayVideos.mp4"),
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.drawtopia.doubletake",
        label: "Google Play",
      },
    ],
  },
  {
    id: "block-sort",
    number: "06",
    category: "Puzzle",
    title: "Block Sort",
    description:
      "Renkli blokları doğru sırayla eşleştirip zincirleme reaksiyonlar oluşturmaya dayanan, tekrar oynanabilirliği yüksek bir puzzle deneyimi. Blok dizilim algoritması, seviye ilerleme eğrisi ve combo geri bildirimleri üzerinde çalışarak kısa oturumlarda tatmin edici bir oynanış akışı hedefledim.",
    image: asset("blocksortss.png"),
    video: asset("Block Sort.mp4"),
    links: [],
  },
  {
    id: "this-is-blast",
    number: "07",
    category: "Tap-to-Blast",
    title: "This is Blast Clone",
    description:
      "Popüler bir tap-to-blast mekaniğinin Zenject SignalBus ile kurulu, gevşek bağlı (loosely-coupled) mimariye sahip bir klonu. ScriptableObject grid data ve object pooling ile GC allocation'ı minimuma indirdim; güçlü squash/push feedback ve camera shake ile dokunuşun hissedilir olmasını sağladım.",
    image: asset("ThisIsBlast.png"),
    video: asset("ThisIsBlastVideo.mp4"),
    links: [
      {
        href: "https://github.com/eFurkanSngl/This-is-Blast-Clone-VP",
        label: "GitHub",
      },
    ],
  },
  {
    id: "royal-match-clone",
    number: "08",
    category: "Match-3 Clone",
    title: "Royal Match Clone",
    description:
      "Türünün en bilinen match-3 oyununun teknik olarak yeniden inşa edilmiş bir klonu. L/T/2x2 shape detection, rocket, bomb, light bomb ve propeller gibi özel eşleşme sonuçlarını modüler bir sistem üzerinde kurdum; DOTween ile animasyon akışını, Zenject ile bağımlılıkları yönettim.",
    image: asset("RoyalMatch.png"),
    video: asset("royal-match-video.mp4"),
    links: [
      {
        href: "https://github.com/eFurkanSngl/Royal-Match-Clone",
        label: "GitHub",
      },
    ],
  },
  {
    id: "funny-match",
    number: "09",
    category: "Match-2",
    title: "Funny Match",
    description:
      "İki eşit parçayı bulup birleştirmeye dayanan bir match-2 oyunu. UnityEvent/UnityAction ile gevşek bağlı (loosely-coupled) gameplay iletişimi kurdum, farklı ekran oranlarında bozulmayan responsive Safe Area UI tasarladım. SFX/Music kontrolü ve PlayerPrefs tabanlı ilerleme kalıcılığı ekledim.",
    image: asset("FunnyMatch.png"),
    video: asset("Funny Match.mp4"),
    links: [],
  },
  {
    id: "flip-it",
    number: "10",
    category: "Itch.io",
    title: "Flip It",
    description:
      "Tek başıma baştan sona geliştirdiğim bir hafıza (memory) oyunu. OOP/SOLID prensipleriyle kurduğum central GameManager akışı üzerine genişleyebilir bir power-up sistemi ekledim; farklı ekran boyutlarına uyum sağlayan adaptive UI ile Itch.io üzerinden yayınladım.",
    image: asset("FliptIt.png"),
    links: [
      { href: "https://frknsngl.itch.io/flip-it", label: "Itch.io" },
      { href: "https://github.com/eFurkanSngl/FlipIt-", label: "GitHub" },
    ],
  },
  {
    id: "dino-run",
    number: "11",
    category: "Endless Runner",
    title: "Dino Run",
    description:
      "Dinamik zorluk eğrisi ve artan hızla ilerleyen bir endless runner arcade oyunu. Engel çeşitliliğini ve spawn sıklığını oyuncunun performansına göre ayarlayan bir zorluk sistemi kurdum; hızlı reflekslere dayalı, tekrar oynanabilir bir oynanış akışı hedefledim.",
    image: asset("DinoRun.png"),
    links: [
      { href: "https://frknsngl.itch.io/dino-run-dino", label: "Itch.io" },
      { href: "https://github.com/eFurkanSngl/Dino-Run-Game", label: "GitHub" },
    ],
  },
  {
    id: "ocean-blast",
    number: "12",
    category: "3D Puzzle",
    title: "OceanBlast",
    description:
      "3D bir match & launch puzzle sistemi. Grid tabanlı color matching mekaniğini launcher/merge mekanikleriyle birleştirdim; Zenject SignalBus ile modüller arası iletişimi, ScriptableObject level data ile level tasarımını kod bağımlılığından ayırdım.",
    image: asset("OceanBlast.png"),
    video: asset("OceanBlast.mp4"),
    links: [
      { href: "https://github.com/eFurkanSngl/OceanBlast", label: "GitHub" },
    ],
  },
];

export const services = [
  {
    number: "01",
    name: "Gameplay Programming",
    description:
      "OOP/SOLID mimarisiyle modüler gameplay sistemleri, event-driven mimari ve ScriptableObject veri akışı kurarım.",
  },
  {
    number: "02",
    name: "Performance & Pooling",
    description:
      "Object Pooling, GC azaltımı, Unity Profiler ve Android build optimizasyonu ile mobil stabiliteyi güçlendiririm.",
  },
  {
    number: "03",
    name: "Game Feel & Polish",
    description:
      "DOTween animasyonları, haptic geri bildirim, particle pooling ve UI transition ile oyuna canlı bir his kazandırırım.",
  },
  {
    number: "04",
    name: "Editor Tooling",
    description:
      "Unity Editor içinde çalışan özel araçlar, otomasyon panelleri ve UPM paketleriyle geliştirme akışını hızlandırırım.",
  },
  {
    number: "05",
    name: "Publishing & Analytics",
    description:
      "SDK entegrasyonu, Firebase Analytics ve Google Play Console süreçleriyle oyunu yayına hazır hale getiririm.",
  },
];
