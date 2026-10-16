/* =========================================================
   产品数据  products.js
   ---------------------------------------------------------
   所有产品信息都集中写在这里。
   以后要新增 / 修改产品，只需要改这个文件，
   产品列表页、产品详情页、首页的推荐产品都会自动更新。

   每个产品的字段说明：
     id           唯一编号（只能用英文、数字和短横线），详情页网址会用到它
     name         产品名称
     category     产品分类（必须和下面 CATEGORIES 里的某一项一致）
     tags         显示在卡片上的小标签，比如粘度、API 等级
     color        产品图（SVG 油桶）的主颜色
     featured     true = 在首页“推荐产品”区域展示
     summary      一句话简介（显示在产品卡片上）
     description  详细介绍（显示在详情页）
     features     产品特点列表
     applications 适用范围列表
     specs        技术参数表：[项目, 测试方法, 典型值]
     packaging    包装规格列表
   注意：以下全部是虚构的示例数据，正式上线前请替换为真实数据。
   ========================================================= */

// 产品分类列表（产品列表页的筛选按钮会按这个顺序显示）
const CATEGORIES = [
  "Passenger Car Engine Oil",
  "Heavy Duty Diesel Oil",
  "Motorcycle Oil",
  "Gear & Transmission Oil",
  "Hydraulic Oil",
  "Industrial Oil",
  "Grease"
];

// 产品数据数组
const PRODUCTS = [
  {
    id: "nx-ultra-5w30",
    name: "NORVEX Ultra Full Synthetic 5W-30",
    category: "Passenger Car Engine Oil",
    tags: ["5W-30", "API SP", "ILSAC GF-6A"],
    color: "#c8102e",
    featured: true,
    summary: "Full synthetic engine oil for modern gasoline and turbocharged engines.",
    description:
      "NORVEX Ultra 5W-30 is a premium full synthetic motor oil formulated with advanced PAO base stocks and a low-SAPS additive system. It delivers outstanding protection against wear, sludge and low-speed pre-ignition (LSPI) in modern turbocharged direct-injection (TGDI) engines, while helping to improve fuel economy.",
    features: [
      "Excellent protection against LSPI in turbo GDI engines",
      "Superior cold-start flow for fast lubrication",
      "Keeps engines clean by controlling sludge and deposits",
      "Extended drain intervals up to 15,000 km",
      "Helps improve fuel economy"
    ],
    applications: [
      "Passenger cars, SUVs and light vans with gasoline engines",
      "Turbocharged and direct-injection engines",
      "Hybrid vehicles"
    ],
    specs: [
      ["SAE Viscosity Grade", "SAE J300", "5W-30"],
      ["Kinematic Viscosity @ 100°C, cSt", "ASTM D445", "10.8"],
      ["Kinematic Viscosity @ 40°C, cSt", "ASTM D445", "62.5"],
      ["Viscosity Index", "ASTM D2270", "168"],
      ["Flash Point (COC), °C", "ASTM D92", "232"],
      ["Pour Point, °C", "ASTM D97", "-42"],
      ["Total Base Number, mg KOH/g", "ASTM D2896", "8.2"]
    ],
    packaging: ["1 L", "4 L", "5 L", "20 L", "208 L Drum"]
  },
  {
    id: "nx-pro-10w40",
    name: "NORVEX Pro Semi Synthetic 10W-40",
    category: "Passenger Car Engine Oil",
    tags: ["10W-40", "API SN", "ACEA A3/B4"],
    color: "#0b3d6e",
    featured: false,
    summary: "Reliable semi synthetic oil for everyday driving in all climates.",
    description:
      "NORVEX Pro 10W-40 is a semi synthetic engine oil that blends high-quality mineral and synthetic base oils. It offers dependable protection and stable viscosity for gasoline and light diesel passenger cars operating under a wide range of conditions.",
    features: [
      "Stable viscosity under high temperature",
      "Good oxidation resistance",
      "Reduces oil consumption in older engines",
      "Cost-effective all-season protection"
    ],
    applications: [
      "Gasoline and light diesel passenger cars",
      "Taxis and fleet vehicles",
      "Vehicles with higher mileage"
    ],
    specs: [
      ["SAE Viscosity Grade", "SAE J300", "10W-40"],
      ["Kinematic Viscosity @ 100°C, cSt", "ASTM D445", "14.2"],
      ["Kinematic Viscosity @ 40°C, cSt", "ASTM D445", "98.6"],
      ["Viscosity Index", "ASTM D2270", "150"],
      ["Flash Point (COC), °C", "ASTM D92", "226"],
      ["Pour Point, °C", "ASTM D97", "-33"]
    ],
    packaging: ["1 L", "4 L", "20 L", "208 L Drum"]
  },
  {
    id: "nx-hd-15w40",
    name: "NORVEX HD Diesel 15W-40",
    category: "Heavy Duty Diesel Oil",
    tags: ["15W-40", "API CK-4", "ACEA E9"],
    color: "#1f2933",
    featured: true,
    summary: "Heavy duty engine oil for trucks, buses and construction equipment.",
    description:
      "NORVEX HD Diesel 15W-40 is a high-performance heavy duty diesel engine oil designed for on-highway and off-highway applications. Its robust additive package controls soot, prevents wear and protects after-treatment systems such as DPF and SCR.",
    features: [
      "Outstanding soot handling and wear protection",
      "Compatible with DPF, SCR and EGR systems",
      "High TBN reserve for long drain intervals",
      "Excellent shear stability"
    ],
    applications: [
      "Heavy duty trucks and buses",
      "Construction and mining equipment",
      "Agricultural machinery and generators"
    ],
    specs: [
      ["SAE Viscosity Grade", "SAE J300", "15W-40"],
      ["Kinematic Viscosity @ 100°C, cSt", "ASTM D445", "14.8"],
      ["Viscosity Index", "ASTM D2270", "138"],
      ["Flash Point (COC), °C", "ASTM D92", "230"],
      ["Pour Point, °C", "ASTM D97", "-30"],
      ["Total Base Number, mg KOH/g", "ASTM D2896", "10.5"],
      ["Sulfated Ash, wt%", "ASTM D874", "1.0"]
    ],
    packaging: ["4 L", "18 L", "20 L", "208 L Drum", "1000 L IBC"]
  },
  {
    id: "nx-moto-10w40",
    name: "NORVEX Moto 4T 10W-40",
    category: "Motorcycle Oil",
    tags: ["10W-40", "API SL", "JASO MA2"],
    color: "#f2a900",
    featured: false,
    summary: "4-stroke motorcycle oil with wet-clutch compatibility.",
    description:
      "NORVEX Moto 4T 10W-40 is specially developed for modern four-stroke motorcycles with integrated gearboxes and wet clutches. It ensures smooth gear shifting, reliable clutch engagement and strong engine protection at high RPM.",
    features: [
      "JASO MA2 approved for wet-clutch performance",
      "Smooth and precise gear shifting",
      "Protects engine at high RPM and temperature",
      "Reduces engine noise and vibration"
    ],
    applications: [
      "4-stroke motorcycles and scooters",
      "Street, touring and off-road bikes",
      "ATVs with integrated gearboxes"
    ],
    specs: [
      ["SAE Viscosity Grade", "SAE J300", "10W-40"],
      ["Kinematic Viscosity @ 100°C, cSt", "ASTM D445", "14.0"],
      ["Viscosity Index", "ASTM D2270", "152"],
      ["Flash Point (COC), °C", "ASTM D92", "224"],
      ["Pour Point, °C", "ASTM D97", "-30"]
    ],
    packaging: ["0.8 L", "1 L", "4 L", "20 L"]
  },
  {
    id: "nx-gear-80w90",
    name: "NORVEX Gear EP 80W-90",
    category: "Gear & Transmission Oil",
    tags: ["80W-90", "API GL-5"],
    color: "#7a4b1e",
    featured: true,
    summary: "Extreme pressure gear oil for manual gearboxes and differentials.",
    description:
      "NORVEX Gear EP 80W-90 is a multi-grade extreme pressure gear oil formulated with a sulfur-phosphorus additive system. It provides excellent load-carrying capacity and protects gears against scoring, pitting and corrosion under severe operating conditions.",
    features: [
      "Excellent extreme pressure (EP) performance",
      "Protects against gear wear, pitting and scoring",
      "Good thermal and oxidation stability",
      "Anti-foam and anti-rust protection"
    ],
    applications: [
      "Manual transmissions and transfer cases",
      "Hypoid gear differentials and axles",
      "Commercial vehicles and off-road equipment"
    ],
    specs: [
      ["SAE Viscosity Grade", "SAE J306", "80W-90"],
      ["Kinematic Viscosity @ 100°C, cSt", "ASTM D445", "15.5"],
      ["Kinematic Viscosity @ 40°C, cSt", "ASTM D445", "145"],
      ["Viscosity Index", "ASTM D2270", "102"],
      ["Flash Point (COC), °C", "ASTM D92", "210"],
      ["Pour Point, °C", "ASTM D97", "-27"]
    ],
    packaging: ["1 L", "4 L", "20 L", "208 L Drum"]
  },
  {
    id: "nx-atf-dexron3",
    name: "NORVEX ATF Dexron III",
    category: "Gear & Transmission Oil",
    tags: ["ATF", "Dexron III", "Mercon"],
    color: "#b3123b",
    featured: false,
    summary: "Automatic transmission fluid for smooth and consistent shifting.",
    description:
      "NORVEX ATF Dexron III is a high-quality automatic transmission fluid with excellent friction characteristics and low-temperature fluidity. It ensures smooth shift quality and protects automatic transmissions and power steering systems.",
    features: [
      "Consistent friction for smooth shifting",
      "Excellent low-temperature fluidity",
      "Resists oxidation and varnish formation",
      "Seal compatible to prevent leaks"
    ],
    applications: [
      "Automatic transmissions requiring Dexron III / Mercon",
      "Power steering systems",
      "Certain hydraulic systems"
    ],
    specs: [
      ["Color", "Visual", "Red"],
      ["Kinematic Viscosity @ 100°C, cSt", "ASTM D445", "7.4"],
      ["Kinematic Viscosity @ 40°C, cSt", "ASTM D445", "35.0"],
      ["Viscosity Index", "ASTM D2270", "185"],
      ["Flash Point (COC), °C", "ASTM D92", "200"],
      ["Pour Point, °C", "ASTM D97", "-45"]
    ],
    packaging: ["1 L", "4 L", "20 L", "208 L Drum"]
  },
  {
    id: "nx-hydraulic-aw46",
    name: "NORVEX Hydraulic AW 46",
    category: "Hydraulic Oil",
    tags: ["ISO VG 46", "HM", "DIN 51524-2"],
    color: "#00796b",
    featured: true,
    summary: "Anti-wear hydraulic oil for industrial and mobile equipment.",
    description:
      "NORVEX Hydraulic AW 46 is a premium anti-wear hydraulic oil made from highly refined base oils with zinc-based anti-wear additives. It provides excellent pump protection, filterability and water separation for high-pressure hydraulic systems.",
    features: [
      "Excellent anti-wear protection for pumps",
      "Good demulsibility and filterability",
      "High oxidation and thermal stability",
      "Rust and corrosion protection"
    ],
    applications: [
      "Industrial hydraulic systems and presses",
      "Excavators, loaders and cranes",
      "Injection molding machines"
    ],
    specs: [
      ["ISO Viscosity Grade", "ISO 3448", "46"],
      ["Kinematic Viscosity @ 40°C, cSt", "ASTM D445", "46.2"],
      ["Viscosity Index", "ASTM D2270", "102"],
      ["Flash Point (COC), °C", "ASTM D92", "220"],
      ["Pour Point, °C", "ASTM D97", "-24"],
      ["FZG Load Stage", "DIN ISO 14635-1", ">12"]
    ],
    packaging: ["18 L", "20 L", "208 L Drum", "1000 L IBC", "Bulk"]
  },
  {
    id: "nx-compressor-68",
    name: "NORVEX Compressor Oil 68",
    category: "Industrial Oil",
    tags: ["ISO VG 68", "DAB"],
    color: "#4a5a6a",
    featured: false,
    summary: "Air compressor oil with low carbon-forming tendency.",
    description:
      "NORVEX Compressor Oil 68 is designed for reciprocating and rotary screw air compressors. It resists oxidation and carbon formation at high discharge temperatures, keeping valves clean and extending equipment life.",
    features: [
      "Low carbon deposit formation",
      "Long service life with excellent oxidation stability",
      "Good water separation",
      "Low volatility reduces oil carry-over"
    ],
    applications: [
      "Reciprocating air compressors",
      "Rotary screw and vane compressors",
      "Vacuum pumps"
    ],
    specs: [
      ["ISO Viscosity Grade", "ISO 3448", "68"],
      ["Kinematic Viscosity @ 40°C, cSt", "ASTM D445", "68.5"],
      ["Viscosity Index", "ASTM D2270", "100"],
      ["Flash Point (COC), °C", "ASTM D92", "236"],
      ["Pour Point, °C", "ASTM D97", "-18"]
    ],
    packaging: ["20 L", "208 L Drum"]
  },
  {
    id: "nx-grease-ep2",
    name: "NORVEX Lithium Complex Grease EP2",
    category: "Grease",
    tags: ["NLGI 2", "Lithium Complex", "EP"],
    color: "#2d6cb5",
    featured: false,
    summary: "Multi-purpose high temperature grease for bearings and chassis.",
    description:
      "NORVEX Lithium Complex Grease EP2 is a multi-purpose extreme pressure grease with a high dropping point. It offers excellent water resistance, mechanical stability and load-carrying capacity for automotive and industrial bearings.",
    features: [
      "High dropping point for high-temperature use",
      "Excellent water wash-out resistance",
      "Extreme pressure and anti-wear performance",
      "Good mechanical and shear stability"
    ],
    applications: [
      "Wheel bearings and chassis points",
      "Industrial plain and rolling bearings",
      "Construction and agricultural equipment"
    ],
    specs: [
      ["NLGI Grade", "ASTM D217", "2"],
      ["Thickener Type", "-", "Lithium Complex"],
      ["Worked Penetration @ 25°C, 0.1 mm", "ASTM D217", "280"],
      ["Dropping Point, °C", "ASTM D2265", "265"],
      ["Base Oil Viscosity @ 40°C, cSt", "ASTM D445", "220"],
      ["Four Ball Weld Load, kgf", "ASTM D2596", "315"]
    ],
    packaging: ["400 g Cartridge", "1 kg", "15 kg Pail", "180 kg Drum"]
  }
];

/* ---------------------------------------------------------
   工具函数：根据颜色生成一个“油桶”SVG 图片
   因为暂时没有真实产品照片，所以用代码画一个示意图。
   以后有了真实图片，可以把它换成 <img src="images/xxx.jpg">。
   参数：
     color - 油桶主色
     label - 油桶标签上显示的小字（例如粘度 5W-30）
   --------------------------------------------------------- */
function createBottleSVG(color, label) {
  // 防止标签里出现特殊字符破坏 SVG
  const safeLabel = String(label || "").replace(/[<>&"]/g, "");
  return `
    <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Product bottle">
      <!-- 瓶盖 -->
      <rect x="70" y="6" width="26" height="18" rx="3" fill="#1f2933"/>
      <!-- 瓶颈 -->
      <rect x="72" y="22" width="22" height="12" fill="${color}"/>
      <!-- 瓶身 -->
      <path d="M18 40 Q18 32 26 32 L100 32 Q108 32 108 40 L108 168 Q108 176 100 176 L26 176 Q18 176 18 168 Z" fill="${color}"/>
      <!-- 把手镂空 -->
      <rect x="26" y="40" width="30" height="22" rx="6" fill="rgba(255,255,255,0.25)"/>
      <!-- 白色标签 -->
      <rect x="28" y="78" width="70" height="72" rx="4" fill="#ffffff"/>
      <text x="63" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#0b3d6e">NORVEX</text>
      <rect x="36" y="107" width="54" height="2" fill="#f2a900"/>
      <text x="63" y="127" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#1f2933">${safeLabel}</text>
      <text x="63" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#5f6b7a">LUBRICANTS</text>
      <!-- 高光，让瓶子更有立体感 -->
      <rect x="100" y="44" width="4" height="120" rx="2" fill="rgba(255,255,255,0.25)"/>
    </svg>`;
}

/* ---------------------------------------------------------
   工具函数：生成一张产品卡片的 HTML
   产品列表页和首页推荐产品都会用到
   --------------------------------------------------------- */
function createProductCard(product) {
  // 把标签数组转换成多个 <span class="tag">
  const tagsHTML = product.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  // 详情页地址：product.html?id=产品编号
  const detailURL = `product.html?id=${encodeURIComponent(product.id)}`;

  return `
    <article class="product-card">
      <a class="product-image" href="${detailURL}" aria-label="${product.name}">
        ${createBottleSVG(product.color, product.tags[0])}
      </a>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3><a href="${detailURL}">${product.name}</a></h3>
        <p>${product.summary}</p>
        <div class="tags">${tagsHTML}</div>
        <a class="product-link" href="${detailURL}">View Details &rarr;</a>
      </div>
    </article>`;
}
