// Fix the industryCategories object to ensure it has all required keys
export const industryCategories: Record<
  string,
  { name: string; industries: string[] }
> = {
  A: {
    name: "Technology Industries",
    industries: [
      "Technology (IT & Software Development)",
      "Cybersecurity",
      "Telecommunications",
      "E-commerce & Retail",
    ],
  },
  B: {
    name: "Healthcare Industries",
    industries: [
      "Healthcare",
      "Pharmaceuticals & Biotechnology",
      "Nonprofit & Social Impact",
      "Government & Public Sector",
    ],
  },
  C: {
    name: "Finance Industries",
    industries: [
      "Finance & Banking",
      "Real Estate & Property Management",
      // "Business Development",
      // "Sales Enablement",
    ],
  },
  D: {
    name: "Engineering Industries",
    industries: [
      "Construction & Engineering",
      "Manufacturing",
      "Transportation & Logistics",
      "Energy & Utilities",
      "Automotive & Aerospace",
      "Agriculture & Food Industry",
    ],
  },
  E: {
    name: "Creative Industries",
    industries: [
      "Marketing & Advertising",
      "Entertainment & Media",
      "Education & E-learning",
      "Hospitality & Tourism",
    ],
  },
};

// Industry details
export const industryData = [
  {
    id: "technology",
    name: "Technology (IT & Software Development)",
    category: "A",
    description:
      "The tech industry encompasses software development, artificial intelligence, cloud computing, and IT infrastructure. Project managers oversee software launches, IT system upgrades, and Agile development workflows.",
    benefits: [
      "High demand for PMs due to rapid digital transformation",
      "Opportunity to work on cutting-edge innovations",
      "High salaries and remote work flexibility",
      "Continuous learning and career growth",
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "A",
    description:
      "This field focuses on protecting networks, data, and systems from cyber threats. PMs manage security audits, software implementation, and risk assessment.",
    benefits: [
      "High demand for cybersecurity experts",
      "Opportunities in government, finance, and tech security",
      "Competitive salaries and long-term job security",
      "Constant learning in evolving threat landscapes",
    ],
  },
  {
    id: "telecommunications",
    name: "Telecommunications",
    category: "A",
    description:
      "This industry includes mobile networks, internet service providers, and 5G expansion. PMs work on infrastructure, digital transformation, and cybersecurity.",
    benefits: [
      "Essential industry with stable growth",
      "Involvement in global communication advancements",
      "Opportunities in IoT, 5G, and network security",
      "High demand for tech-savvy project managers",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    category: "A",
    description:
      "The e-commerce industry includes online marketplaces, supply chain logistics, and digital storefronts. PMs focus on operations, customer experience, and tech integrations.",
    benefits: [
      "Fast-growing industry with global reach",
      "Exposure to digital transformation in retail",
      "Opportunities in logistics, supply chain, and UX design",
      "Flexibility to work with startups and global brands",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    category: "B",
    description:
      "Healthcare project managers oversee hospital system upgrades, medical device launches, patient care initiatives, and compliance projects.",
    benefits: [
      "Meaningful work that improves lives",
      "Job stability in a growing industry",
      "Opportunities in hospitals, pharmaceuticals, and biotech",
      "Strong demand for process improvement and technology integration",
    ],
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals & Biotechnology",
    category: "B",
    description:
      "This field includes drug development, clinical trials, and medical research. PMs handle regulatory compliance, lab projects, and commercialization.",
    benefits: [
      "High-paying and innovation-driven industry",
      "Impactful work in life sciences and disease treatment",
      "Strong job security with continuous research funding",
      "Opportunity to work with top scientists and medical experts",
    ],
  },
  {
    id: "nonprofit",
    name: "Nonprofit & Social Impact",
    category: "B",
    description:
      "Nonprofit PMs manage fundraising, community outreach, and social initiatives.",
    benefits: [
      "Purpose-driven work with real community impact",
      "Opportunities in global development, education, and healthcare",
      "Strong collaboration and networking within mission-driven organizations",
      "Ability to create long-term change through project leadership",
    ],
  },
  {
    id: "government",
    name: "Government & Public Sector",
    category: "B",
    description:
      "PMs in this sector work on public infrastructure, policy implementation, and national programs.",
    benefits: [
      "Job stability and strong benefits",
      "Meaningful impact on society and public services",
      "Opportunities in urban planning, defense, and policy execution",
      "Exposure to large-scale, cross-functional initiatives",
    ],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    category: "C",
    description:
      "This industry involves managing financial systems, investment portfolios, and banking infrastructure. PMs work in fintech, risk management, and financial regulations.",
    benefits: [
      "High-paying industry with long-term career stability",
      "Opportunities in fintech, investment banking, and wealth management",
      "Exposure to international finance and global markets",
      "Strong analytical and strategic skill development",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Property Management",
    category: "C",
    description:
      "This field includes residential, commercial, and real estate development projects. PMs oversee construction, leasing, and investment projects.",
    benefits: [
      "High earning potential in real estate investments",
      "Opportunities in commercial development and property management",
      "Exposure to urban planning and real estate trends",
      "Strong career longevity with asset management skills",
    ],
  },
  {
    id: "business",
    name: "Business Development",
    category: "C",
    description:
      "Business development PMs focus on growth strategies, market expansion, and partnership opportunities to drive company growth.",
    benefits: [
      "Strategic role with high visibility in organizations",
      "Opportunities to shape company direction and growth",
      "Exposure to diverse business models and markets",
      "Strong career advancement potential",
    ],
  },
  {
    id: "sales",
    name: "Sales Enablement",
    category: "C",
    description:
      "Sales enablement PMs develop tools, training, and resources to help sales teams sell more effectively and efficiently.",
    benefits: [
      "Direct impact on company revenue and growth",
      "Collaboration with marketing, product, and sales teams",
      "Opportunities to implement innovative sales technologies",
      "Strong demand for data-driven sales optimization",
    ],
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    category: "D",
    description:
      "This field includes infrastructure projects, commercial real estate, and civil engineering. PMs oversee budgets, scheduling, and compliance.",
    benefits: [
      "Hands-on work with real-world impact",
      "High demand due to continuous urban development",
      "Opportunities for leadership in large-scale projects",
      "Job security in both public and private sector projects",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "D",
    description:
      "This industry covers industrial production, automation, and supply chain management. PMs work on lean manufacturing, process optimization, and factory management.",
    benefits: [
      "Hands-on problem-solving in production and logistics",
      "Strong career stability with innovation in automation",
      "Exposure to global supply chain and production efficiency",
      "Opportunities to reduce costs and improve sustainability",
    ],
  },
  {
    id: "transportation",
    name: "Transportation & Logistics",
    category: "D",
    description:
      "This industry covers supply chain management, freight operations, and transportation planning. PMs optimize logistics and distribution networks.",
    benefits: [
      "Essential industry with strong job security",
      "Opportunities in international trade and global shipping",
      "Exposure to automation and AI-driven logistics solutions",
      "Work in both private and public sectors",
    ],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    category: "D",
    description:
      "This industry includes renewable energy, power grids, and water management. PMs lead sustainability projects and infrastructure expansion.",
    benefits: [
      "High demand for renewable energy expertise",
      "Opportunities in sustainability and climate change initiatives",
      "Exposure to global energy policies and regulations",
      "High salaries and strong career longevity",
    ],
  },
  {
    id: "automotive",
    name: "Automotive & Aerospace",
    category: "D",
    description:
      "This industry focuses on vehicle manufacturing, aeronautics, and transportation innovations. PMs manage product development, supply chains, and tech integrations.",
    benefits: [
      "High-paying roles in innovation and R&D",
      "Opportunities in electric vehicles, aviation, and space technology",
      "Collaboration with engineers, designers, and global manufacturers",
      "Strong growth in automation and AI-driven transportation",
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture & Food Industry",
    category: "D",
    description:
      "This sector includes farming, food production, and agribusiness. PMs work on sustainability, supply chain management, and food safety.",
    benefits: [
      "Stable industry with long-term growth",
      "Opportunities in sustainable farming and food innovation",
      "High impact on food security and global supply chains",
      "Growing demand for agricultural technology solutions",
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Advertising",
    category: "E",
    description:
      "Marketing project managers oversee campaigns, product launches, digital strategies, and branding initiatives.",
    benefits: [
      "Creative and dynamic work environment",
      "Opportunities in digital marketing, social media, and advertising agencies",
      "Exposure to fast-growing influencer and content marketing trends",
      "Collaboration with designers, writers, and content creators",
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment & Media",
    category: "E",
    description:
      "This industry includes film, television, digital content, and media production. PMs handle creative projects, talent management, and production schedules.",
    benefits: [
      "Exciting, fast-paced industry with high-profile projects",
      "Opportunities in film, gaming, streaming, and event management",
      "Exposure to top creative professionals and influencers",
      "Growth in digital media and content marketing",
    ],
  },
  {
    id: "education",
    name: "Education & E-learning",
    category: "E",
    description:
      "Education PMs manage curriculum development, e-learning platforms, and institutional projects in schools and universities.",
    benefits: [
      "Impactful work that shapes future generations",
      "Growth in online learning and EdTech solutions",
      "Opportunities to lead training and workforce development projects",
      "Work-life balance in academic environments",
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    category: "E",
    description:
      "This field includes hotels, travel services, and event management. PMs coordinate operations, customer experience, and travel logistics.",
    benefits: [
      "Dynamic work environment with international exposure",
      "Opportunities to work with global brands and luxury services",
      "Career growth in travel tech and event planning",
      "Strong emphasis on customer experience and service excellence",
    ],
  },
];
