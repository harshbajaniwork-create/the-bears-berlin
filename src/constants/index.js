export const serviceItems = {
  "Social Media": [
    "Social media strategy",
    "Channel management",
    "Content calendars & planning",
    "Copywriting & captions",
    "Community management",
    "Analytics & performance tracking",
  ],
  "Influencer Marketing": [
    "Creator scouting & selection",
    "Campaign planning & execution",
    "Contracting & negotiations",
    "Reporting & ROI tracking",
  ],
  "Paid Campaigns": [
    "Meta, TikTok, Google, YouTube Ads",
    "Media planning & budgeting",
    "Funnel strategy & retargeting",
    "Creative development for ads",
    "A/B testing & optimization",
    "Campaign reporting & insights",
  ],
  "Design & Development": [
    "Branding & Logo Design",
    "Web design & development",
    "Graphic design",
    "Pitch decks & presentations",
    "3D & Motion",
    "Illustration",
  ],
  "Content Production": [
    "Brand videos",
    "Social-first content",
    "Animation",
    "Photography",
    "Reels, shorts & long-form",
    "Event documentation",
  ],
};

export const navigationLinks = [
  {
    id: "logo",
    title: "Bears Berlin",
    path: "/",
    position: "left",
  },
  {
    id: "exploration",
    title: "Exploration",
    path: "/exploration",
    position: "left",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    position: "right",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
    position: "right",
  },
  {
    id: "services",
    title: "Services",
    path: "/services",
    position: "right",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    position: "right",
  },
];

// constants/moodJungleItems.js
export const moodJungleItems = [
  // Row 1
  { type: "image", src: "/exploration/cat.jpg", alt: "Cat" },
  // {
  //   type: "text",
  //   content:
  //     "A curated collection of work that catches our eye - Campaigns, visuals & ideas that inspire us. They reflect the kind of sharp instinct, storytelling and creative thinking that we admire.",
  //   alignment: "start",
  // },
  { type: "image", src: "/exploration/redeye.jpg", alt: "Red eye" },
  // {
  //   type: "text",
  //   content:
  //     "We do not claim ownership of the images displayed on this page. They are used solely for inspiration, and all rights remain with their respective creators.",
  //   alignment: "start",
  // },
  { type: "image", src: "/exploration/dog.webp", alt: "Dog" },

  // Row 2
  { type: "image", src: "/exploration/face.jpg", alt: "Face" },
  { type: "image", src: "/exploration/glass.webp", alt: "Glass" },
  { type: "image", src: "/exploration/blast.jpg", alt: "Blast" },

  // Row 3
  { type: "image", src: "/exploration/butterfly.jpg", alt: "Butterfly" },
  { type: "image", src: "/exploration/back.webp", alt: "Back" },
  { type: "image", src: "/exploration/sofa.jpg", alt: "Sofa" },

  // Row 4
  { type: "image", src: "/exploration/tree.webp", alt: "Tree" },
  { type: "image", src: "/exploration/bubble.webp", alt: "Bubble" },
  { type: "image", src: "/exploration/orange.webp", alt: "Orange" },

  // Row 5
  { type: "image", src: "/exploration/bug.webp", alt: "Bug" },
  { type: "image", src: "/exploration/stereo.webp", alt: "Stereo" },

  // Row 6
  { type: "image", src: "/exploration/green-hill.webp", alt: "Green Hill" },
  { type: "image", src: "/exploration/cherry.webp", alt: "Cherry" },
  { type: "image", src: "/exploration/dry-grass.webp", alt: "Dry-Grass" },

  // Row 7
  {
    type: "image",
    src: "/exploration/broken-mirror.webp",
    alt: "Broken-Mirror",
  },
  { type: "image", src: "/exploration/steps.webp", alt: "Steps" },
  { type: "image", src: "/exploration/dvd.jpg", alt: "DVD" },

  // Row 8 - Large bike image (special case)
  {
    type: "image",
    src: "/exploration/bike.webp",
    alt: "Bike",
    special: "large", // This will be handled specially in the component
  },
  { type: "image", src: "/exploration/black-women.webp", alt: "Black-Women" },

  // Row 9
  { type: "image", src: "/exploration/penguine.webp", alt: "Penguine" },
  { type: "image", src: "/exploration/bear.webp", alt: "Bear" },

  // Row 10
  { type: "image", src: "/exploration/waist.webp", alt: "Waist" },
  { type: "image", src: "/exploration/man.webp", alt: "Man" },
  { type: "image", src: "/exploration/cd-rock.webp", alt: "CD-DVD" },

  // Row 11
  { type: "image", src: "/exploration/old-lady.webp", alt: "Old-lady" },
  { type: "image", src: "/exploration/perfume.webp", alt: "Perfume" },
  { type: "image", src: "/exploration/girl.webp", alt: "Girl" },

  // Row 12 - Field image (special case - wide)
  {
    type: "image",
    src: "/exploration/field.webp",
    alt: "Field",
    special: "wide", // This will be handled specially
  },
  { type: "image", src: "/exploration/climber.webp", alt: "Climber" },
  { type: "image", src: "/exploration/frog.webp", alt: "Frog" },
  { type: "video", src: "/exploration/scene.mov", alt: "Scene" },
];

export const projects = [
  {
    id: "nike-jilou",
    name: "Nike",
    image: "/nike.webp",
    logo: "/nike-logo.png",
    scopeOfWork: "Post-production",
    industry: "Sport, Lifestyle, Fashion",
    year: "2023",
    tagline:
      "Ahead of Breaking’s debut in Olympic Games, Nike launched a campaign celebrating Germany’s top breaker: B-Girl Jilou. The initiative marked a milestone for both sport and culture, placing a Berlin-based dancer and Nike into the global spotlight.",
    projectDescription:
      "The campaign spanned multiple channels, including social media, Nike online shop, Nike Training Club app (NTC), paid media, collaborations with such media outlets as Highsnobiety and Bravo and retail partners such as Zalando, influencer collaborations, as well as offline events. Our task was to craft a powerful 360° campaign overview that showcased the project’s scale and impact, while keeping it sharp and engaging.",
    finalDescription:
      "We curated the most impactful moments from each campaign execution, blending them into a single motion piece that felt like one fluid dance. The film showcased how different pieces of the campaign, scattered across various channels and timelines, came together into one unified performance. We captured the pulse of the story: bold, inspiring, distinctly Gen Z, helping Nike find a new rhythm in the digital wild.",
    videos: ["6883acf6e0f7710da67642c680f106a9"],
    productImages: [
      "/product-images/jilou-1.avif",
      "/product-images/jilou-2.webp",
      "/product-images/jilou-3.avif",
      "/product-images/jilou-4.webp",
      "/product-images/jilou-5.webp",
      "/product-images/jilou-6.webp",
    ],
  },
  {
    id: "nike-sp24",
    name: "Nike",
    image: "/nike-sp24.webp",
    logo: "/nike-logo.png",
    scopeOfWork: "Post-production",
    industry: "Sport, Lifestyle, Fashion",
    year: "2024",
    tagline:
      "For the launch of the new colourways of Nike Invincible 3, one of the brand’s most cushioned running shoes, Nike organized a Women’s Day experience in Berlin celebrating innovation, movement, and connection. The event brought together female-identifying individuals for a full day of activity: yoga session, community run, panel talk, product trialling, and a private shopping night at the Nike store.",
    projectDescription:
      "Our goal was to capture not only the key highlights of the day, but most importantly the emotion behind them. We wanted to translate the atmosphere into motion, creating a film that carried the same rhythm and sense of connection that participants experienced on site.",
    finalDescription:
      "The video became a vivid echo of the day, full of motion and rooted in the community that made it special. We focused on the faces, emotions, and interactions that defined the atmosphere, while showing how the Nike Invincible 3 naturally became part of experience, carrying the day’s energy forward. The film took Nike’s story beyond the walls of the store, letting it travel and expand the reach of the campaign",
    videos: [
      "307053b544fdbf5fc679bb96e70c4cb1",
      "f288187015046e37bc467f1da858d088",
    ],
    productImages: [
      "/product-images/sp-1.webp",
      "/product-images/sp-2.webp",
      "/product-images/sp-5.webp",
      "/product-images/sp-3.avif",
      "/product-images/sp-4.webp",
      "/product-images/sp-6.webp",
    ],
  },
  {
    id: "zalando-nike",
    name: "Zalando x Nike",
    image: "/product-images/zalando-3.webp",
    logo: "/new-logos/zalando.webp",
    scopeOfWork: "Post-production",
    industry: "Lifestyle, Fashion",
    year: "2025",
    tagline:
      "European fashion giant Zalando marked the launch of the new Nike Air Max Muse with an exclusive IRL experience that brought together key voices from Berlin’s creative scene. The concept was built around the idea of the muse: the spark that inspires creation. The launch experience became a space where culture was created in real time: food, design, and fashion merged into one living experience, co-created by the guests, moment by moment.",
    projectDescription:
      "The experience itself was a curated blend of disciplines: a chef turning Vietnamese cuisine into editable storytelling, a designer reshaping materials into living artworks, a jeweller transforming silver wax into wearable emotions, with distinctive Air Max Muse visual language serving as a connecting element . The guests created, designed, cooked, actively shaping every moment of the experience, rather than purely consuming.",
    finalDescription:
      "Our role was to take this living, breathing experience and translate it into a film that became a window into that world: its energy, textures, colours, pulse, raw emotions, and the magic of human connection. A piece that extended the evening, merging the storytelling before, during, and after the event into a digital narrative that left a trace far beyond the walls where it began.",
    videos: ["14ad70c7db9110aa74a2b47b82a0e6b2"],
    productImages: [
      "/product-images/zalando-1.webp",
      "/product-images/zalando-2.webp",
      "/product-images/zalando-3.webp",
      "/product-images/zalando-4.webp",
      "/product-images/zalando-5.webp",
      "/product-images/zalando-6.webp",
    ],
  },
  {
    id: "mirage",
    name: "Mirage",
    image: "/product-images/mirage-2.webp",
    logo: "/mirage-logo.webp",
    scopeOfWork: "Brand Identity",
    industry: "Beauty, Luxury Goods",
    year: "2024",
    tagline:
      "In a market dominated by established houses, Mirage set out to redefine the idea of luxury fragrance. As a modern perfume laboratory, the brand’s vision was to blend scientific precision with natural purity, creating a nature-conscious alternative that speaks to a more mindful modern luxury consumer. Our task was to translate this philosophy into a visual identity that could stand out in a saturated market while staying true to Mirage’s essence: understated, intelligent, and sensory.",
    finalDescription:
      "Instead of following the conventions of traditional luxury, we took our own path through the wild – embracing modern premium that is refined, minimal, and conscious. The new identity positioned Mirage as a fresh, distinctive voice in the perfume industry: elegant yet grounded, contemporary yet timeless. It gave the brand a visual language capable of resonating with today’s conscious luxury consumer and establishing immediate credibility in a highly competitive space.",
    productImages: [
      "/product-images/mirage-1.webp",
      "/product-images/mirage-2.webp",
      "/product-images/mirage-3.webp",
      "/product-images/mirage-4.webp",
      "/product-images/mirage-5.webp",
      "/product-images/mirage-6.webp",
      "/product-images/mirage-7.webp",
      "/product-images/mirage-8.webp",
      "/product-images/mirage-9.webp",
      "/product-images/mirage-10.webp",
    ],
  },
  {
    id: "le-wagon",
    name: "Le Wagon",
    image: "/le-wagon.webp",
    logo: "/logos/le-wagon.webp",
    scopeOfWork: "Influencer Marketing.",
    industry: "Tech, Education",
    year: "2025",
    tagline:
      "Le Wagon is a global leader in tech education, with over 100 campuses and top rankings worldwide. From web development and data science to AI and growth marketing, their programs help learners from all backgrounds build skills for today’s digital economy. Our task: strengthen Le Wagon’s marketing mix through a fully built, high-performing influencer strategy.",
    finalDescription:
      "The creator content highly resonated with the audience, bringing visibility, authenticity, and genuine connection, and making brand’s story travel through the digital wild",
    images: ["/product-images/leWagon-1.webp"],
    videos: [
      "335fb35f284100eb95df66de492d4273",
      "043af4323607195b264c5a3d0ff0359f",
    ],
  },
  {
    id: "manana",
    name: "Mañana",
    image: "/manana.webp",
    logo: "/manana-logo.webp",
    scopeOfWork: "Brand Identity, Social Media",
    industry: "Media, Culture",
    year: "2024 - 2025",
    tagline:
      "MAÑANA is a new media outlet dedicated to the cultural life of Buenos Aires. Focused on culture, music, and places that define local identity, the magazine connects young audiences with the people and movements shaping the modern face of Argentina’s capital. Our task was to develop MAÑANA’s brand identity and launch its presence on Instagram.",
    productImages: [
      "/product-images/manana-1.webp",
      "/product-images/manana-2.webp",
      "/product-images/manana-3.webp",
      "/product-images/manana-4.webp",
      "/product-images/manana-5.webp",
      "/product-images/manana-6.webp",
    ],
    videos: [
      "7d57a629eb0b3aab6d0f8aafed287756",
      "ca275c12f2ae41a05e91e2267bf1b061",
      "454ed04eed01f9b826f04c7d81f0e4b2",
      "b912eda381a0236b89d1975afb403039",
      "dd2f1916451fdeeb562295db590299fa",
      "3015a3f7f82a0f0323dd69f85b926302",
    ],
  },
  {
    id: "fabletics",
    name: "Fabletics",
    image: "/fabletics.webp",
    logo: "/fabletics-logo.png",
    scopeOfWork: "Influencer Marketing.",
    industry: "Sport, Fashion, Lifestyle",
    year: "2022",
    tagline:
      "Fabletics is a global activewear brand co-founded by actress Kate Hudson. With a philosophy of providing premium products at fair prices, Fabletics became one of the fastest-growing brands in e-commerce history. To accelerate brand’s expansion in the DACH market, we built on Fabletics’ celebrity legacy and executed strategic influencer marketing campaigns end-to-end: handling everything from scouting to briefing, content creation, posting, and performance optimization.",
    projectDescription:
      "We prioritized authenticity, selecting influencers whose brand fit, audience demographics, and community engagement aligned with Fabletics’, at the same time ensuring we reach key performance KPIs. Each collaboration was approached with the focus on engaging storytelling, authentic product integration, and long-term relationships. The goal was to ensure every campaign felt natural to the creator’s lifestyle while delivering measurable brand impact. By leveraging new collections and exclusive pieces from collaborators like Kevin Hart and Khloé Kardashian, we tapped into the aspirational pull of Fabletics and created high-impact content that successfully captivated new audiences, drove conversation, built a sense of exclusivity and belonging around the brand.",
    finalDescription:
      "In a market full of fitness wolves, we helped Fabletics expand its territory, growing influence, community, and business in the digital wild. The campaigns brought tangible results, with returns of up to 12x ROI, proving that when the right ambassador meets authentic storytelling, it’s a win – even in the wildest jungle.",
    videos: [
      "a3cff55cd638cadd8e08656f27081541",
      "39cdc6cb1bab4dd1cfeb92ab811e7789",
      "3162645310b8f9507b6ef2b1622d41dc",
      "0ce967176edb226745f46e354211a31f",
      "ea864517bb23be51fa06a5a2650ac65a",
      "b27cad8142f6e233f99f533989dc1c81",
      "b9e9fc74ac7df7ca133d3e0240cff633",
      "85eed89e8a863ccc5f027f3d46e04da5",
    ],
    productImages: [
      "/product-images/fabletics-1.webp",
      "/product-images/fabletics-2.webp",
      "/product-images/fabletics-3.webp",
      "/product-images/fabletics-4.webp",
    ],
  },
  {
    id: "afrohealth",
    name: "AfroHealth",
    image: "/afrohealth.webp",
    logo: "/logos/afrohealth.webp",
    scopeOfWork:
      "Brand Strategy, Storytelling, Creative Direction, Campaign Production",
    industry: "Health & Wellness",
    year: "2025",
    tagline:
      "Research shows that black people have unique healthcare needs. Yet, most supplements aren’t designed with the Black community in mind. AfroHealth set out to redefine wellness for melanated people and tell a story that has rarely been told: one of science, representation, and care. Our role was to help bring that vision to life and shape the brand narrative and visual expression.",
    projectDescription:
      "We crafted AfroHealth’s tone of voice, key messaging, and creative direction for its launch campaign, built for impact across diverse channels such as investor decks, social media, website. As an innovative healthcare brand, we primarily focused on two things: create a voice people trust and a story that cuts through.",
    finalDescription:
      "We reinforced trust through data and expertise, while turning complex science into an empowering, relatable story. The narrative felt personal and inspiring, rooted in authenticity and reflecting a product created by the Black community, for the Black community. Our work gave AfroHealth a distinctive and loud voice that stood out in a crowded wellness jungle. The campaign positioned AfroHealth® Daily Greens not only as a product, but also a movement for inclusive wellness – a story that keeps growing in the wild, shaping the future of modern health narratives.",
    videos: ["b5958935b22c005ca43540c46381a158"],
    productImages: [
      "/product-images/afrohealth-1.jpg",
      "/product-images/afrohealth-2.jpg",
      "/product-images/afrohealth-3.webp",
      "/product-images/afrohealth-4.jpg",
    ],
  },
  // {
  //   id: "sinous-sisters",
  //   name: "Sinous Sisters",
  //   image: "/sinousSisters.jpg",
  //   logo: "/ss-logo.png",
  //   scopeOfWork: "Brand Partner.",
  //   industry: "",
  //   year: "2023",
  //   timeline: "12 Weeks",
  //   tagline: "",
  //   projectDescription: "",
  //   finalDescription: "",
  //   videos: [
  //     "06756823c70f8cbb607a2a851aa3fc22",
  //     "bf91edde2e21d0cda7da5a6bc496f841",
  //     "54bbe4e005d0138809898e55e1866b2b",
  //   ],
  // },
  {
    id: "ginja",
    name: "Ginja Foods",
    image: "/ginja.webp",
    logo: "/logos/gna.webp",
    scopeOfWork: "Content Production, 3D",
    industry: "Food & Beverage (FMCG)",
    year: "2025",
    tagline:
      "Ginja Foods is a Berlin-based start-up that rethinks the ready-meal space by bringing pre-made Congee, A traditional Asian rice porridge  to the European market. In its early launch phase, with the product not yet in production, our task was to turn an idea into something people could see, feel, and believe in.",
    projectDescription:
      "We created a visual foundation for the launch through 3D product design and motion assets and turned concept into reality. Each visual was built to reflect the product’s essence: warm, nourishing, simple, yet elevated. We paid close attention to texture, light, and atmosphere, creating visuals that looked as real and appetising as the dish itself.",
    finalDescription:
      "The content became a core storytelling tool for early investor presentations and brand teasers. The visuals built credibility and sparked early excitement around the brand, giving investors something to believe in and audiences something to look forward to. Ginja found its voice in the wilderness of the digital world – and began growing a community around a product that didn’t yet exist.",
  },
  {
    id: "motion",
    name: "Film, Video & Motion",
    image: "/motion.webp",
    logo: "/logos/motion.webp",
    scopeOfWork: "Film, Video & Motion",
    industry: "",
    year: "2025",
    timeline: "12 Weeks",
  },
  {
    id: "3d",
    name: "3d Projects",
    image: "/3D/3d 4.webp",
    logo: "/logos/3d.webp",
    scopeOfWork: "Content Production, 3D",
    industry: "",
    year: "2025",
    timeline: "12 Weeks",
  },
];

export const brandLogos = [
  "/logos/kaum.webp",
  "/logos/instruments.webp",
  "/logos/afrohealth.webp",
  "/logos/nike.webp",
  "/logos/le-wagon.webp",
  "/logos/maison.webp",
  "/logos/gna.webp",
  "/logos/fabletics.webp",
  "/logos/mirage.webp",
  "/logos/manana-logo.webp",
  "/logos/zalando.webp",
  "/logos/Silvertex.webp",
  "/logos/Swayd.webp",
];

export const newBrandLogos = [
  "/new-logos/afrohealth.webp",
  "/new-logos/fabletics.webp",
  "/new-logos/ginja.webp",
  "/new-logos/instruments.webp",
  "/new-logos/kaum.webp",
  "/new-logos/le-wagon.webp",
  "/new-logos/manana.webp",
  "/new-logos/masion.webp",
  "/new-logos/mirage.webp",
  "/new-logos/nike.webp",
  "/new-logos/swayd.webp",
  "/new-logos/zalando.webp",
];

export const logo = ["/new-logos/logo.webp"];

// Items for the 3D page Pinterest-style grid
// type: 'image' | 'video' | 'model'
// For 'video', provide cloudflareStreamId. For 'image', provide src. For 'model', provide component and props.
export const threeDItems = [
  // Interior/Room scenes - mostly landscape
  // {
  //   type: "image",
  //   src: "/3D/3d 4.png",
  //   alt: "Interior Design - Living Room",
  //   aspectRatio: "16/9",
  //   category: "interior",
  // },
  {
    type: "image",
    src: "/3D/3d 5.webp",
    alt: "Hyper-real Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },
  {
    type: "image",
    src: "/3D/3d 6.webp",
    alt: "Hyper-real Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },
  {
    type: "image",
    src: "/3D/3d 7.webp",
    alt: "Hyper-real Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },
  {
    type: "image",
    src: "/3D/3d 8.webp",
    alt: "Hyper-real Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },
  {
    type: "image",
    src: "/3D/3d 4.webp",
    alt: "Hyper-real Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },
  {
    type: "image",
    src: "/3D/h2.webp",
    alt: "Detailed Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },
  {
    type: "image",
    src: "/3D/h3.webp",
    alt: "Detailed Space Visualisation",
    aspectRatio: "16/9",
    category: "interior",
  },

  // Architectural/Exterior - mixed ratios
  {
    type: "image",
    src: "/3D/3d 1.webp",
    alt: "Environmental Visualisation",
    aspectRatio: "3/4",
    category: "architecture",
  },
  {
    type: "image",
    src: "/3D/3d 2.webp",
    alt: "Outdoor Scene Rendering",
    aspectRatio: "16/9",
    category: "architecture",
  },
  {
    type: "image",
    src: "/3D/3d 3.webp",
    alt: "Campaign Context Visualisation (Out-of-Home (OOH) & Facade Visualisation)",
    aspectRatio: "4/3",
    category: "architecture",
  },

  // Product/Object - square or portrait
  {
    type: "image",
    src: "/3D/11.webp",
    alt: "Detailed Space Visualisation",
    aspectRatio: "16/9",
    category: "product",
  },
  {
    type: "image",
    src: "/3D/t.webp",
    alt: "Detailed Space Visualisation",
    aspectRatio: "1/1",
    category: "product",
  },
  // Videos via Cloudflare Stream - include optional aspectRatio, default to 16/9
  {
    type: "video",
    cloudflareStreamId: "1cc29392a0cd9f4c7b5f3aed52328513",
    aspectRatio: "16/9",
    alt: "High-End Product Render",
  },
  {
    type: "video",
    cloudflareStreamId: "8c066b60e2eadc3e07e71b5f8a0bef66",
    aspectRatio: "9/16",
    alt: "High-End Product Render",
  },
  {
    type: "video",
    cloudflareStreamId: "be712cf559d94c331c44fa6479e10989",
    aspectRatio: "9/16",
    alt: "High-End Product Render",
  },
  // 3D models
  {
    type: "model",
    model: "outdoor-sitting",
    scale: 0.02,
    alt: "Interactive Design Model",
  },
  {
    type: "model",
    model: "balloon",
    scale: 0.005,
    alt: "Interactive Design Model",
  },
];

export const motionGallery = [
  "44d50479f3f51fb6c386726b261097e7",
  "5ad78c5c272c65f481c4301213d2ff80",
  "454ed04eed01f9b826f04c7d81f0e4b2",
  "b912eda381a0236b89d1975afb403039",
  "3072b56ca88e5286e9393a217dbe0bd6",
  "4b8bec5774b4ef2d40dea45342aa3305",
  "400beb61d7273953d828c8cef902beb6",
  "6fe7ecbaf3817154732be0e0a8eaa2c4",
  "9d98262a84034cd23fea39354e1be80d",
  "dd1d01d49e97d99516c648f6e26ce8a2",
];
