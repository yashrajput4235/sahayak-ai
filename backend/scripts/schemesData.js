const schemes = [
  // ── FOOD & NUTRITION ──
  {
    name: "National Food Security Act - Public Distribution System",
    category: "Food & Nutrition",
    eligibility: "BPL families, Antyodaya Anna Yojana households",
    benefits: "Subsidized food grains: rice at Rs 3/kg, wheat at Rs 2/kg, coarse grains at Rs 1/kg",
    keywords: ["food", "ration", "PDS", "subsidized", "grains", "BPL", "hunger", "nutrition", "ration card"]
  },
  {
    name: "Antyodaya Anna Yojana",
    category: "Food & Nutrition",
    eligibility: "Poorest of the poor, destitute, landless agricultural labourers, rural artisans",
    benefits: "35 kg food grains per family per month at Rs 2/kg wheat and Rs 3/kg rice",
    keywords: ["food", "poorest", "destitute", "antyodaya", "wheat", "rice", "ration", "AAY"]
  },
  {
    name: "PM Poshan Shakti Nirman (Mid Day Meal)",
    category: "Food & Nutrition",
    eligibility: "Students in government and aided schools classes 1-8",
    benefits: "Free hot cooked meal daily during school hours, improves nutrition and attendance",
    keywords: ["school meal", "nutrition", "children", "free food", "primary school", "mid day meal", "poshan"]
  },
  {
    name: "Pradhan Mantri Anna Yojana (PMAY-G Free Grain)",
    category: "Food & Nutrition",
    eligibility: "All NFSA beneficiaries, priority households",
    benefits: "5 kg free food grains per person per month under PMGKAY",
    keywords: ["free grain", "PMGKAY", "food security", "ration", "rice", "wheat", "free", "COVID relief"]
  },
  {
    name: "Integrated Child Development Services (ICDS)",
    category: "Food & Nutrition",
    eligibility: "Children under 6 years, pregnant women, lactating mothers",
    benefits: "Supplementary nutrition, immunization, health checkup, pre-school education via Anganwadi",
    keywords: ["child", "nutrition", "anganwadi", "pregnant", "mother", "ICDS", "immunization", "6 years"]
  },

  // ── HOUSING ──
  {
    name: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    category: "Housing",
    eligibility: "Homeless rural households, kutcha or dilapidated house dwellers, SECC listed",
    benefits: "Rs 1.2 lakh (plain) or Rs 1.3 lakh (hilly/NE) for pucca house construction",
    keywords: ["housing", "rural", "pucca", "construction", "PMAY-G", "homeless", "gramin", "shelter"]
  },
  {
    name: "Pradhan Mantri Awas Yojana - Urban (PMAY-U)",
    category: "Housing",
    eligibility: "EWS, LIG and MIG urban households without pucca house",
    benefits: "Interest subsidy up to Rs 2.67 lakh on home loans; Credit Linked Subsidy Scheme",
    keywords: ["housing", "urban", "home loan", "subsidy", "EWS", "LIG", "MIG", "PMAY-U", "city"]
  },
  {
    name: "Indira Awaas Yojana (Merged into PMAY-G)",
    category: "Housing",
    eligibility: "SC/ST, freed bonded labourers, non-SC/ST rural BPL households",
    benefits: "Financial assistance for house construction to below poverty line rural families",
    keywords: ["housing", "SC", "ST", "BPL", "rural", "construction", "indira awaas", "shelter"]
  },

  // ── HEALTH ──
  {
    name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    category: "Health Insurance",
    eligibility: "Bottom 40% poor and vulnerable families as per SECC 2011 data",
    benefits: "Health cover of Rs 5 lakh per family per year for secondary and tertiary hospitalization",
    keywords: ["health", "medical", "hospital", "insurance", "ayushman", "5 lakh", "cashless", "treatment"]
  },
  {
    name: "Pradhan Mantri Swasthya Suraksha Yojana",
    category: "Health Infrastructure",
    eligibility: "All citizens in underserved states with inadequate healthcare",
    benefits: "Establishment of new AIIMS and upgrade of Government Medical Colleges",
    keywords: ["AIIMS", "medical college", "health infrastructure", "hospital", "doctor", "specialist"]
  },
  {
    name: "National Health Mission (NHM)",
    category: "Health",
    eligibility: "Rural and urban population, especially maternal and child health",
    benefits: "Free healthcare including JSY, immunization, ASHA workers, free drugs and diagnostics",
    keywords: ["health", "rural", "maternal", "child", "ASHA", "immunization", "NHM", "free medicine"]
  },
  {
    name: "Janani Suraksha Yojana (JSY)",
    category: "Maternal Health",
    eligibility: "Pregnant BPL women for institutional delivery, all pregnant women in low-performing states",
    benefits: "Cash assistance Rs 1400 (rural) / Rs 1000 (urban) for hospital delivery",
    keywords: ["pregnant", "delivery", "maternal", "hospital delivery", "cash benefit", "JSY", "mother", "birth"]
  },
  {
    name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    category: "Maternal Benefit",
    eligibility: "Pregnant and lactating women for first live birth aged 19+ years",
    benefits: "Rs 5000 cash in three instalments for nutrition and health during pregnancy",
    keywords: ["pregnant", "maternity", "cash", "nutrition", "first child", "PMMVY", "lactating", "mother"]
  },
  {
    name: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    category: "Child Health",
    eligibility: "Children aged 0-18 years in government schools and anganwadis",
    benefits: "Free screening for defects at birth, diseases, deficiencies and developmental delays (4D)",
    keywords: ["child health", "screening", "birth defect", "school children", "free treatment", "RBSK"]
  },
  {
    name: "National Tuberculosis Elimination Programme (NTEP)",
    category: "Health",
    eligibility: "All TB patients, priority to drug-resistant TB and vulnerable populations",
    benefits: "Free diagnosis, free treatment, Nikshay Poshan Rs 500/month nutritional support",
    keywords: ["TB", "tuberculosis", "free treatment", "diagnosis", "nutrition support", "NTEP", "RNTCP"]
  },
  {
    name: "National AIDS Control Programme (NACP)",
    category: "Health",
    eligibility: "HIV positive individuals, high-risk groups, general population",
    benefits: "Free ART treatment, free testing, ICTC services, counseling, prevention",
    keywords: ["HIV", "AIDS", "ART", "free treatment", "counseling", "prevention", "NACP", "testing"]
  },
  {
    name: "National Programme for Non-Communicable Diseases",
    category: "Health",
    eligibility: "All citizens, especially those with diabetes, hypertension, cancer risk",
    benefits: "Free screening, diagnosis and treatment for cancer, diabetes, cardiovascular diseases",
    keywords: ["diabetes", "cancer", "hypertension", "heart disease", "NCD", "screening", "free treatment"]
  },
  {
    name: "National Mental Health Programme (NMHP)",
    category: "Mental Health",
    eligibility: "All individuals with mental illness, all income groups",
    benefits: "Free outpatient mental health services, medication, NIMHANS support, community rehabilitation",
    keywords: ["mental health", "depression", "anxiety", "psychiatric", "free treatment", "counseling", "NMHP"]
  },
  {
    name: "Ayushman Bharat - Health and Wellness Centres",
    category: "Health",
    eligibility: "All citizens, especially rural and semi-urban populations",
    benefits: "Comprehensive primary healthcare including medicines, diagnostics, teleconsultation free",
    keywords: ["primary health", "wellness", "HWC", "free medicine", "teleconsultation", "diagnostics"]
  },
  {
    name: "Rashtriya Swasthya Bima Yojana (RSBY)",
    category: "Health Insurance",
    eligibility: "BPL families and unorganized sector workers",
    benefits: "Health insurance Rs 30,000 per family per year for hospitalization",
    keywords: ["health insurance", "BPL", "hospitalization", "RSBY", "cashless", "unorganized", "30000"]
  },

  // ── EDUCATION ──
  {
    name: "Samagra Shiksha Abhiyan",
    category: "Education",
    eligibility: "Students pre-primary to senior secondary in government schools",
    benefits: "Free uniforms, textbooks, digital learning, sports, vocational, inclusive education",
    keywords: ["school", "education", "free uniform", "textbook", "digital", "inclusive", "samagra"]
  },
  {
    name: "PM SHRI Schools",
    category: "Education",
    eligibility: "Government and government-aided school students",
    benefits: "Upgraded model schools with modern infrastructure, labs, smart classrooms",
    keywords: ["model school", "smart classroom", "infrastructure", "PM SHRI", "quality education"]
  },
  {
    name: "National Scholarship Portal Schemes",
    category: "Education",
    eligibility: "SC, ST, OBC, minority students, economically weaker sections",
    benefits: "Pre-matric, post-matric and merit scholarships for school and college students",
    keywords: ["scholarship", "student", "SC", "ST", "OBC", "minority", "merit", "financial aid", "NSP"]
  },
  {
    name: "Beti Bachao Beti Padhao",
    category: "Women & Child Education",
    eligibility: "Girl child, families with daughters especially in low CSR districts",
    benefits: "Education support, awareness, conditional transfers, campaign against female foeticide",
    keywords: ["girl", "education", "daughter", "women", "child", "literacy", "empowerment", "BBBP"]
  },
  {
    name: "Sukanya Samriddhi Yojana",
    category: "Girl Child Savings",
    eligibility: "Girl child below 10 years of age, account by parent/guardian",
    benefits: "High interest 8.2% p.a. savings scheme with tax benefits for education and marriage",
    keywords: ["girl", "savings", "education", "marriage", "sukanya", "interest", "tax", "deposit", "SSY"]
  },
  {
    name: "PM E-VIDYA (Digital Education)",
    category: "Education",
    eligibility: "All school students especially during disruptions",
    benefits: "One nation one digital platform, DTH TV channels per grade, Diksha portal content",
    keywords: ["digital education", "online learning", "TV", "Diksha", "e-vidya", "school", "remote learning"]
  },
  {
    name: "National Means cum Merit Scholarship",
    category: "Education",
    eligibility: "Students from economically weaker sections scoring 55%+ in class 7",
    benefits: "Rs 12,000 per year scholarship from class 9 to 12",
    keywords: ["scholarship", "class 9", "class 10", "merit", "means", "NMMSS", "student", "financial"]
  },

  // ── SOCIAL SECURITY & PENSION ──
  {
    name: "National Social Assistance Programme (NSAP)",
    category: "Social Security",
    eligibility: "Elderly 60+, widows 40-79, disabled persons, BPL households",
    benefits: "Monthly pension: IGNOAPS Rs 200-500, IGNWPS Rs 300, IGNDPS Rs 300, NFBS Rs 20,000",
    keywords: ["pension", "elderly", "widow", "disabled", "BPL", "monthly", "social security", "NSAP"]
  },
  {
    name: "Indira Gandhi National Old Age Pension Scheme",
    category: "Pension",
    eligibility: "BPL persons aged 60-79 get Rs 200/month, aged 80+ get Rs 500/month",
    benefits: "Monthly pension for destitute elderly persons",
    keywords: ["old age", "pension", "elderly", "senior citizen", "BPL", "monthly", "60 years", "80 years"]
  },
  {
    name: "Indira Gandhi National Widow Pension Scheme",
    category: "Pension",
    eligibility: "Widows aged 40-79 years from BPL households",
    benefits: "Monthly pension of Rs 300 per month",
    keywords: ["widow", "pension", "women", "BPL", "monthly", "social security", "bereaved", "IGNWPS"]
  },
  {
    name: "Indira Gandhi National Disability Pension Scheme",
    category: "Disability",
    eligibility: "Severely disabled persons (80%+) aged 18-79 years from BPL families",
    benefits: "Monthly pension of Rs 300 per month",
    keywords: ["disability", "pension", "severe", "BPL", "monthly", "handicapped", "80 percent", "IGNDPS"]
  },
  {
    name: "National Family Benefit Scheme",
    category: "Social Security",
    eligibility: "BPL households where breadwinner aged 18-64 has died",
    benefits: "One-time lump sum assistance of Rs 20,000 on death of breadwinner",
    keywords: ["death", "family", "breadwinner", "BPL", "lump sum", "bereavement", "NFBS"]
  },
  {
    name: "Atal Pension Yojana (APY)",
    category: "Pension",
    eligibility: "Unorganized sector workers aged 18-40 with savings bank account",
    benefits: "Guaranteed monthly pension Rs 1000-5000 from age 60 based on contribution",
    keywords: ["pension", "retirement", "unorganized", "APY", "old age", "monthly income", "savings"]
  },
  {
    name: "PM Shram Yogi Maan-Dhan (PM-SYM)",
    category: "Pension",
    eligibility: "Unorganized workers aged 18-40 with income below Rs 15,000/month",
    benefits: "Rs 3000 monthly pension after 60 years with equal government contribution",
    keywords: ["pension", "unorganized worker", "PM-SYM", "Rs 3000", "retirement", "labour", "shram yogi"]
  },
  {
    name: "PM Kisan Maan-Dhan Yojana",
    category: "Farmer Pension",
    eligibility: "Small and marginal farmers aged 18-40 with land up to 2 hectares",
    benefits: "Rs 3000 monthly pension after 60 years of age",
    keywords: ["farmer", "pension", "kisan", "old age", "agriculture", "Rs 3000", "PM-KMY", "retirement"]
  },

  // ── FINANCIAL INCLUSION & INSURANCE ──
  {
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    category: "Financial Inclusion",
    eligibility: "All unbanked individuals, no minimum balance required",
    benefits: "Zero balance account, RuPay card, Rs 2 lakh accident insurance, Rs 30,000 life cover",
    keywords: ["bank account", "unbanked", "PMJDY", "RuPay", "financial inclusion", "zero balance", "insurance"]
  },
  {
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    category: "Insurance",
    eligibility: "Bank account holders aged 18-70 years",
    benefits: "Accidental death/disability cover Rs 2 lakh at just Rs 20 per year",
    keywords: ["accident insurance", "Rs 2 lakh", "death", "disability", "Rs 20", "PMSBY", "cheap insurance"]
  },
  {
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    category: "Life Insurance",
    eligibility: "Bank account holders aged 18-50 years",
    benefits: "Life insurance cover Rs 2 lakh at Rs 436 per year",
    keywords: ["life insurance", "death", "Rs 2 lakh", "PMJJBY", "nominee", "Rs 436", "annual premium"]
  },
  {
    name: "PM Fasal Bima Yojana (PMFBY)",
    category: "Agriculture Insurance",
    eligibility: "Farmers growing notified crops in notified areas, loanee and non-loanee",
    benefits: "Crop insurance against natural calamities at 2% premium for Kharif, 1.5% Rabi crops",
    keywords: ["crop insurance", "farmer", "natural disaster", "flood", "drought", "PMFBY", "kharif", "rabi"]
  },
  {
    name: "Stand Up India Scheme",
    category: "Entrepreneurship",
    eligibility: "SC/ST and women entrepreneurs for greenfield enterprise",
    benefits: "Bank loans between Rs 10 lakh to Rs 1 crore for first time enterprise",
    keywords: ["SC", "ST", "women", "entrepreneur", "loan", "business", "startup", "stand up", "greenfield"]
  },

  // ── EMPLOYMENT & SKILL ──
  {
    name: "Mahatma Gandhi NREGA (MGNREGS)",
    category: "Rural Employment",
    eligibility: "All rural households willing to do unskilled manual work",
    benefits: "100 days guaranteed wage employment per year at minimum wage, work near residence",
    keywords: ["MGNREGA", "rural employment", "wage", "unskilled", "100 days", "job guarantee", "manual work"]
  },
  {
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    category: "Skill Development",
    eligibility: "Youth including school/college dropouts, Class 10 and 12 pass-outs",
    benefits: "Free short-term skill training, stipend, certification, placement assistance",
    keywords: ["skill training", "youth", "PMKVY", "certificate", "job", "free course", "placement", "dropout"]
  },
  {
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    category: "Rural Skill",
    eligibility: "Rural youth aged 15-35 from poor families, SC/ST and minorities with relaxed norms",
    benefits: "Free skill training with minimum 75% placement guarantee in wage employment",
    keywords: ["rural youth", "skill", "DDU-GKY", "placement", "employment", "wage", "poor", "training"]
  },
  {
    name: "National Urban Livelihoods Mission (NULM/DAY-NULM)",
    category: "Urban Employment",
    eligibility: "Urban poor, street vendors, homeless in urban areas",
    benefits: "Skill training, self-employment support, SHG formation, shelter for homeless",
    keywords: ["urban poor", "livelihood", "self-employment", "street vendor", "shelter", "NULM", "city"]
  },
  {
    name: "PM Employment Generation Programme (PMEGP)",
    category: "Entrepreneurship",
    eligibility: "Individuals 18+ with minimum 8th pass for projects above Rs 10 lakh",
    benefits: "Margin money subsidy 15-35% for micro enterprises; max project Rs 25 lakh (manufacturing)",
    keywords: ["PMEGP", "employment", "entrepreneurship", "loan", "subsidy", "micro enterprise", "self-employed"]
  },
  {
    name: "PM SVANidhi (Street Vendor Loan)",
    category: "Urban Livelihood",
    eligibility: "Street vendors operating in urban areas with vending certificate/LoR",
    benefits: "Collateral-free working capital loan Rs 10,000 → Rs 20,000 → Rs 50,000 on repayment",
    keywords: ["street vendor", "hawker", "loan", "working capital", "SVANidhi", "rehri", "patri", "urban"]
  },
  {
    name: "PM Vishwakarma Yojana",
    category: "Artisans",
    eligibility: "18 traditional trades: carpenter, blacksmith, goldsmith, potter, weaver, cobbler etc.",
    benefits: "Recognition, skill training, modern tools kit, loan up to Rs 3 lakh at 5% interest",
    keywords: ["artisan", "craftsman", "carpenter", "blacksmith", "potter", "weaver", "vishwakarma", "tool kit"]
  },
  {
    name: "Startup India Initiative",
    category: "Entrepreneurship",
    eligibility: "DPIIT-recognized startups under 10 years with turnover under Rs 100 crore",
    benefits: "3-year tax exemption, Fund of Funds Rs 10,000 crore, simplified compliance, IPR support",
    keywords: ["startup", "innovation", "tax exemption", "funding", "incubation", "entrepreneur", "DPIIT"]
  },
  {
    name: "Make in India",
    category: "Industry & Manufacturing",
    eligibility: "Domestic and foreign businesses investing in manufacturing in India",
    benefits: "Ease of doing business, FDI policy relaxation, industrial corridors, sector support",
    keywords: ["manufacturing", "industry", "FDI", "investment", "make in india", "business", "export"]
  },

  // ── AGRICULTURE ──
  {
    name: "PM Kisan Samman Nidhi (PM-KISAN)",
    category: "Agriculture",
    eligibility: "Small and marginal farmers with cultivable land",
    benefits: "Direct income support Rs 6000/year in 3 equal instalments of Rs 2000 each",
    keywords: ["farmer", "income support", "PM-KISAN", "Rs 6000", "land", "agriculture", "DBT", "cultivable"]
  },
  {
    name: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    category: "Agriculture",
    eligibility: "Farmers needing irrigation support, districts with low irrigation coverage",
    benefits: "Har Khet Ko Pani - irrigation connectivity; More Crop Per Drop - micro irrigation",
    keywords: ["irrigation", "farmer", "water", "PMKSY", "drip", "sprinkler", "micro irrigation", "Har Khet"]
  },
  {
    name: "Soil Health Card Scheme",
    category: "Agriculture",
    eligibility: "All farmers across India",
    benefits: "Free soil testing and health card with crop-wise fertilizer recommendations",
    keywords: ["soil", "farmer", "fertilizer", "soil health card", "testing", "crop recommendation", "yield"]
  },
  {
    name: "e-NAM (National Agriculture Market)",
    category: "Agriculture",
    eligibility: "Farmers, traders, buyers registered on the platform",
    benefits: "Online trading platform for agricultural produce, better price discovery, reduced middlemen",
    keywords: ["farmer", "mandi", "online trading", "e-NAM", "price", "agriculture market", "APMCs"]
  },
  {
    name: "Kisan Credit Card (KCC) Scheme",
    category: "Agriculture Credit",
    eligibility: "Farmers, fishermen, animal husbandry farmers",
    benefits: "Short-term credit for crop cultivation, maintenance, post-harvest at 4% interest rate",
    keywords: ["farmer loan", "KCC", "credit", "crop loan", "4%", "agriculture credit", "kisan credit card"]
  },
  {
    name: "National Food Security Mission",
    category: "Agriculture",
    eligibility: "Farmers in targeted districts for rice, wheat, pulses, oilseeds",
    benefits: "Input subsidies, demonstration, farm machinery, certified seeds for productivity increase",
    keywords: ["rice", "wheat", "pulses", "productivity", "seed", "fertilizer", "NFSM", "agriculture support"]
  },
  {
    name: "PM Annadata Aay SanraksHan Abhiyan (PM-AASHA)",
    category: "Agriculture",
    eligibility: "Farmers growing oilseeds, pulses, copra when prices fall below MSP",
    benefits: "Price support through MSP procurement, price deficiency payment or private procurement",
    keywords: ["MSP", "minimum support price", "farmer", "oilseeds", "pulses", "price support", "PM-AASHA"]
  },
  {
    name: "Agricultural Infrastructure Fund (AIF)",
    category: "Agriculture Infrastructure",
    eligibility: "Farmers, FPOs, PACS, cooperatives, agri-entrepreneurs",
    benefits: "Medium-long term loans for post-harvest infrastructure at 3% interest subvention",
    keywords: ["cold storage", "warehouse", "post harvest", "AIF", "farmer", "FPO", "infrastructure", "loan"]
  },
  {
    name: "PM Matsya Sampada Yojana",
    category: "Fisheries",
    eligibility: "Fishermen, fish farmers, fishing cooperatives, entrepreneurs in fisheries",
    benefits: "Development of fisheries infrastructure, Rs 20,050 crore investment, blue revolution",
    keywords: ["fisherman", "fishing", "fisheries", "fish farmer", "PMMSY", "boat", "aquaculture", "blue revolution"]
  },

  // ── WOMEN & CHILD ──
  {
    name: "One Stop Centre Scheme (Sakhi Centre)",
    category: "Women Safety",
    eligibility: "Women affected by violence - domestic, sexual, acid attack, trafficking",
    benefits: "Police, legal, medical, psychological support and temporary shelter under one roof",
    keywords: ["women", "violence", "domestic abuse", "shelter", "legal aid", "sakhi", "one stop centre"]
  },
  {
    name: "Women Helpline Scheme (181)",
    category: "Women Safety",
    eligibility: "All women in distress across India",
    benefits: "24x7 emergency and non-emergency support, referral to police, hospitals, one stop centres",
    keywords: ["women helpline", "181", "emergency", "distress", "violence", "abuse", "24x7", "support"]
  },
  {
    name: "Pradhan Mantri Ujjwala Yojana (PMUY) 2.0",
    category: "Women Energy",
    eligibility: "Women from BPL, SC/ST, migrant and other deprived households without LPG",
    benefits: "Free LPG connection with first refill and stove free; 2.0 includes migrants",
    keywords: ["LPG", "gas", "cooking fuel", "women", "BPL", "ujjwala", "cylinder", "clean cooking fuel"]
  },
  {
    name: "Mission Shakti",
    category: "Women Empowerment",
    eligibility: "All women across India, focus on vulnerable women",
    benefits: "Sambhal (protection/safety) + Samarthya (empowerment) components for holistic development",
    keywords: ["women empowerment", "safety", "mission shakti", "pension", "self-employment", "skill", "SHG"]
  },
  {
    name: "PM Care for Children Scheme",
    category: "Children",
    eligibility: "Children who lost both parents/guardians due to COVID-19",
    benefits: "Rs 10 lakh corpus at 18, monthly stipend, free education, health cover under PM-JAY",
    keywords: ["COVID orphan", "child", "PM CARES", "education", "health", "monthly support", "Rs 10 lakh"]
  },
  {
    name: "Child Labour Elimination Scheme (PENCIL Portal)",
    category: "Child Protection",
    eligibility: "Child labourers identified for rescue and rehabilitation",
    benefits: "Rescue, rehabilitation, education and social reintegration of child labourers",
    keywords: ["child labour", "rescue", "rehabilitation", "education", "PENCIL", "child rights", "school"]
  },
  {
    name: "POSHAN Abhiyan (National Nutrition Mission)",
    category: "Nutrition",
    eligibility: "Pregnant women, lactating mothers, adolescent girls, children under 6",
    benefits: "Reduce stunting, wasting, low birth weight through convergent nutrition interventions",
    keywords: ["nutrition", "stunting", "wasting", "pregnant", "child", "adolescent", "POSHAN", "anganwadi"]
  },

  // ── SANITATION & WATER ──
  {
    name: "Swachh Bharat Mission - Gramin Phase II",
    category: "Sanitation",
    eligibility: "Rural households, especially those without toilets, open defecation free villages",
    benefits: "Rs 12,000 assistance for toilet construction, ODF Plus village status, solid waste management",
    keywords: ["toilet", "sanitation", "hygiene", "ODF", "rural", "swachh bharat", "cleanliness", "waste"]
  },
  {
    name: "Swachh Bharat Mission - Urban 2.0",
    category: "Urban Sanitation",
    eligibility: "Urban households, ULBs for waste management",
    benefits: "Toilet construction, solid/liquid waste management, garbage-free city certification",
    keywords: ["urban toilet", "waste management", "garbage free", "SBM Urban", "city", "cleanliness"]
  },
  {
    name: "Jal Jeevan Mission",
    category: "Drinking Water",
    eligibility: "Rural households without functional tap water connection",
    benefits: "Functional household tap connection (FHTC) with 55 LPCD safe drinking water",
    keywords: ["tap water", "drinking water", "JJM", "rural", "household", "clean water", "pipe", "Nal se Jal"]
  },
  {
    name: "AMRUT 2.0 (Urban Water Supply)",
    category: "Urban Water",
    eligibility: "Residents of 500 AMRUT cities for water and sewerage services",
    benefits: "Universal water tap coverage, sewerage, septage management in urban areas",
    keywords: ["urban water", "sewerage", "city", "AMRUT", "tap water", "sewage treatment", "urban infra"]
  },

  // ── ENERGY & ENVIRONMENT ──
  {
    name: "PM Surya Ghar: Muft Bijli Yojana",
    category: "Solar Energy",
    eligibility: "Residential household consumers wanting rooftop solar installation",
    benefits: "300 units free electricity/month, subsidy up to Rs 78,000 for 3 KW rooftop solar",
    keywords: ["solar", "rooftop solar", "free electricity", "subsidy", "PM surya ghar", "renewable energy"]
  },
  {
    name: "PM Kusum Yojana",
    category: "Solar Irrigation",
    eligibility: "Farmers wanting solar pumps for irrigation, discoms for solarization",
    benefits: "Subsidy for solar pumps up to 7.5 HP, solarization of grid-connected pumps",
    keywords: ["solar pump", "farmer", "irrigation", "KUSUM", "electricity", "subsidy", "energy", "agriculture"]
  },
  {
    name: "Pradhan Mantri Sahaj Bijli Har Ghar Yojana (SAUBHAGYA)",
    category: "Energy",
    eligibility: "Unelectrified households in rural and urban areas",
    benefits: "Free electricity connection to all un-electrified households",
    keywords: ["electricity connection", "BPL", "rural", "free", "saubhagya", "power", "light", "energy"]
  },
  {
    name: "National Biogas Programme",
    category: "Rural Energy",
    eligibility: "Rural households with sufficient cattle, farmers",
    benefits: "Subsidy for family-size biogas plants for cooking fuel and organic manure",
    keywords: ["biogas", "gobar gas", "cooking", "rural", "cattle", "organic", "subsidy", "energy"]
  },

  // ── INFRASTRUCTURE & TRANSPORT ──
  {
    name: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
    category: "Rural Roads",
    eligibility: "Unconnected rural habitations 500+ population (250+ in hilly/tribal)",
    benefits: "All-weather road connectivity to unconnected villages, bridges and culverts",
    keywords: ["road", "rural", "village", "connectivity", "PMGSY", "transport", "bridge", "all weather road"]
  },
  {
    name: "Bharatmala Pariyojana",
    category: "Highway Infrastructure",
    eligibility: "All road users and businesses benefiting from improved national highways",
    benefits: "44,000 km national highway construction including ring roads, economic corridors",
    keywords: ["highway", "national road", "bharatmala", "expressway", "corridor", "transport", "connectivity"]
  },
  {
    name: "Smart Cities Mission",
    category: "Urban Development",
    eligibility: "Citizens of 100 selected smart cities across India",
    benefits: "Smart infrastructure, ICT solutions, integrated command centres, urban mobility",
    keywords: ["smart city", "urban", "technology", "infrastructure", "command centre", "mobility", "city"]
  },
  {
    name: "AMRUT (Atal Mission for Rejuvenation and Urban Transformation)",
    category: "Urban Infrastructure",
    eligibility: "Residents of 500 selected cities and towns",
    benefits: "Water supply, sewerage, urban transport, parks and green spaces development",
    keywords: ["urban infrastructure", "water supply", "sewerage", "parks", "AMRUT", "city", "transport"]
  },

  // ── DISABILITY ──
  {
    name: "Accessible India Campaign (Sugamya Bharat)",
    category: "Disability",
    eligibility: "Persons with disabilities requiring accessible environment",
    benefits: "Accessibility audit and upgrade of public buildings, transport, digital platforms",
    keywords: ["disability", "accessible", "wheelchair", "ramp", "public building", "transport", "sugamya bharat"]
  },
  {
    name: "National Handicapped Finance and Development Corporation (NHFDC)",
    category: "Disability",
    eligibility: "Persons with 40%+ disability for self-employment",
    benefits: "Concessional loans up to Rs 25 lakh for self-employment and education",
    keywords: ["disability", "handicapped", "loan", "self-employment", "NHFDC", "special needs", "rehabilitation"]
  },
  {
    name: "Assistance to Disabled Persons for Purchase of Devices (ADIP)",
    category: "Disability",
    eligibility: "Disabled persons with income under Rs 20,000/month",
    benefits: "Free or subsidized aids and appliances: wheelchairs, hearing aids, prosthetics, tricycles",
    keywords: ["wheelchair", "hearing aid", "prosthetic", "disabled", "aids", "ADIP", "free device", "assistive"]
  },

  // ── MINORITY & TRIBAL ──
  {
    name: "PM Jan Vikas Karyakram (Minority Welfare)",
    category: "Minority Development",
    eligibility: "Minority community members (Muslim, Sikh, Christian, Buddhist, Zoroastrian, Jain)",
    benefits: "Infrastructure development in minority-concentrated areas, education and skill support",
    keywords: ["minority", "Muslim", "Sikh", "Christian", "Buddhist", "welfare", "education", "infrastructure"]
  },
  {
    name: "Pradhan Mantri Van Dhan Vikas Kendra",
    category: "Tribal Livelihood",
    eligibility: "Tribal people collecting minor forest produce (MFP)",
    benefits: "Skill development, value addition to forest produce, market linkage for tribal cooperatives",
    keywords: ["tribal", "forest produce", "MFP", "van dhan", "skill", "market linkage", "livelihood", "adivasi"]
  },
  {
    name: "Eklavya Model Residential Schools",
    category: "Tribal Education",
    eligibility: "ST students in blocks with 50%+ tribal population",
    benefits: "Quality residential education free of cost including food, accommodation, coaching",
    keywords: ["tribal student", "ST", "residential school", "free education", "adivasi", "EMRS", "coaching"]
  },

  // ── ELDERLY & SPECIAL GROUPS ──
  {
    name: "National Programme for Care of Elderly (NPCE)",
    category: "Elderly Care",
    eligibility: "Senior citizens aged 60+ especially without family support",
    benefits: "Day care centres, physiotherapy, mobile Medicare units, helpline 14567",
    keywords: ["elderly", "senior citizen", "old age care", "physiotherapy", "day care", "helpline", "NPCE"]
  },
  {
    name: "Senior Citizen Savings Scheme (SCSS)",
    category: "Elderly Finance",
    eligibility: "Senior citizens aged 60+ (55+ for retired government employees)",
    benefits: "High interest rate ~8.2% pa on deposits up to Rs 30 lakh with quarterly interest payout",
    keywords: ["senior citizen", "savings", "SCSS", "interest", "deposit", "retirement", "post office", "fixed"]
  },
  {
    name: "Vayoshreshtha Samman - National Awards for Elderly",
    category: "Elderly",
    eligibility: "Senior citizens and institutions working for elderly welfare",
    benefits: "Recognition and awards on International Day of Older Persons",
    keywords: ["elderly", "senior citizen", "award", "recognition", "vayoshreshtha", "old age", "honour"]
  },

  // ── DIGITAL & TECHNOLOGY ──
  {
    name: "Digital India Programme",
    category: "Digital Empowerment",
    eligibility: "All citizens for digital access and services",
    benefits: "High speed internet, digital literacy, e-governance services, Common Service Centres",
    keywords: ["digital", "internet", "e-governance", "CSC", "digital literacy", "online services", "technology"]
  },
  {
    name: "PM Wani (Public WiFi)",
    category: "Digital Connectivity",
    eligibility: "Citizens needing affordable public internet access",
    benefits: "Low-cost / free public WiFi hotspots through PDOAs across India",
    keywords: ["wifi", "internet", "public", "PM WANI", "broadband", "connectivity", "digital access"]
  },
  {
    name: "BharatNet (Rural Broadband)",
    category: "Digital Infrastructure",
    eligibility: "Rural gram panchayats across India",
    benefits: "High-speed broadband to all 2.5 lakh gram panchayats via optical fibre",
    keywords: ["broadband", "rural internet", "optical fibre", "BharatNet", "gram panchayat", "connectivity"]
  },

  // ── REHABILITATION & SPECIAL ──
  {
    name: "Pradhan Mantri Dakshata Aur Kushalta Sampann Hitgrahi (PM-DAKSH)",
    category: "Skill Development",
    eligibility: "SC, OBC, EBC, DNT, safai karamcharis aged 18-45",
    benefits: "Free skill development training, Rs 1000-1500 stipend for residential programs",
    keywords: ["SC", "OBC", "EBC", "skill training", "PM-DAKSH", "safai karamchari", "stipend", "free"]
  },
  {
    name: "National Safai Karamcharis Finance and Development Corporation",
    category: "Sanitation Workers",
    eligibility: "Safai Karamcharis, manual scavengers and their dependents",
    benefits: "Concessional loans, education scholarships, skill training for alternative livelihood",
    keywords: ["safai karamchari", "manual scavenger", "sanitation worker", "loan", "scholarship", "NSKFDC"]
  },
  {
    name: "Self Employment Scheme for Rehabilitation of Manual Scavengers",
    category: "Rehabilitation",
    eligibility: "Identified manual scavengers and their dependents",
    benefits: "One-time cash assistance Rs 40,000, training stipend, loans up to Rs 15 lakh at 4% interest",
    keywords: ["manual scavenger", "rehabilitation", "cash assistance", "loan", "training", "SRMS", "livelihood"]
  },

  // ── URBAN POOR & HOMELESS ──
  {
    name: "National Urban Livelihood Mission - Shelter for Urban Homeless (SUH)",
    category: "Urban Homeless",
    eligibility: "Urban homeless individuals and families",
    benefits: "24x7 shelters with basic facilities including food, medical care, skill training",
    keywords: ["homeless", "shelter", "urban", "night shelter", "destitute", "SUH", "basic facilities"]
  },
  {
    name: "PM Awas Yojana Housing for All - EWS Slum Redevelopment",
    category: "Slum Rehabilitation",
    eligibility: "Slum dwellers in urban areas for in-situ slum redevelopment",
    benefits: "Free or affordable pucca house in place of slum with all basic amenities",
    keywords: ["slum", "urban housing", "EWS", "redevelopment", "pucca house", "in-situ", "city housing"]
  }
];

export default schemes;
