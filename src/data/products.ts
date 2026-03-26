export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  category: string;
  detailedDescription: string;
  benefits: string[];
  specifications: string[];
  whyChooseUs: string;
  priceNote: string;
}

export const products: Product[] = [
  {
    id: "automatic-feeding-systems",
    title: "Automatic Feeding Systems",
    shortDescription: "State-of-the-art automated feeding systems for layers and broilers that ensure consistent nutrition delivery.",
    icon: "Zap",
    image: "/assets/feeding-system.jpg",
    features: ["Timed feeding schedules", "Feed waste reduction", "Labor cost savings", "Nutritional consistency"],
    category: "Automation",
    detailedDescription: `Our Automatic Feeding Systems are engineered to revolutionize how you feed your flock. Whether you're running a layer farm with 500 birds or a commercial broiler operation with 50,000+, our feeding systems deliver precise, uniform feed distribution across every cage tier — eliminating the guesswork and inconsistency of manual feeding.

The system uses a motorized chain or auger mechanism that transports feed from a central hopper through enclosed troughs running along every cage row. A programmable timer allows you to set exact feeding times and portions, ensuring each bird receives optimal nutrition at the right intervals. This precision directly translates to better feed conversion ratios (FCR), healthier birds, and higher egg production or faster weight gain.

In Uganda's fast-growing poultry sector, labor is one of the biggest recurring costs. Our automatic feeders can replace 3–5 manual workers per house, paying for themselves within months. The enclosed feed transport also drastically reduces feed spillage and contamination from rodents or weather — saving you up to 15% on feed costs annually.`,
    benefits: [
      "Reduce feed waste by up to 15% compared to manual feeding",
      "Cut labor costs — one system replaces 3-5 workers per poultry house",
      "Ensure every bird gets equal nutrition for uniform flock performance",
      "Programmable timers for precise feeding schedules (up to 8 times/day)",
      "Enclosed feed transport prevents contamination from pests and weather",
      "Improve Feed Conversion Ratio (FCR) for better profitability",
      "Easy to maintain with locally available spare parts",
      "Scalable from 500 to 50,000+ bird capacity"
    ],
    specifications: [
      "Motor power: 0.75kW – 1.5kW (single or three phase)",
      "Feed capacity: 100kg – 2,000kg hopper options",
      "Trough length: Custom to house dimensions",
      "Material: Hot-dip galvanized steel for corrosion resistance",
      "Timer: Digital programmable (up to 8 feed cycles/day)",
      "Suitable for: Layer cages (A-type, H-type) and broiler houses"
    ],
    whyChooseUs: "We don't just sell equipment — we install it, train your staff, and provide after-sales support right here in Uganda. Every system is customized to your farm layout. We've equipped over 200 farms across East Africa.",
    priceNote: "Pricing depends on farm size and configuration. Contact us for a free site assessment and quotation."
  },
  {
    id: "automatic-water-systems",
    title: "Automatic Drinking / Water Systems",
    shortDescription: "Clean, reliable water delivery systems with nipple drinkers and pressure regulation.",
    icon: "Droplets",
    image: "/assets/drinking-system.jpg",
    features: ["Nipple drinker systems", "Pressure regulation", "Clean water delivery", "Leak prevention"],
    category: "Automation",
    detailedDescription: `Water is the single most important nutrient for poultry — a laying hen drinks up to 300ml per day, and even a few hours without water can cause a measurable drop in egg production. Our Automatic Drinking Systems ensure your birds have 24/7 access to fresh, clean water without any manual intervention.

Our systems use high-quality stainless steel nipple drinkers mounted on PVC or galvanized water lines, connected to a header tank with an automatic pressure regulator. Each nipple delivers water on demand when a bird pecks at it, eliminating standing water that breeds bacteria and disease. The pressure regulator maintains consistent flow regardless of how many birds are drinking simultaneously.

We supply both closed (nipple) and open (bell drinker) systems, but we strongly recommend nipple systems for their superior hygiene, water savings, and reduced disease transmission. Our nipple drinkers are sourced from top manufacturers and rated for 10+ years of continuous use.

For farms in areas with unreliable water supply, we also install elevated storage tanks and can integrate with borehole or rainwater harvesting systems to ensure uninterrupted supply.`,
    benefits: [
      "Ensure 24/7 access to clean, fresh water for every bird",
      "Nipple drinkers eliminate standing water — reducing bacterial diseases by up to 60%",
      "Save water — nipple systems use 30% less water than bell drinkers",
      "Pressure regulation ensures consistent flow across all cage tiers",
      "No daily cleaning required unlike open drinker systems",
      "Reduces mortality from dehydration during hot seasons",
      "Compatible with medication and vitamin dosing systems",
      "Long-lasting stainless steel nipples rated for 10+ years"
    ],
    specifications: [
      "Nipple type: 360° stainless steel with drip cup",
      "Flow rate: 60-80ml per minute per nipple",
      "Pressure: 0.2 - 0.4 bar (adjustable regulator included)",
      "Pipe material: UV-resistant PVC or galvanized steel",
      "Nipple spacing: 20-25cm (8-10 birds per nipple)",
      "Header tank: 500L – 5,000L options with float valve"
    ],
    whyChooseUs: "We handle complete installation from tank placement to nipple line assembly. Our team tests every line for leaks before handover, and we train your staff on pressure adjustment and basic maintenance.",
    priceNote: "Systems are priced per line/cage row. Contact us for a customized quote based on your farm layout."
  },
  {
    id: "battery-cage-systems",
    title: "Battery Cage Systems (Layer Cages)",
    shortDescription: "High-quality A-type and H-type layer cages designed for maximum egg production and easy management.",
    icon: "Grid3X3",
    image: "/assets/battery-cages.jpg",
    features: ["A-type & H-type designs", "Hot-dip galvanized steel", "Egg collection trays", "High bird density"],
    category: "Housing",
    detailedDescription: `Our Battery Cage Systems are the backbone of any serious layer operation. We supply both A-type (stepped) and H-type (vertical/stacked) cage systems, each engineered for maximum egg production, easy bird management, and long-term durability in Uganda's tropical climate.

**A-Type Cages** are the most popular choice for small to medium farms (500–5,000 birds). The stepped design allows natural light and ventilation, easy visual inspection of birds, and simple egg collection. Each tier is offset, making manure collection straightforward.

**H-Type Cages** are ideal for large commercial operations (5,000–100,000+ birds) where space efficiency is critical. Birds are housed in vertically stacked tiers (3-8 levels), with integrated automated feeding, watering, egg collection, and manure removal systems. H-type systems can house 3-4 times more birds per square meter than A-type.

All our cages are manufactured from **hot-dip galvanized steel** (not electro-galvanized), which provides 15-20 years of rust-free service even in humid conditions. The cage wire mesh is smooth to prevent feather damage and foot injuries, with sloped floors that gently roll eggs into front collection troughs.

We handle everything from foundation planning to complete installation, including all accessories: feed troughs, nipple drinker lines, egg collection trays, and manure boards or belts.`,
    benefits: [
      "Maximize production — house 3-4x more birds per square meter with H-type",
      "Hot-dip galvanized steel lasts 15-20 years without rusting",
      "Sloped cage floors automatically roll eggs to collection trays — reducing breakage",
      "Smooth wire mesh prevents feather damage and foot injuries",
      "Easy bird inspection and health monitoring access",
      "Complete system: cages + feeding + watering + egg collection included",
      "Modular design — expand your farm in phases as you grow",
      "Professional installation with foundation guidance included"
    ],
    specifications: [
      "A-Type: 3-4 tiers, 96-160 birds per unit (3 birds/cell)",
      "H-Type: 3-8 tiers, 120-256 birds per unit (4-5 birds/cell)",
      "Material: Q235 hot-dip galvanized steel wire (2.0-2.5mm)",
      "Cell dimensions: 400mm x 450mm x 420mm (standard)",
      "Egg roll angle: 7-8 degrees for gentle collection",
      "Galvanization: 275g/m² zinc coating (DIN EN 10346 standard)",
      "Lifespan: 15-20 years under normal conditions"
    ],
    whyChooseUs: "We are Uganda's most experienced cage installers. We've set up farms from 500 to 50,000 birds. We'll visit your site, design the optimal layout, and install everything — you just add the birds.",
    priceNote: "Cage pricing is per bird capacity. We offer flexible payment plans for large orders. Get a free farm design consultation."
  },
  {
    id: "manure-removal-systems",
    title: "Automatic Manure Removal Systems",
    shortDescription: "Efficient automated manure removal systems that maintain hygiene and reduce manual labor.",
    icon: "Recycle",
    image: "/assets/battery-cages.jpg",
    features: ["Belt scraper systems", "Hygiene maintenance", "Ammonia reduction", "Easy disposal"],
    category: "Automation",
    detailedDescription: `Manure management is one of the most overlooked aspects of poultry farming — yet it directly impacts bird health, egg quality, and worker safety. Accumulated manure produces ammonia gas, which at high concentrations causes respiratory diseases, reduced egg production, and even bird mortality. Our Automatic Manure Removal Systems solve this problem completely.

We offer two types of systems:

**Manure Belt Systems** — Polypropylene (PP) belts run beneath each cage tier, collecting droppings continuously. A motor-driven roller system moves the belt to deposit manure at one end of the house into a collection pit or directly onto a trailer. This is the gold standard for H-type cage systems.

**Scraper Systems** — A mechanical scraper board moves along the manure pit beneath A-type cages, pushing droppings to one end for collection. Simpler and more affordable, ideal for smaller farms.

Both systems are operated by timer or manual switch, allowing you to remove manure as frequently as needed — we recommend at least once daily in Uganda's warm climate. Regular removal keeps ammonia levels below the safe threshold of 25 ppm, dramatically improving bird health and worker comfort.

The collected manure is excellent organic fertilizer and can be sold to crop farmers, creating an additional revenue stream for your farm.`,
    benefits: [
      "Reduce ammonia levels by up to 70% — healthier birds, more eggs",
      "Eliminate manual manure shoveling — save labor and improve worker conditions",
      "Prevent disease outbreaks caused by manure-borne bacteria and parasites",
      "Maintain consistent hygiene standards for better egg quality",
      "Timer-controlled operation — set it and forget it",
      "Collected manure is valuable organic fertilizer — earn extra income",
      "Extends cage lifespan by preventing corrosion from acidic droppings",
      "Reduces fly breeding — fewer pest complaints from neighbors"
    ],
    specifications: [
      "Belt material: Polypropylene (PP), 0.8-1.0mm thickness",
      "Belt width: Matched to cage tier width (custom)",
      "Scraper material: Hot-dip galvanized steel frame with HDPE blade",
      "Motor: 0.75kW - 1.5kW geared motor",
      "Operation: Timer-controlled or manual switch",
      "Speed: Full house clearing in 15-30 minutes",
      "Maintenance: Belt replacement every 5-8 years"
    ],
    whyChooseUs: "We design the manure system as part of your complete cage installation, ensuring perfect integration. Our systems are built for Uganda's climate and locally serviceable.",
    priceNote: "Priced per cage row/tier. Usually included in complete cage system packages. Contact us for standalone pricing."
  },
  {
    id: "egg-collection-systems",
    title: "Egg Collection Systems",
    shortDescription: "Automated and semi-automated egg collection systems that reduce breakage and improve efficiency.",
    icon: "Egg",
    image: "/assets/battery-cages.jpg",
    features: ["Conveyor belt collection", "Reduced egg breakage", "Labor savings", "Gentle handling"],
    category: "Automation",
    detailedDescription: `Every cracked egg is lost revenue. In manual collection, egg breakage rates can reach 3-5%, but with our automated egg collection systems, breakage drops to under 0.5%. For a farm producing 10,000 eggs daily, that's the difference between losing 500 eggs or just 50 — saving you millions of shillings annually.

Our egg collection systems work seamlessly with our battery cage installations. Eggs laid on the sloped cage floor roll gently onto a longitudinal conveyor belt that transports them to a central collection point. The belt speed is carefully calibrated to prevent eggs from bumping into each other, and soft rubber cushioning at transfer points absorbs any impact.

For smaller farms (under 5,000 birds), we offer **semi-automated tray systems** where eggs roll into front-mounted collection troughs for easy hand-picking — still far better than reaching into each cage.

For larger operations, our **fully automated conveyor systems** can transport eggs from multiple houses to a single packing room, where they can be graded, cleaned, and packed efficiently. This centralized collection dramatically reduces labor requirements and handling damage.`,
    benefits: [
      "Reduce egg breakage from 3-5% to under 0.5%",
      "Save millions of shillings annually in reduced egg losses",
      "Centralized collection point — no walking between cage rows",
      "Gentle conveyor speed prevents egg-to-egg collision damage",
      "Eggs stay cleaner — less contact with cage surfaces and droppings",
      "Reduce collection labor by up to 80% in large operations",
      "Faster collection means fresher eggs reaching the market",
      "Integrates perfectly with our battery cage systems"
    ],
    specifications: [
      "Belt type: PVC food-grade conveyor belt",
      "Belt speed: 2-4 meters per minute (adjustable)",
      "Capacity: Up to 15,000 eggs per hour",
      "Transfer cushioning: Food-grade rubber bumpers",
      "Motor: 0.37kW - 0.75kW",
      "Compatible with: A-type (tray) and H-type (conveyor) cages"
    ],
    whyChooseUs: "Our egg collection systems are designed specifically for the cage configurations we install — guaranteed perfect fit and maximum efficiency.",
    priceNote: "Included in H-type cage packages. Available as add-on for A-type systems. Contact us for pricing."
  },
  {
    id: "broiler-equipment",
    title: "Broiler Farming Equipment",
    shortDescription: "Complete equipment packages for broiler houses including feeders, drinkers, heaters, and ventilation.",
    icon: "Flame",
    image: "/assets/feeding-system.jpg",
    features: ["Pan feeders & tube feeders", "Gas brooders & heaters", "Ventilation fans", "Complete starter kits"],
    category: "Broiler",
    detailedDescription: `Broiler farming is one of the fastest ways to earn returns in poultry — with birds reaching market weight in just 35-42 days. But achieving optimal growth rates and low mortality requires the right equipment from day one. We supply everything you need for a professional broiler operation.

**Feeding Equipment**: We offer both manual pan feeders for small-scale operations and automatic tube/chain feeders for commercial houses. Our automatic systems distribute feed evenly across the entire house floor, triggered by timer or sensor when pans empty. This ensures birds always have access to fresh feed without overfilling.

**Drinking Equipment**: Nipple drinker lines with pressure regulators, sized appropriately for broiler houses. We also supply bell drinkers for farms that prefer open systems, though we recommend nipples for better hygiene and water efficiency.

**Brooding Equipment**: Gas-powered brooders and radiant heaters to maintain the critical 33-35°C temperature during the first week of life. We supply both pancake brooders (for smaller flocks) and infrared radiant heaters (for large commercial houses). Proper brooding temperature is the single biggest factor in early chick survival.

**Ventilation**: Tunnel ventilation fans, side curtain systems, and circulation fans to manage temperature and air quality. In Uganda's warm climate, proper ventilation can mean the difference between a 5% and 15% mortality rate.

**Lighting**: LED poultry lighting systems with dimmers for optimal light programs that stimulate feed intake and growth.`,
    benefits: [
      "Complete packages — everything you need from day-old chick to market weight",
      "Professional-grade equipment for optimal growth rates (2.0-2.4 FCR)",
      "Gas brooders maintain precise temperatures for maximum chick survival",
      "Ventilation systems critical for Uganda's warm climate — reduce heat stress mortality",
      "Nipple drinkers reduce water-borne disease in broiler flocks",
      "Automatic feeders ensure 24/7 feed access for maximum growth",
      "LED lighting programs stimulate feed intake and faster weight gain",
      "One supplier for everything — simplified procurement and support"
    ],
    specifications: [
      "Pan feeders: 40cm diameter, 25-30 birds per pan",
      "Tube feeders: Automatic with sensor, 50-70 birds per line",
      "Nipple drinkers: 10-12 birds per nipple for broilers",
      "Gas brooders: 1,000-3,000 chick capacity per unit",
      "Ventilation fans: 36\" and 50\" tunnel fans, 1.1kW - 2.2kW",
      "Lighting: 5W-10W LED, dimmable, poultry-spectrum"
    ],
    whyChooseUs: "We've equipped broiler farms across Uganda from 500 to 30,000 bird capacity. We know the local market, local climate challenges, and we provide ongoing technical support.",
    priceNote: "We offer complete broiler house packages at bundled prices. Tell us your target bird capacity and we'll design the perfect setup."
  },
  {
    id: "poultry-drinker-nipples",
    title: "Poultry Drinker Nipples & Accessories",
    shortDescription: "High-quality 360° stainless steel nipple drinkers with drip cups, regulators, and complete fittings.",
    icon: "Droplet",
    image: "/assets/drinking-system.jpg",
    features: ["360° activation", "Stainless steel pins", "Drip cup included", "Bulk pricing available"],
    category: "Accessories",
    detailedDescription: `Our poultry drinker nipples are the most critical component of any modern watering system. We supply premium 360° nipple drinkers that activate from any angle — meaning birds can drink comfortably regardless of their position in the cage. Each nipple features a hardened stainless steel pin and valve mechanism rated for over 10 years of continuous use.

Every nipple comes with a drip cup that catches any excess water, keeping the area beneath dry and reducing humidity-related health issues. The cups are removable for easy cleaning and medication delivery.

We also supply all the accessories you need for a complete installation:
- **PVC water pipes** (square and round profiles)
- **Pressure regulators** with gauge
- **End caps and connectors**
- **Saddle clamps** for cage mounting
- **Header tanks** with float valves
- **Dosing pumps** for medication/vitamins

Whether you're building a new system or replacing worn nipples on an existing one, we stock everything and ship across Uganda within 2-3 business days.`,
    benefits: [
      "360° activation — birds drink comfortably from any angle",
      "Stainless steel valve pin — no rust, no replacement for 10+ years",
      "Drip cups prevent wet litter and reduce humidity-related diseases",
      "Compatible with standard square and round PVC water pipes",
      "Bulk pricing for large orders — significant savings on 1,000+ units",
      "All accessories available from one supplier — no hunting for parts",
      "Fast delivery across Uganda within 2-3 business days",
      "Technical support for installation and pressure calibration"
    ],
    specifications: [
      "Nipple type: 360° ball-valve, stainless steel pin",
      "Flow rate: 60-80ml per minute at 0.2-0.4 bar",
      "Material body: Engineering-grade plastic (UV resistant)",
      "Drip cup: Polypropylene, removable, 50ml capacity",
      "Thread: Standard 9/16\" for PVC pipe insertion",
      "Recommended density: 8-10 layers or 10-12 broilers per nipple",
      "Operating pressure: 0.15 - 0.45 bar"
    ],
    whyChooseUs: "We import directly from top manufacturers, cutting out middlemen to give you the best prices in Uganda. Every batch is quality-tested before sale.",
    priceNote: "Priced per piece with discounts starting at 500+ units. Contact us for bulk pricing."
  },
  {
    id: "farm-management-services",
    title: "Farm Management Services",
    shortDescription: "Complete farm management for absentee owners — from construction to full production. We run your farm while you're away.",
    icon: "Building2",
    image: "/assets/feeding-system.jpg",
    features: ["End-to-end farm setup", "Daily operations management", "Regular reporting", "Production optimization"],
    category: "Services",
    detailedDescription: `Are you based abroad or in another city and dreaming of starting a poultry farm in Uganda? Or do you already have a farm but can't be there to supervise daily operations? Our **Farm Management Services** are designed exactly for you.

We offer a complete, turnkey farm management solution — from the very first brick of the poultry house to the day your farm reaches full production and beyond. You invest, we execute. You receive regular reports and profits while we handle everything on the ground.

**Phase 1: Farm Design & Construction**
We start by helping you acquire suitable land (if needed) and designing the optimal poultry house layout for your budget and goals. Our team oversees all construction — from foundation to roofing — ensuring the structure meets professional poultry farming standards. We handle all equipment procurement and installation (cages, feeders, drinkers, ventilation).

**Phase 2: Stocking & Brooding**
We source quality day-old chicks or point-of-lay birds from reputable hatcheries. Our experienced farm managers handle the critical brooding phase, managing temperature, feeding schedules, and vaccination programs to ensure maximum chick survival rates.

**Phase 3: Daily Operations & Production**
Our on-site farm managers handle all daily operations:
- Feeding and watering management
- Egg collection, grading, and sales (for layers)
- Bird weighing and growth monitoring (for broilers)
- Health monitoring and veterinary coordination
- Staff hiring, training, and supervision
- Feed procurement and inventory management
- Financial record keeping and cost control

**Phase 4: Reporting & Transparency**
You receive detailed weekly or monthly reports including:
- Production data (eggs collected, mortality, feed consumption)
- Financial statements (income, expenses, profit/loss)
- Photos and videos of your farm
- Veterinary reports and vaccination records
- Market analysis and sales reports

We use modern farm management software and can give you real-time access to your farm's performance data from anywhere in the world.`,
    benefits: [
      "Start and run a profitable poultry farm without being physically present",
      "Professional farm managers with 10+ years of poultry experience",
      "End-to-end service: land selection → construction → stocking → production → sales",
      "Transparent reporting with weekly/monthly detailed financial and production reports",
      "Veterinary partnerships for vaccination programs and disease prevention",
      "Staff recruitment, training, and supervision handled completely",
      "Market connections for reliable egg and bird sales channels",
      "Real-time farm data access from anywhere via our management portal",
      "Risk mitigation through professional disease prevention protocols",
      "Scalable — start with 1,000 birds and grow to 50,000+ under our management"
    ],
    specifications: [
      "Minimum recommended flock: 1,000 layers or 2,000 broilers",
      "Management fee: Percentage of revenue or fixed monthly fee (negotiable)",
      "Reporting: Weekly production reports, monthly financial statements",
      "Staffing: 1 manager + workers based on farm size",
      "Veterinary: Partnership with licensed poultry veterinarians",
      "Coverage: Farms within 100km of Kampala (extended coverage negotiable)",
      "Contract: Minimum 1-year management agreement"
    ],
    whyChooseUs: "We are poultry farmers ourselves — we understand every challenge because we face them daily. We treat your farm like our own because our reputation depends on your success. Many of our managed farms are owned by Ugandans in the diaspora who trust us completely.",
    priceNote: "Management fees are structured to align our success with yours. Contact us for a detailed proposal tailored to your investment level and goals."
  },
  {
    id: "ventilation-cooling-systems",
    title: "Ventilation & Cooling Systems",
    shortDescription: "Keep your birds cool and healthy with professional ventilation fans, cooling pads, and air circulation systems.",
    icon: "Wind",
    image: "/assets/battery-cages.jpg",
    features: ["Tunnel ventilation fans", "Evaporative cooling pads", "Temperature controllers", "Climate management"],
    category: "Climate Control",
    detailedDescription: `In Uganda's tropical climate, heat stress is one of the biggest killers of poultry productivity. When temperatures exceed 30°C, layers can reduce egg production by 10-30%, and broilers experience significantly slower growth rates and increased mortality. Our Ventilation & Cooling Systems are specifically designed for East African conditions to keep your birds comfortable year-round.

**Tunnel Ventilation** creates a powerful airflow through the length of the poultry house, reducing the effective temperature felt by birds by 5-8°C through wind chill effect. Our high-efficiency exhaust fans are rated for the specific air volume requirements of poultry houses and come with automatic shutters that prevent backdraft when fans are off.

**Evaporative Cooling Pads** work with tunnel ventilation to cool incoming air by up to 10-12°C. Water runs down corrugated cellulose pads at the air intake end, and as hot outside air passes through the wet pads, it's cooled by evaporation. This can bring the inside temperature from 35°C down to 25°C — a game-changer during Uganda's hot seasons.

**Environmental Controllers** automatically manage fan speed, cooling pad pumps, curtain motors, and lighting based on real-time temperature and humidity sensors inside the house. Set your target temperature and the system does the rest — no manual monitoring required.`,
    benefits: [
      "Reduce heat stress mortality by up to 80% during hot seasons",
      "Maintain egg production during high temperatures (prevent 10-30% drops)",
      "Evaporative cooling can reduce house temperature by 10-12°C",
      "Automatic controllers — set target temperature and forget",
      "Improve feed conversion by keeping birds in comfort zone (20-25°C)",
      "Reduce ammonia and dust levels for better air quality",
      "Energy-efficient fans designed for 24/7 poultry house operation",
      "Complete climate control solution customized for tropical conditions"
    ],
    specifications: [
      "Exhaust fans: 36\", 50\", 54\" — single and three phase options",
      "Fan capacity: 20,000 - 50,000 CFM per unit",
      "Cooling pads: 7090 corrugated cellulose, 150mm thickness",
      "Cooling efficiency: 80-90% saturation efficiency",
      "Controllers: Digital with temperature and humidity sensors",
      "Power: Single phase (small farms) or three phase (commercial)",
      "Pad lifespan: 3-5 years with proper water treatment"
    ],
    whyChooseUs: "We design ventilation systems specifically for Uganda's climate conditions, not generic solutions. Our team calculates exact fan and pad requirements based on your house dimensions, bird density, and local temperatures.",
    priceNote: "Ventilation design is included free with cage system orders. Standalone ventilation projects quoted after site assessment."
  },
  {
    id: "poultry-house-construction",
    title: "Poultry House Design & Construction",
    shortDescription: "Professional poultry house design and construction supervision — built right from the foundation up.",
    icon: "HardHat",
    image: "/assets/battery-cages.jpg",
    features: ["Custom house design", "Foundation planning", "Construction supervision", "Equipment-ready structures"],
    category: "Construction",
    detailedDescription: `The poultry house is the foundation of your entire operation — get it wrong, and even the best equipment won't save you from problems. We've seen too many farmers in Uganda build houses that are too narrow for proper cage installation, have inadequate ventilation, or use roofing that creates unbearable heat inside.

Our **Poultry House Design & Construction** service ensures your structure is purpose-built for modern poultry farming. We don't build houses — we design them and supervise construction to ensure your builder follows our specifications exactly.

**Design Services Include:**
- Site assessment and orientation planning (prevailing winds, sun direction)
- Structural drawings with exact dimensions for your chosen cage system
- Foundation specifications for concrete cage supports
- Roof design for optimal ventilation and heat management
- Water supply and drainage planning
- Electrical layout for fans, lighting, and automation systems
- Biosecurity features (foot baths, perimeter fencing, visitor protocols)

**Construction Supervision:**
We visit the construction site at critical stages to verify:
- Foundation dimensions and reinforcement
- Column spacing and height (matching cage system requirements)
- Roof pitch and overhang (for rain and sun protection)
- Ventilation openings and curtain rail placement
- Floor slope for drainage
- Equipment mounting points

A properly designed poultry house costs only 10-15% more than a generic structure but delivers dramatically better bird performance, lower mortality, and easier management for the entire 20+ year lifespan of the building.`,
    benefits: [
      "Purpose-built design optimized for your specific cage system",
      "Avoid costly mistakes — 80% of farm problems trace back to poor house design",
      "Proper ventilation design reduces heat stress and disease",
      "Correct dimensions ensure maximum bird capacity without compromising welfare",
      "Biosecurity features built in from the start",
      "Equipment-ready — no expensive modifications needed later",
      "Professional drawings you can show to any builder",
      "Construction supervision at critical stages for quality assurance"
    ],
    specifications: [
      "House width: 8m - 15m (depending on cage type and rows)",
      "House length: Custom to bird capacity requirements",
      "Eave height: 2.5m - 4.0m (depending on cage tiers)",
      "Roof type: Gable with ridge ventilation recommended",
      "Foundation: Reinforced concrete strip and cage support pads",
      "Roofing: Pre-painted galvanized iron sheets (gauge 28-30)",
      "Side walls: Brick/block to 0.5m + wire mesh/curtain above"
    ],
    whyChooseUs: "We've designed houses for over 200 farms in Uganda. We know what works in our climate, with our materials, and for our cage systems. Every design is optimized for the equipment going inside.",
    priceNote: "Design fees are waived when you purchase a complete cage system from us. Standalone design services available — contact us for rates."
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
