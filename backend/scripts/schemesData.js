const schemes =[
  {
    "name": "MGNREGA",
    "category": "Employment",
    "eligibility": "Rural households",
    "benefits": "100 days wage employment",
    "documents": ["Aadhaar", "Job Card"],
    "apply_steps": ["Visit Panchayat", "Register", "Apply for work"],
    "keywords": ["employment", "rural", "wages"]
  },
  {
    "name": "Ayushman Bharat",
    "category": "Healthcare",
    "eligibility": "Low income families",
    "benefits": "₹5 lakh health insurance",
    "documents": ["Aadhaar", "Ration Card"],
    "apply_steps": ["Check eligibility", "Visit hospital"],
    "keywords": ["health", "insurance"]
  },
  {
    "name": "PM Jan Dhan Yojana",
    "category": "Finance",
    "eligibility": "Any citizen",
    "benefits": "Zero balance bank account",
    "documents": ["Aadhaar"],
    "apply_steps": ["Visit bank", "Open account"],
    "keywords": ["bank", "finance"]
  },
  {
    "name": "PM Awas Yojana",
    "category": "Housing",
    "eligibility": "Low income families",
    "benefits": "Housing subsidy",
    "documents": ["Aadhaar", "Income Certificate"],
    "apply_steps": ["Apply online", "Verification"],
    "keywords": ["housing", "home"]
  },
  {
    "name": "Ujjwala Yojana",
    "category": "Energy",
    "eligibility": "BPL families",
    "benefits": "Free LPG connection",
    "documents": ["Aadhaar", "BPL card"],
    "apply_steps": ["Apply at distributor"],
    "keywords": ["gas", "women"]
  },

  {
    "name": "Skill India Mission",
    "category": "Skill",
    "eligibility": "Youth",
    "benefits": "Skill training programs",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register online"],
    "keywords": ["skill", "training"]
  },
  {
    "name": "Startup India",
    "category": "Business",
    "eligibility": "Entrepreneurs",
    "benefits": "Funding + support",
    "documents": ["PAN", "Business proof"],
    "apply_steps": ["Apply online"],
    "keywords": ["startup", "business"]
  },
  {
    "name": "Stand Up India",
    "category": "Business",
    "eligibility": "SC/ST/Women",
    "benefits": "Bank loans",
    "documents": ["Aadhaar", "PAN"],
    "apply_steps": ["Visit bank"],
    "keywords": ["loan", "women"]
  },
  {
    "name": "PM Kisan Samman Nidhi",
    "category": "Agriculture",
    "eligibility": "Farmers",
    "benefits": "₹6000 yearly support",
    "documents": ["Land records"],
    "apply_steps": ["Apply online"],
    "keywords": ["farmer", "income"]
  },
  {
    "name": "Soil Health Card Scheme",
    "category": "Agriculture",
    "eligibility": "Farmers",
    "benefits": "Soil analysis",
    "documents": ["Land details"],
    "apply_steps": ["Apply via agriculture dept"],
    "keywords": ["soil", "farming"]
  },

  {
    "name": "National Pension Scheme",
    "category": "Finance",
    "eligibility": "18-65 years",
    "benefits": "Retirement pension",
    "documents": ["Aadhaar", "PAN"],
    "apply_steps": ["Register online"],
    "keywords": ["pension", "retirement"]
  },
  {
    "name": "Atal Pension Yojana",
    "category": "Finance",
    "eligibility": "Unorganized workers",
    "benefits": "Monthly pension",
    "documents": ["Aadhaar"],
    "apply_steps": ["Enroll via bank"],
    "keywords": ["pension"]
  },
  {
    "name": "Pradhan Mantri Suraksha Bima Yojana",
    "category": "Insurance",
    "eligibility": "18-70 years",
    "benefits": "Accident insurance",
    "documents": ["Bank account"],
    "apply_steps": ["Enroll via bank"],
    "keywords": ["insurance"]
  },
  {
    "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    "category": "Insurance",
    "eligibility": "18-50 years",
    "benefits": "Life insurance",
    "documents": ["Bank account"],
    "apply_steps": ["Enroll"],
    "keywords": ["insurance"]
  },
  {
    "name": "Beti Bachao Beti Padhao",
    "category": "Women",
    "eligibility": "Girl child",
    "benefits": "Education support",
    "documents": ["Birth certificate"],
    "apply_steps": ["Enroll"],
    "keywords": ["girls", "education"]
  },

  {
    "name": "Sukanya Samriddhi Yojana",
    "category": "Finance",
    "eligibility": "Girl child",
    "benefits": "Savings scheme",
    "documents": ["Birth certificate"],
    "apply_steps": ["Open account"],
    "keywords": ["savings"]
  },
  {
    "name": "Mid Day Meal Scheme",
    "category": "Education",
    "eligibility": "School children",
    "benefits": "Free meals",
    "documents": ["School ID"],
    "apply_steps": ["Automatic"],
    "keywords": ["food", "school"]
  },
  {
    "name": "Right to Education",
    "category": "Education",
    "eligibility": "6-14 years",
    "benefits": "Free education",
    "documents": ["Age proof"],
    "apply_steps": ["School admission"],
    "keywords": ["education"]
  },
  {
    "name": "Digital India",
    "category": "Technology",
    "eligibility": "Citizens",
    "benefits": "Digital services",
    "documents": ["Aadhaar"],
    "apply_steps": ["Use portal"],
    "keywords": ["digital"]
  },
  {
    "name": "Make in India",
    "category": "Industry",
    "eligibility": "Businesses",
    "benefits": "Manufacturing boost",
    "documents": ["Company docs"],
    "apply_steps": ["Apply"],
    "keywords": ["industry"]
  },
  {
    "name": "PM Fasal Bima Yojana",
    "category": "Agriculture",
    "eligibility": "Farmers",
    "benefits": "Crop insurance coverage",
    "documents": ["Land records", "Aadhaar"],
    "apply_steps": ["Enroll via bank", "Pay premium"],
    "keywords": ["crop", "insurance", "farmer"]
  },
  {
    "name": "eNAM (National Agriculture Market)",
    "category": "Agriculture",
    "eligibility": "Farmers and traders",
    "benefits": "Online trading platform",
    "documents": ["Aadhaar", "Bank details"],
    "apply_steps": ["Register online"],
    "keywords": ["market", "agriculture"]
  },
  {
    "name": "PM Matsya Sampada Yojana",
    "category": "Fisheries",
    "eligibility": "Fishermen",
    "benefits": "Financial support for fisheries",
    "documents": ["Aadhaar"],
    "apply_steps": ["Apply online"],
    "keywords": ["fishery", "income"]
  },
  {
    "name": "National Food Security Act",
    "category": "Food",
    "eligibility": "Low-income families",
    "benefits": "Subsidized food grains",
    "documents": ["Ration card"],
    "apply_steps": ["Enroll via PDS"],
    "keywords": ["food", "ration"]
  },
  {
    "name": "PM Garib Kalyan Anna Yojana",
    "category": "Food",
    "eligibility": "Poor households",
    "benefits": "Free food grains",
    "documents": ["Ration card"],
    "apply_steps": ["Automatic"],
    "keywords": ["food", "support"]
  },
  {
    "name": "National Rural Livelihood Mission",
    "category": "Livelihood",
    "eligibility": "Rural poor",
    "benefits": "Self-employment support",
    "documents": ["Aadhaar"],
    "apply_steps": ["Join SHG"],
    "keywords": ["livelihood", "women"]
  },
  {
    "name": "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    "category": "Skill",
    "eligibility": "Rural youth",
    "benefits": "Free skill training",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register"],
    "keywords": ["training", "rural"]
  },
  {
    "name": "PM SVANidhi",
    "category": "Finance",
    "eligibility": "Street vendors",
    "benefits": "Collateral-free loans",
    "documents": ["Vendor ID", "Aadhaar"],
    "apply_steps": ["Apply via portal"],
    "keywords": ["loan", "vendor"]
  },
  {
    "name": "National Scholarship Portal",
    "category": "Education",
    "eligibility": "Students",
    "benefits": "Scholarships",
    "documents": ["Aadhaar", "Academic proof"],
    "apply_steps": ["Apply online"],
    "keywords": ["scholarship", "student"]
  },
  {
    "name": "PM eVIDYA",
    "category": "Education",
    "eligibility": "Students",
    "benefits": "Digital education access",
    "documents": ["School ID"],
    "apply_steps": ["Access online"],
    "keywords": ["education", "digital"]
  },

  {
    "name": "Rashtriya Madhyamik Shiksha Abhiyan",
    "category": "Education",
    "eligibility": "Secondary students",
    "benefits": "School infrastructure",
    "documents": ["School enrollment"],
    "apply_steps": ["Automatic"],
    "keywords": ["education"]
  },
  {
    "name": "PM Poshan Shakti Nirman",
    "category": "Nutrition",
    "eligibility": "School children",
    "benefits": "Nutritional meals",
    "documents": ["School ID"],
    "apply_steps": ["Automatic"],
    "keywords": ["nutrition"]
  },
  {
    "name": "National Health Mission",
    "category": "Healthcare",
    "eligibility": "All citizens",
    "benefits": "Healthcare services",
    "documents": ["Aadhaar"],
    "apply_steps": ["Visit health center"],
    "keywords": ["health"]
  },
  {
    "name": "Janani Suraksha Yojana",
    "category": "Healthcare",
    "eligibility": "Pregnant women",
    "benefits": "Cash assistance",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register at hospital"],
    "keywords": ["mother", "health"]
  },
  {
    "name": "Rashtriya Swasthya Bima Yojana",
    "category": "Insurance",
    "eligibility": "BPL families",
    "benefits": "Health insurance",
    "documents": ["BPL card"],
    "apply_steps": ["Enroll"],
    "keywords": ["insurance"]
  },

  {
    "name": "Swachh Bharat Mission",
    "category": "Sanitation",
    "eligibility": "All citizens",
    "benefits": "Toilet construction support",
    "documents": ["Aadhaar"],
    "apply_steps": ["Apply"],
    "keywords": ["sanitation"]
  },
  {
    "name": "Jal Jeevan Mission",
    "category": "Water",
    "eligibility": "Rural households",
    "benefits": "Tap water supply",
    "documents": ["Address proof"],
    "apply_steps": ["Apply"],
    "keywords": ["water"]
  },
  {
    "name": "Smart Cities Mission",
    "category": "Urban",
    "eligibility": "Urban residents",
    "benefits": "Urban infrastructure",
    "documents": ["Address proof"],
    "apply_steps": ["Indirect benefit"],
    "keywords": ["city"]
  },
  {
    "name": "AMRUT Mission",
    "category": "Urban",
    "eligibility": "Urban areas",
    "benefits": "Water & sewer infrastructure",
    "documents": ["Address proof"],
    "apply_steps": ["Indirect"],
    "keywords": ["urban"]
  },
  {
    "name": "National Digital Health Mission",
    "category": "Healthcare",
    "eligibility": "Citizens",
    "benefits": "Digital health ID",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register"],
    "keywords": ["digital", "health"]
  },

  {
    "name": "PM Shram Yogi Maandhan",
    "category": "Social Security",
    "eligibility": "Unorganized workers",
    "benefits": "Monthly pension",
    "documents": ["Aadhaar"],
    "apply_steps": ["Enroll"],
    "keywords": ["pension"]
  },
  {
    "name": "E-Shram Portal",
    "category": "Labor",
    "eligibility": "Unorganized workers",
    "benefits": "Worker database",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register online"],
    "keywords": ["labor"]
  },
  {
    "name": "PM Kaushal Vikas Yojana",
    "category": "Skill",
    "eligibility": "Youth",
    "benefits": "Skill training",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register"],
    "keywords": ["training"]
  },
  {
    "name": "National Apprenticeship Promotion Scheme",
    "category": "Skill",
    "eligibility": "Students",
    "benefits": "Apprenticeship training",
    "documents": ["Education proof"],
    "apply_steps": ["Apply"],
    "keywords": ["apprentice"]
  },
  {
    "name": "PM Mudra Yojana",
    "category": "Finance",
    "eligibility": "Small businesses",
    "benefits": "Business loans",
    "documents": ["PAN", "Aadhaar"],
    "apply_steps": ["Apply via bank"],
    "keywords": ["loan", "business"]
  },

  {
    "name": "Credit Guarantee Fund Scheme",
    "category": "Finance",
    "eligibility": "MSMEs",
    "benefits": "Loan guarantee",
    "documents": ["Business docs"],
    "apply_steps": ["Apply"],
    "keywords": ["msme"]
  },
  {
    "name": "PM Employment Generation Programme",
    "category": "Employment",
    "eligibility": "Entrepreneurs",
    "benefits": "Subsidy for startups",
    "documents": ["Project report"],
    "apply_steps": ["Apply online"],
    "keywords": ["employment"]
  },
  {
    "name": "National Career Service",
    "category": "Employment",
    "eligibility": "Job seekers",
    "benefits": "Job matching",
    "documents": ["Aadhaar"],
    "apply_steps": ["Register online"],
    "keywords": ["jobs"]
  },
  {
    "name": "One Nation One Ration Card",
    "category": "Food",
    "eligibility": "Ration card holders",
    "benefits": "Portability of ration",
    "documents": ["Ration card"],
    "apply_steps": ["Automatic"],
    "keywords": ["ration"]
  },
  {
    "name": "PM Gram Sadak Yojana",
    "category": "Infrastructure",
    "eligibility": "Rural areas",
    "benefits": "Road connectivity",
    "documents": ["NA"],
    "apply_steps": ["Government execution"],
    "keywords": ["road"]
  },

  // ── Low Income & Poverty Relief ──────────────────────────────────────────
  {
    "name": "PM Garib Kalyan Yojana",
    "category": "Social Security",
    "eligibility": "BPL and low-income families",
    "benefits": "Cash transfers, free food, insurance, and employment support for the poorest households",
    "documents": ["Aadhaar", "Ration Card", "Bank account"],
    "apply_steps": ["Visit nearest CSC", "Link Aadhaar to bank", "Receive direct benefit transfer"],
    "keywords": ["poor", "low income", "cash transfer", "BPL", "poverty"]
  },
  {
    "name": "National Social Assistance Programme (NSAP)",
    "category": "Social Security",
    "eligibility": "BPL elderly, widows, disabled persons",
    "benefits": "Monthly pension ₹200–₹500",
    "documents": ["Aadhaar", "BPL card", "Age proof"],
    "apply_steps": ["Apply at Gram Panchayat or district office", "Submit documents", "Pension credited to bank"],
    "keywords": ["pension", "elderly", "widow", "disability", "low income", "BPL"]
  },
  {
    "name": "Indira Gandhi National Old Age Pension Scheme",
    "category": "Social Security",
    "eligibility": "BPL citizens aged 60 and above",
    "benefits": "Monthly pension ₹200 (60–79 yrs), ₹500 (80+ yrs)",
    "documents": ["Aadhaar", "Age proof", "BPL certificate"],
    "apply_steps": ["Apply at Gram Panchayat", "Verification by district", "Pension credited monthly"],
    "keywords": ["old age", "pension", "elderly", "low income", "BPL"]
  },
  {
    "name": "Indira Gandhi National Widow Pension Scheme",
    "category": "Social Security",
    "eligibility": "BPL widows aged 40–79",
    "benefits": "Monthly pension ₹300",
    "documents": ["Aadhaar", "Death certificate of husband", "BPL card"],
    "apply_steps": ["Apply at Panchayat or welfare office", "Document verification", "Pension credited"],
    "keywords": ["widow", "women", "pension", "low income", "BPL"]
  },
  {
    "name": "Indira Gandhi National Disability Pension Scheme",
    "category": "Social Security",
    "eligibility": "BPL persons with 80%+ disability, aged 18+",
    "benefits": "Monthly pension ₹300",
    "documents": ["Disability certificate", "BPL card", "Aadhaar"],
    "apply_steps": ["Apply at district social welfare office", "Disability verification", "Pension credited"],
    "keywords": ["disability", "disabled", "pension", "low income", "BPL"]
  },
  {
    "name": "Antyodaya Anna Yojana (AAY)",
    "category": "Food",
    "eligibility": "Poorest of poor families, destitute, widows, disabled, daily wage earners",
    "benefits": "35 kg food grain per month at ₹2/kg wheat and ₹3/kg rice",
    "documents": ["AAY Ration card", "Aadhaar"],
    "apply_steps": ["Apply for AAY ration card at PDS office", "Collect grains from fair price shop monthly"],
    "keywords": ["food", "grain", "ration", "poorest", "BPL", "destitute", "low income"]
  },
  {
    "name": "PM Vishwakarma Yojana",
    "category": "Skill",
    "eligibility": "Traditional artisans and craftspeople (blacksmith, carpenter, potter, tailor, cobbler etc.)",
    "benefits": "₹15,000 toolkit grant, skill training, collateral-free loans up to ₹3 lakh",
    "documents": ["Aadhaar", "Trade proof", "Bank account"],
    "apply_steps": ["Register on PM Vishwakarma portal", "Verify via Gram Panchayat", "Receive toolkit and training"],
    "keywords": ["artisan", "craft", "skill", "loan", "low income", "traditional work"]
  },
  {
    "name": "National Family Benefit Scheme",
    "category": "Social Security",
    "eligibility": "BPL families who have lost their primary breadwinner (18–64 yrs)",
    "benefits": "One-time lump sum ₹20,000",
    "documents": ["Death certificate", "BPL card", "Aadhaar", "Bank account"],
    "apply_steps": ["Apply at district social welfare office within 1 year of death", "Submit documents", "Receive payment"],
    "keywords": ["death", "breadwinner", "family", "low income", "BPL", "financial help"]
  },
  {
    "name": "PM Care for Children Scheme",
    "category": "Child Welfare",
    "eligibility": "Children who lost parents/guardians due to COVID-19 or other crises",
    "benefits": "Monthly stipend, free education, ₹10 lakh corpus at age 23",
    "documents": ["Death certificate of parents", "Birth certificate", "Aadhaar"],
    "apply_steps": ["Apply on pmcaresforchildren.in", "District Magistrate verification", "Benefits disbursed"],
    "keywords": ["orphan", "child", "education", "low income", "COVID"]
  },
  {
    "name": "Balika Samridhi Yojana",
    "category": "Women",
    "eligibility": "Girl children born in BPL families on or after 15 Aug 1997",
    "benefits": "Cash grant at birth and annual scholarships till Class 10",
    "documents": ["Birth certificate", "BPL card", "Aadhaar"],
    "apply_steps": ["Apply at Anganwadi centre", "Annual scholarship via school"],
    "keywords": ["girl", "child", "education", "BPL", "low income"]
  },
  {
    "name": "Maternity Benefit Programme (Pradhan Mantri Matru Vandana Yojana)",
    "category": "Healthcare",
    "eligibility": "Pregnant and lactating women for first live birth, aged 19+",
    "benefits": "₹5,000 cash benefit in 3 instalments",
    "documents": ["Aadhaar", "MCP card", "Bank account"],
    "apply_steps": ["Register at Anganwadi/health centre", "Submit pregnancy proof", "Cash credited to bank"],
    "keywords": ["pregnant", "mother", "maternity", "women", "low income", "cash"]
  },
  {
    "name": "Integrated Child Development Services (ICDS)",
    "category": "Child Welfare",
    "eligibility": "Children 0–6 years and pregnant/lactating mothers, especially in low-income areas",
    "benefits": "Supplementary nutrition, immunization, pre-school education, health check-up",
    "documents": ["Aadhaar", "Birth certificate"],
    "apply_steps": ["Visit nearest Anganwadi centre", "Register child or mother"],
    "keywords": ["child", "nutrition", "mother", "health", "low income", "anganwadi"]
  },
  {
    "name": "Deen Dayal Antyodaya Yojana – Urban (DAY-NULM)",
    "category": "Livelihood",
    "eligibility": "Urban poor, homeless, street vendors, informal workers",
    "benefits": "Skill training, self-employment loans, shelter for homeless",
    "documents": ["Aadhaar", "Address proof", "Income certificate"],
    "apply_steps": ["Contact Urban Local Body or city mission office", "Enroll in training or loan scheme"],
    "keywords": ["urban poor", "homeless", "street vendor", "skill", "loan", "low income"]
  },
  {
    "name": "PM Adarsh Gram Yojana",
    "category": "Rural Development",
    "eligibility": "SC-majority villages",
    "benefits": "Integrated development: roads, electricity, water, sanitation, education, health",
    "documents": ["Village residency proof"],
    "apply_steps": ["Village-level implementation by government"],
    "keywords": ["SC", "village", "development", "low income", "rural"]
  },
  {
    "name": "Rajiv Gandhi Grameen Vidyutikaran Yojana / DDUGJY",
    "category": "Energy",
    "eligibility": "BPL rural households",
    "benefits": "Free electricity connection",
    "documents": ["BPL card", "Aadhaar"],
    "apply_steps": ["Apply at electricity department", "Verification", "Connection provided"],
    "keywords": ["electricity", "BPL", "rural", "low income", "energy"]
  },
  {
    "name": "PM SVANIDHI – Street Vendor Loan",
    "category": "Finance",
    "eligibility": "Urban street vendors with vending certificate",
    "benefits": "Working capital loan ₹10,000 → ₹20,000 → ₹50,000",
    "documents": ["Vendor ID / certificate", "Aadhaar", "Bank account"],
    "apply_steps": ["Apply via SBI/MFI/ULB portal", "KYC verification", "Loan disbursed digitally"],
    "keywords": ["vendor", "street", "loan", "low income", "urban poor"]
  },
  {
    "name": "Pradhan Mantri Ujjwala Yojana 2.0",
    "category": "Energy",
    "eligibility": "Women from low-income/migrant households not having LPG connection",
    "benefits": "Free LPG connection + first refill + stove",
    "documents": ["Aadhaar", "Self-declaration of address (migrants exempt from address proof)"],
    "apply_steps": ["Apply at nearest LPG distributor", "Self-declaration submitted", "Connection provided"],
    "keywords": ["LPG", "gas", "women", "low income", "BPL", "cook"]
  },
  {
    "name": "Scholarship for SC/ST Students (Pre-Matric & Post-Matric)",
    "category": "Education",
    "eligibility": "SC/ST students from low-income families",
    "benefits": "Full tuition fee, maintenance allowance",
    "documents": ["Caste certificate", "Income certificate", "School/college enrolment"],
    "apply_steps": ["Apply on National Scholarship Portal", "Institution verification", "Amount credited"],
    "keywords": ["SC", "ST", "scholarship", "education", "low income", "student"]
  },
  {
    "name": "OBC Pre-Matric & Post-Matric Scholarship",
    "category": "Education",
    "eligibility": "OBC students with family income below ₹1.5 lakh/year",
    "benefits": "Tuition fee and maintenance allowance",
    "documents": ["OBC certificate", "Income certificate", "Enrolment proof"],
    "apply_steps": ["Apply on National Scholarship Portal", "College/school verification", "DBT to bank"],
    "keywords": ["OBC", "scholarship", "education", "low income"]
  },
  {
    "name": "National Means cum Merit Scholarship",
    "category": "Education",
    "eligibility": "Class 9–12 students from families with income below ₹3.5 lakh/year",
    "benefits": "₹12,000 per year scholarship",
    "documents": ["Income certificate", "Class 8 marksheet", "Aadhaar"],
    "apply_steps": ["Apply online via NSP", "School verification", "Scholarship credited"],
    "keywords": ["scholarship", "merit", "low income", "student", "school"]
  },
  {
    "name": "Viklang Jan Scholarship",
    "category": "Education",
    "eligibility": "Students with disability from low-income families",
    "benefits": "Scholarship for education",
    "documents": ["Disability certificate", "Income certificate", "Aadhaar"],
    "apply_steps": ["Apply on NSP portal", "Institution verification"],
    "keywords": ["disability", "scholarship", "education", "low income"]
  },
  {
    "name": "Garib Nawaz Employment Scheme",
    "category": "Employment",
    "eligibility": "Minorities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) with income below ₹1 lakh/year",
    "benefits": "Free skill training and placement assistance",
    "documents": ["Minority community certificate", "Income certificate", "Aadhaar"],
    "apply_steps": ["Apply via Maulana Azad Education Foundation", "Attend training centre"],
    "keywords": ["minority", "employment", "skill", "low income", "Muslim", "training"]
  },
  {
    "name": "Nai Roshni Scheme",
    "category": "Women",
    "eligibility": "Minority women aged 18–65",
    "benefits": "Leadership and empowerment training",
    "documents": ["Aadhaar", "Community certificate"],
    "apply_steps": ["Apply via NGO implementing the scheme"],
    "keywords": ["minority", "women", "leadership", "empowerment", "low income"]
  },
  {
    "name": "Dr. Ambedkar Post-Matric Scholarship for EBC",
    "category": "Education",
    "eligibility": "Economically Backward Class students with income below ₹1 lakh/year",
    "benefits": "Full fee reimbursement and maintenance allowance",
    "documents": ["Income certificate", "EBC certificate", "Admission proof"],
    "apply_steps": ["Apply on NSP", "Verification", "Amount credited"],
    "keywords": ["EBC", "education", "scholarship", "low income", "poor"]
  },

  // ── Agriculture & Farmers ─────────────────────────────────────────────────
  {
    "name": "Kisan Credit Card (KCC)",
    "category": "Agriculture",
    "eligibility": "Farmers, tenant farmers, sharecroppers, SHG members",
    "benefits": "Short-term credit up to ₹3 lakh at 4% interest rate for crop cultivation",
    "documents": ["Land records", "Aadhaar", "Bank account"],
    "apply_steps": ["Apply at nearest bank or cooperative", "Submit land and KYC documents", "Credit limit sanctioned"],
    "keywords": ["farmer", "credit", "loan", "agriculture", "kisan", "crop"]
  },
  {
    "name": "PM Krishi Sinchai Yojana",
    "category": "Agriculture",
    "eligibility": "Farmers and state governments",
    "benefits": "Irrigation infrastructure, drip and sprinkler systems, watershed development",
    "documents": ["Land records", "Aadhaar"],
    "apply_steps": ["Apply at agriculture department", "Field verification", "Subsidy on equipment"],
    "keywords": ["irrigation", "water", "farmer", "agriculture", "crop"]
  },
  {
    "name": "Paramparagat Krishi Vikas Yojana",
    "category": "Agriculture",
    "eligibility": "Farmers willing to adopt organic farming",
    "benefits": "₹50,000 per hectare for organic farming over 3 years, certification support",
    "documents": ["Land records", "Aadhaar"],
    "apply_steps": ["Form cluster of 50 farmers", "Register with agriculture dept", "Receive training and funds"],
    "keywords": ["organic", "farming", "agriculture", "kisan"]
  },
  {
    "name": "Rashtriya Krishi Vikas Yojana",
    "category": "Agriculture",
    "eligibility": "Farmers and agricultural cooperatives",
    "benefits": "Funds for agricultural infrastructure, storage, processing",
    "documents": ["Land records", "Project proposal"],
    "apply_steps": ["State government implements", "Apply through agriculture department"],
    "keywords": ["agriculture", "development", "farmer", "infrastructure"]
  },
  {
    "name": "PM Kisan Maan Dhan Yojana",
    "category": "Agriculture",
    "eligibility": "Small and marginal farmers aged 18–40",
    "benefits": "Monthly pension of ₹3,000 after age 60",
    "documents": ["Aadhaar", "Land records", "Bank account"],
    "apply_steps": ["Enroll at CSC centre", "Pay monthly contribution", "Pension starts at 60"],
    "keywords": ["farmer", "pension", "old age", "kisan"]
  },
  {
    "name": "Agriculture Infrastructure Fund",
    "category": "Agriculture",
    "eligibility": "Farmers, FPOs, Agri-entrepreneurs, startups",
    "benefits": "₹1 lakh crore loans at 3% interest subsidy for post-harvest infrastructure",
    "documents": ["Business plan", "Land records", "PAN", "Aadhaar"],
    "apply_steps": ["Apply via Agri Infra Fund portal", "Bank appraisal", "Loan disbursed"],
    "keywords": ["agriculture", "infrastructure", "loan", "cold storage", "warehouse"]
  },
  {
    "name": "National Horticulture Mission",
    "category": "Agriculture",
    "eligibility": "Horticulture farmers",
    "benefits": "Subsidy on seeds, plants, equipment, cold storage, market infrastructure",
    "documents": ["Land records", "Aadhaar"],
    "apply_steps": ["Apply at horticulture department", "Field inspection", "Subsidy released"],
    "keywords": ["horticulture", "vegetable", "fruit", "farming", "subsidy"]
  },
  {
    "name": "National Livestock Mission",
    "category": "Agriculture",
    "eligibility": "Farmers, SHGs with livestock",
    "benefits": "Support for breed improvement, feed, insurance, and entrepreneurship in animal husbandry",
    "documents": ["Aadhaar", "Bank account"],
    "apply_steps": ["Apply at animal husbandry department"],
    "keywords": ["livestock", "animal", "cattle", "poultry", "farmer"]
  },

  // ── Health ────────────────────────────────────────────────────────────────
  {
    "name": "PM Bhartiya Janaushadhi Pariyojana",
    "category": "Healthcare",
    "eligibility": "All citizens",
    "benefits": "Generic medicines at 50–90% lower price through Jan Aushadhi stores",
    "documents": ["Prescription"],
    "apply_steps": ["Visit nearest Jan Aushadhi Kendra", "Purchase medicines at subsidized rate"],
    "keywords": ["medicine", "health", "generic", "low cost", "hospital"]
  },
  {
    "name": "Mission Indradhanush",
    "category": "Healthcare",
    "eligibility": "Children under 2 years and pregnant women",
    "benefits": "Free immunization against 12 diseases (polio, TB, hepatitis B, etc.)",
    "documents": ["None required"],
    "apply_steps": ["Visit nearest ASHA worker or health centre", "Free vaccination provided"],
    "keywords": ["vaccination", "child", "immunization", "health", "pregnant"]
  },
  {
    "name": "Poshan Abhiyan (National Nutrition Mission)",
    "category": "Nutrition",
    "eligibility": "Children under 6, pregnant women, lactating mothers",
    "benefits": "Nutritional support, reduce stunting, wasting, and anaemia",
    "documents": ["Aadhaar", "MCP card"],
    "apply_steps": ["Register at Anganwadi", "Receive nutrition supplements"],
    "keywords": ["nutrition", "child", "mother", "pregnant", "anaemia", "health"]
  },
  {
    "name": "Nikshay Poshan Yojana (TB Support)",
    "category": "Healthcare",
    "eligibility": "TB patients undergoing treatment",
    "benefits": "₹500/month nutritional support during TB treatment",
    "documents": ["TB diagnosis certificate", "Aadhaar", "Bank account"],
    "apply_steps": ["Register at DOTS centre", "Monthly transfer to bank"],
    "keywords": ["TB", "tuberculosis", "health", "nutrition", "poor"]
  },
  {
    "name": "Ayushman Bharat Health and Wellness Centres",
    "category": "Healthcare",
    "eligibility": "All citizens especially rural and low-income",
    "benefits": "Free primary health care, diagnostics, medicines at upgraded sub-centres",
    "documents": ["None"],
    "apply_steps": ["Visit nearest Health and Wellness Centre"],
    "keywords": ["health", "primary care", "free", "rural", "medicine"]
  },
  {
    "name": "National AIDS Control Programme",
    "category": "Healthcare",
    "eligibility": "HIV/AIDS affected individuals",
    "benefits": "Free ART treatment, counselling, testing, PPTCT",
    "documents": ["HIV positive test report"],
    "apply_steps": ["Visit ART centre at government hospital", "Free treatment provided"],
    "keywords": ["HIV", "AIDS", "health", "treatment", "free"]
  },
  {
    "name": "PM National Dialysis Programme",
    "category": "Healthcare",
    "eligibility": "BPL patients with kidney failure",
    "benefits": "Free dialysis at district hospitals",
    "documents": ["BPL card", "Medical report", "Aadhaar"],
    "apply_steps": ["Approach district hospital dialysis unit", "Submit BPL and medical documents"],
    "keywords": ["dialysis", "kidney", "health", "BPL", "free"]
  },
  {
    "name": "National Mental Health Programme",
    "category": "Healthcare",
    "eligibility": "All citizens with mental illness",
    "benefits": "Free mental health services, NIMHANS support, community care",
    "documents": ["Medical referral"],
    "apply_steps": ["Visit district mental health unit at government hospital"],
    "keywords": ["mental health", "depression", "anxiety", "psychiatric", "free"]
  },
  {
    "name": "Rashtriya Bal Swasthya Karyakram (RBSK)",
    "category": "Healthcare",
    "eligibility": "Children 0–18 years",
    "benefits": "Free screening and treatment for 4 D's: Defects, Diseases, Deficiencies, Disabilities",
    "documents": ["None"],
    "apply_steps": ["School/Anganwadi screening camps", "Free referral treatment"],
    "keywords": ["child health", "disability", "screening", "free", "school"]
  },

  // ── Housing ───────────────────────────────────────────────────────────────
  {
    "name": "PM Awas Yojana Gramin (PMAY-G)",
    "category": "Housing",
    "eligibility": "Homeless or kutcha house rural BPL families",
    "benefits": "₹1.2 lakh (plain) / ₹1.3 lakh (hilly) housing assistance + toilet + free LPG",
    "documents": ["BPL card", "Aadhaar", "Land ownership proof"],
    "apply_steps": ["Name in SECC list", "Apply at Gram Panchayat", "Construction linked installments"],
    "keywords": ["house", "rural", "BPL", "housing", "kutcha", "construction"]
  },
  {
    "name": "PM Awas Yojana Urban (PMAY-U)",
    "category": "Housing",
    "eligibility": "Urban EWS/LIG/MIG families without pucca house",
    "benefits": "₹2.67 lakh subsidy or credit linked subsidy on home loans",
    "documents": ["Income certificate", "Aadhaar", "No house ownership proof"],
    "apply_steps": ["Apply online on PMAY portal", "Municipality verification", "Subsidy credited to bank"],
    "keywords": ["house", "urban", "housing", "EWS", "LIG", "subsidy", "loan"]
  },
  {
    "name": "Credit Linked Subsidy Scheme (CLSS)",
    "category": "Housing",
    "eligibility": "EWS (income < ₹3L), LIG (< ₹6L), MIG-I (< ₹12L), MIG-II (< ₹18L)",
    "benefits": "Interest subsidy 3–6.5% on home loan, saving up to ₹2.67 lakh",
    "documents": ["Income certificate", "Aadhaar", "Loan sanction letter"],
    "apply_steps": ["Apply through bank", "Submit income proof", "Subsidy credited upfront"],
    "keywords": ["home loan", "housing", "subsidy", "EWS", "LIG", "MIG"]
  },

  // ── Education ─────────────────────────────────────────────────────────────
  {
    "name": "Samagra Shiksha Abhiyan",
    "category": "Education",
    "eligibility": "Students from pre-school to class 12",
    "benefits": "Free textbooks, uniforms, school infrastructure, teacher training",
    "documents": ["School enrollment"],
    "apply_steps": ["Automatic benefit through school enrollment"],
    "keywords": ["education", "school", "free", "textbook", "uniform"]
  },
  {
    "name": "SWAYAM (Free Online Courses)",
    "category": "Education",
    "eligibility": "Students and working professionals",
    "benefits": "Free online courses from IITs, IIMs, central universities with credit transfer",
    "documents": ["None required"],
    "apply_steps": ["Register on swayam.gov.in", "Enroll in course", "Appear for exam"],
    "keywords": ["online", "education", "course", "IIT", "IIM", "free", "skill"]
  },
  {
    "name": "Eklavya Model Residential Schools",
    "category": "Education",
    "eligibility": "Tribal (ST) students in remote areas",
    "benefits": "Free residential schooling class 6–12 with sports and cultural training",
    "documents": ["ST certificate", "Age proof"],
    "apply_steps": ["Apply at nearest EMRS school", "Admission test"],
    "keywords": ["tribal", "ST", "education", "residential", "free", "school"]
  },
  {
    "name": "Navodaya Vidyalaya Scheme",
    "category": "Education",
    "eligibility": "Rural students (class 6 entry via JNV selection test)",
    "benefits": "Free quality residential education class 6–12",
    "documents": ["Age proof", "Rural area certificate"],
    "apply_steps": ["Appear in JNVST", "Admission on merit"],
    "keywords": ["education", "rural", "free", "residential", "school", "quality"]
  },
  {
    "name": "PM Research Fellowship",
    "category": "Education",
    "eligibility": "Top BTech/MSc graduates for PhD in IITs/IISc",
    "benefits": "Fellowship ₹70,000–₹80,000/month + research grant",
    "documents": ["BTech/MSc marksheet", "Research proposal"],
    "apply_steps": ["Apply on PMRF portal", "Interview process", "Fellowship granted"],
    "keywords": ["research", "PhD", "fellowship", "IIT", "higher education"]
  },
  {
    "name": "Central Sector Scholarship Scheme",
    "category": "Education",
    "eligibility": "Students above 80th percentile in Class 12, family income below ₹8 lakh",
    "benefits": "₹10,000–₹20,000 per year for college education",
    "documents": ["Class 12 marksheet", "Income certificate", "Aadhaar"],
    "apply_steps": ["Apply on NSP portal", "College verification", "Scholarship credited"],
    "keywords": ["scholarship", "college", "merit", "student", "higher education"]
  },
  {
    "name": "Ishan Uday (NE Scholarship)",
    "category": "Education",
    "eligibility": "Students from North East states, family income below ₹4.5 lakh",
    "benefits": "₹5,400–₹7,800/month scholarship for general and technical courses",
    "documents": ["Income certificate", "North East domicile", "Admission proof"],
    "apply_steps": ["Apply on NSP portal"],
    "keywords": ["northeast", "scholarship", "education", "student"]
  },

  // ── Women & Child ─────────────────────────────────────────────────────────
  {
    "name": "Mission Shakti",
    "category": "Women",
    "eligibility": "Women in distress, victims of violence, single women",
    "benefits": "Shelter (One Stop Centre), legal aid, medical help, financial support",
    "documents": ["Aadhaar", "Complaint/case document"],
    "apply_steps": ["Call helpline 181 or visit One Stop Centre (Sakhi Centre)"],
    "keywords": ["women", "violence", "shelter", "safety", "legal", "distress"]
  },
  {
    "name": "One Stop Centre (Sakhi Centre)",
    "category": "Women",
    "eligibility": "Women affected by violence (domestic, sexual, trafficking)",
    "benefits": "Shelter, police assistance, legal aid, medical care, psychosocial counselling",
    "documents": ["None mandatory"],
    "apply_steps": ["Call 181 or visit nearest OSC at district hospital"],
    "keywords": ["women", "violence", "rape", "domestic abuse", "shelter", "legal"]
  },
  {
    "name": "STEP (Support to Training and Employment for Women)",
    "category": "Women",
    "eligibility": "Marginalized women aged 16+ in rural and urban areas",
    "benefits": "Skill training in agriculture, handicrafts, tailoring, beauty, IT",
    "documents": ["Aadhaar", "Age proof"],
    "apply_steps": ["Apply via NGO or government implementing agency"],
    "keywords": ["women", "skill", "training", "employment", "self reliance"]
  },
  {
    "name": "Mahila Shakti Kendra",
    "category": "Women",
    "eligibility": "Rural women",
    "benefits": "Community participation, skill development, government scheme awareness",
    "documents": ["Aadhaar"],
    "apply_steps": ["Visit block-level Mahila Shakti Kendra"],
    "keywords": ["women", "rural", "empowerment", "skill", "awareness"]
  },
  {
    "name": "Kishori Shakti Yojana",
    "category": "Women",
    "eligibility": "Adolescent girls aged 11–18 in rural areas",
    "benefits": "Nutrition, health, hygiene education, life skills, vocational training",
    "documents": ["Age proof"],
    "apply_steps": ["Register at Anganwadi centre"],
    "keywords": ["girl", "adolescent", "health", "nutrition", "school", "skill"]
  },
  {
    "name": "PM Matru Vandana Yojana (PMMVY) Second Child",
    "category": "Healthcare",
    "eligibility": "Women for second child if it is a girl",
    "benefits": "₹6,000 incentive for second girl child birth",
    "documents": ["Aadhaar", "Birth certificate", "Bank account"],
    "apply_steps": ["Apply at Anganwadi / health centre"],
    "keywords": ["mother", "girl child", "maternity", "incentive", "women"]
  },
  {
    "name": "Poshan Tracker / ICDS",
    "category": "Child Welfare",
    "eligibility": "Children 0–6 and mothers",
    "benefits": "Growth monitoring, supplementary nutrition, early childhood care",
    "documents": ["None"],
    "apply_steps": ["Visit nearest Anganwadi"],
    "keywords": ["child", "nutrition", "anganwadi", "growth", "mother"]
  },
  {
    "name": "Child Labour (Prohibition and Regulation) Scheme",
    "category": "Child Welfare",
    "eligibility": "Child labour victims aged below 14",
    "benefits": "Rescue, rehabilitation, special school education, vocational training",
    "documents": ["Age proof"],
    "apply_steps": ["Report to child helpline 1098", "NCPCR intervention"],
    "keywords": ["child labour", "rescue", "rehabilitation", "education", "child"]
  },

  // ── Elderly & Disability ──────────────────────────────────────────────────
  {
    "name": "SAGE Portal (Senior Care)",
    "category": "Social Security",
    "eligibility": "Senior citizens aged 60+",
    "benefits": "Single window for elderly care services, healthcare, financial security info",
    "documents": ["Aadhaar"],
    "apply_steps": ["Visit sage.india.gov.in", "Register and access services"],
    "keywords": ["elderly", "senior citizen", "old age", "care"]
  },
  {
    "name": "Accessible India Campaign (Divyangjan)",
    "category": "Disability",
    "eligibility": "Persons with disabilities",
    "benefits": "Accessibility upgrades in public buildings, transport, websites",
    "documents": ["Disability certificate (UDID)"],
    "apply_steps": ["Register on UDID portal", "Access scheme benefits"],
    "keywords": ["disability", "divyang", "accessible", "wheelchair", "handicap"]
  },
  {
    "name": "ADIP Scheme (Assistance to Disabled Persons)",
    "category": "Disability",
    "eligibility": "Disabled persons with income below ₹20,000/month",
    "benefits": "Free assistive devices (wheelchair, hearing aid, artificial limb, Braille kit)",
    "documents": ["Disability certificate", "Income certificate", "Aadhaar"],
    "apply_steps": ["Apply via ALIMCO or NGO camp", "Receive device free"],
    "keywords": ["disability", "wheelchair", "hearing aid", "prosthetic", "divyang", "free"]
  },
  {
    "name": "Deendayal Disabled Rehabilitation Scheme (DDRS)",
    "category": "Disability",
    "eligibility": "NGOs working for disabled persons",
    "benefits": "Grant to NGOs for running schools, vocational centres for disabled",
    "documents": ["Disability certificate"],
    "apply_steps": ["Approach NGO or rehabilitation centre"],
    "keywords": ["disability", "rehabilitation", "education", "skill", "divyang"]
  },
  {
    "name": "PM Vaya Vandana Yojana",
    "category": "Finance",
    "eligibility": "Senior citizens aged 60+",
    "benefits": "Guaranteed pension 7.4% for 10 years, investment up to ₹15 lakh",
    "documents": ["Aadhaar", "Age proof", "Bank account"],
    "apply_steps": ["Apply at LIC office or online", "Pay lump sum premium", "Monthly pension starts"],
    "keywords": ["senior citizen", "pension", "elderly", "investment", "retirement"]
  },
  {
    "name": "Senior Citizen Savings Scheme (SCSS)",
    "category": "Finance",
    "eligibility": "Citizens aged 60+ (55+ for retired government employees)",
    "benefits": "High-interest savings (8.2% p.a.), tax benefit under 80C",
    "documents": ["Age proof", "Aadhaar", "PAN"],
    "apply_steps": ["Open account at post office or authorized bank"],
    "keywords": ["senior citizen", "savings", "elderly", "interest", "retirement"]
  },

  // ── Employment & Labour ───────────────────────────────────────────────────
  {
    "name": "Atmanirbhar Bharat Rozgar Yojana",
    "category": "Employment",
    "eligibility": "New employees hired post-COVID with salary below ₹15,000/month",
    "benefits": "Government pays both employee and employer EPFO contributions for 2 years",
    "documents": ["Aadhaar", "Bank account"],
    "apply_steps": ["Employer registers new hire on EPFO portal", "Subsidy credited automatically"],
    "keywords": ["employment", "job", "EPFO", "COVID", "hire", "salary"]
  },
  {
    "name": "EPFO Provident Fund",
    "category": "Finance",
    "eligibility": "Organized sector employees with salary ≤ ₹15,000/month",
    "benefits": "Retirement corpus, 12% employer + 12% employee contribution, 8.25% interest",
    "documents": ["Aadhaar", "PAN", "Bank account"],
    "apply_steps": ["Employer registers employee on EPFO portal", "Monthly contribution deducted"],
    "keywords": ["provident fund", "PF", "EPFO", "retirement", "savings", "employee"]
  },
  {
    "name": "ESIC Health Insurance",
    "category": "Healthcare",
    "eligibility": "Employees with salary ≤ ₹21,000/month in establishments covered under ESI Act",
    "benefits": "Full medical care for employee and family, maternity, disability, death benefits",
    "documents": ["ESI card", "Aadhaar"],
    "apply_steps": ["Employer registers under ESIC", "Employee gets ESI card", "Use ESIC hospitals"],
    "keywords": ["health insurance", "employee", "ESI", "factory", "worker", "medical"]
  },
  {
    "name": "PM Rozgar Protsahan Yojana (PMRPY)",
    "category": "Employment",
    "eligibility": "Employers hiring new workers with salary below ₹15,000",
    "benefits": "Government pays 8.33% EPS contribution for new employees",
    "documents": ["EPFO registration", "Employee details"],
    "apply_steps": ["Register on PMRPY portal", "Add new employees", "Subsidy auto-credited"],
    "keywords": ["employment", "job", "hire", "employer", "EPFO", "salary"]
  },

  // ── Energy ────────────────────────────────────────────────────────────────
  {
    "name": "PM Surya Ghar Muft Bijli Yojana",
    "category": "Energy",
    "eligibility": "Residential households with roof space",
    "benefits": "Free electricity up to 300 units/month via solar panels, subsidy ₹30,000–₹78,000",
    "documents": ["Aadhaar", "Electricity bill", "Property proof"],
    "apply_steps": ["Apply on pmsuryaghar.gov.in", "Empanelled vendor installs panels", "Net metering"],
    "keywords": ["solar", "electricity", "free", "energy", "rooftop", "bijli"]
  },
  {
    "name": "SAUBHAGYA – Pradhan Mantri Sahaj Bijli Har Ghar Yojana",
    "category": "Energy",
    "eligibility": "Un-electrified households, BPL families get free connection",
    "benefits": "Free electricity connection to BPL, others at ₹500 EMI",
    "documents": ["Aadhaar", "BPL card (for free connection)"],
    "apply_steps": ["Apply at electricity distribution company", "Connection provided"],
    "keywords": ["electricity", "bijli", "BPL", "rural", "free", "connection"]
  },
  {
    "name": "KUSUM (Kisan Urja Suraksha evam Utthaan Mahabhiyan)",
    "category": "Energy",
    "eligibility": "Farmers with barren or cultivable land",
    "benefits": "Solar pumps, solarize grid-connected pumps, sell extra power to grid",
    "documents": ["Land records", "Aadhaar", "Bank account"],
    "apply_steps": ["Apply at agriculture department", "DISCOM approval", "Solar pump installed"],
    "keywords": ["solar", "farmer", "pump", "energy", "kisan", "electricity", "grid"]
  },
  {
    "name": "National Solar Mission (JNNSM)",
    "category": "Energy",
    "eligibility": "Businesses, institutions, households",
    "benefits": "Subsidies and financing for solar installations, grid power",
    "documents": ["Property proof", "Aadhaar/PAN"],
    "apply_steps": ["Apply via MNRE or state nodal agency"],
    "keywords": ["solar", "energy", "renewable", "green", "electricity"]
  },

  // ── SC/ST & Tribal ────────────────────────────────────────────────────────
  {
    "name": "PM JANMAN (PVTG Welfare)",
    "category": "Tribal",
    "eligibility": "Particularly Vulnerable Tribal Groups (75 PVTG communities)",
    "benefits": "Housing, clean water, roads, telecom, health, education in tribal areas",
    "documents": ["Tribal certificate"],
    "apply_steps": ["Government scheme implemented at village level"],
    "keywords": ["tribal", "ST", "PVTG", "housing", "development", "forest"]
  },
  {
    "name": "Van Dhan Vikas Kendra",
    "category": "Tribal",
    "eligibility": "Tribal forest produce collectors",
    "benefits": "Training, branding, marketing support for minor forest produce",
    "documents": ["Aadhaar", "Tribal certificate"],
    "apply_steps": ["Join Van Dhan SHG cluster", "Training and value addition support"],
    "keywords": ["tribal", "forest", "income", "SHG", "produce", "skill"]
  },
  {
    "name": "National Overseas Scholarship for SC/ST",
    "category": "Education",
    "eligibility": "SC/ST students for PhD/postdoc abroad, income below ₹8 lakh/year",
    "benefits": "Full scholarship for study abroad including tuition, living costs",
    "documents": ["Caste certificate", "Admission letter", "Income certificate"],
    "apply_steps": ["Apply on socialjustice.gov.in", "Selection based on merit"],
    "keywords": ["SC", "ST", "scholarship", "abroad", "PhD", "education"]
  },
  {
    "name": "Pradhan Mantri Adi Adarsh Gram Yojana",
    "category": "Tribal",
    "eligibility": "ST-majority villages (50%+ ST population)",
    "benefits": "Convergence of 8+ schemes for roads, health, education, livelihood",
    "documents": ["Village residency"],
    "apply_steps": ["Government initiative, apply at Gram Panchayat"],
    "keywords": ["tribal", "village", "development", "ST", "rural"]
  },

  // ── Finance & Banking ─────────────────────────────────────────────────────
  {
    "name": "Public Provident Fund (PPF)",
    "category": "Finance",
    "eligibility": "All Indian citizens",
    "benefits": "7.1% tax-free interest, tax deduction under 80C, loan facility",
    "documents": ["Aadhaar", "PAN"],
    "apply_steps": ["Open account at post office or bank", "Min ₹500/year deposit"],
    "keywords": ["savings", "investment", "tax", "PPF", "retirement", "interest"]
  },
  {
    "name": "Kisan Vikas Patra",
    "category": "Finance",
    "eligibility": "All Indian citizens",
    "benefits": "Money doubles in 115 months (7.5% interest), transferable certificate",
    "documents": ["Aadhaar", "PAN"],
    "apply_steps": ["Purchase at post office", "Available in denominations of ₹1,000+"],
    "keywords": ["savings", "investment", "post office", "double money", "farmer"]
  },
  {
    "name": "Sovereign Gold Bond Scheme",
    "category": "Finance",
    "eligibility": "Indian residents",
    "benefits": "2.5% annual interest + gold price gains, no storage risk, tax benefit on maturity",
    "documents": ["PAN", "Aadhaar"],
    "apply_steps": ["Apply via bank or stock exchange during issuance window"],
    "keywords": ["gold", "investment", "savings", "bond", "interest"]
  },
  {
    "name": "PM Jan Dhan Overdraft Facility",
    "category": "Finance",
    "eligibility": "Jan Dhan account holders (especially women)",
    "benefits": "Overdraft up to ₹10,000 without collateral",
    "documents": ["Jan Dhan bank account", "Aadhaar"],
    "apply_steps": ["Request at bank branch after 6 months of account operation"],
    "keywords": ["bank", "loan", "overdraft", "women", "low income", "Jan Dhan"]
  },

  // ── Rural Development ─────────────────────────────────────────────────────
  {
    "name": "Shyama Prasad Mukherji Rurban Mission",
    "category": "Rural Development",
    "eligibility": "Rural cluster residents",
    "benefits": "Urban amenities in rural areas: skills, e-health, digital services, markets",
    "documents": ["None"],
    "apply_steps": ["Government initiative in selected clusters"],
    "keywords": ["rural", "development", "urban amenities", "cluster"]
  },
  {
    "name": "PM SVAMITVA Scheme",
    "category": "Rural Development",
    "eligibility": "Rural household owners in abadi (residential) areas",
    "benefits": "Property card/rights document for rural homes, enables bank loans",
    "documents": ["Aadhaar", "Property details"],
    "apply_steps": ["Drone survey by government", "Property card issued"],
    "keywords": ["property", "rural", "ownership", "land", "rights", "loan"]
  },
  {
    "name": "Deen Dayal Upadhyaya Gram Jyoti Yojana",
    "category": "Energy",
    "eligibility": "Rural households",
    "benefits": "24x7 electricity, feeder separation for agriculture and domestic use",
    "documents": ["Address proof"],
    "apply_steps": ["Electricity connection at household via DISCOM"],
    "keywords": ["electricity", "rural", "bijli", "energy", "24x7"]
  },

  // ── Sanitation & Water ────────────────────────────────────────────────────
  {
    "name": "Swachh Bharat Mission Gramin Phase 2",
    "category": "Sanitation",
    "eligibility": "Rural households for ODF sustainability",
    "benefits": "Toilet maintenance support, liquid and solid waste management",
    "documents": ["Aadhaar"],
    "apply_steps": ["Apply at Gram Panchayat", "Verification", "Funds released"],
    "keywords": ["toilet", "sanitation", "ODF", "rural", "clean"]
  },
  {
    "name": "Nal Se Jal (Jal Jeevan Mission)",
    "category": "Water",
    "eligibility": "Rural households without tap water",
    "benefits": "55 litres per capita per day tap water supply at home",
    "documents": ["Address proof"],
    "apply_steps": ["Apply at Gram Panchayat", "Pipeline infrastructure installed"],
    "keywords": ["water", "tap", "rural", "jal", "drinking water", "pipeline"]
  },

  // ── Industry & MSME ───────────────────────────────────────────────────────
  {
    "name": "Udyam Registration (MSME)",
    "category": "Business",
    "eligibility": "Small and medium businesses",
    "benefits": "Priority lending, government tender benefits, subsidy access, collateral-free loans",
    "documents": ["Aadhaar", "PAN", "Bank account"],
    "apply_steps": ["Register on udyamregistration.gov.in", "Certificate issued instantly"],
    "keywords": ["MSME", "business", "small", "enterprise", "registration", "loan"]
  },
  {
    "name": "Emergency Credit Line Guarantee Scheme (ECLGS)",
    "category": "Finance",
    "eligibility": "MSMEs and businesses with bank loans",
    "benefits": "20% additional collateral-free loan with 100% government guarantee",
    "documents": ["Existing loan account", "Aadhaar", "PAN"],
    "apply_steps": ["Apply at existing bank", "Auto-approval based on existing loan"],
    "keywords": ["MSME", "loan", "business", "emergency", "collateral free", "COVID"]
  },
  {
    "name": "Production Linked Incentive (PLI) Scheme",
    "category": "Industry",
    "eligibility": "Manufacturers in 14 key sectors",
    "benefits": "4–20% incentive on incremental sales over base year",
    "documents": ["Company registration", "Manufacturing proof"],
    "apply_steps": ["Apply via sector ministry portal", "Annual audit and claim"],
    "keywords": ["manufacturing", "incentive", "industry", "export", "PLI"]
  },
  {
    "name": "GeM (Government e-Marketplace)",
    "category": "Business",
    "eligibility": "MSMEs, startups, artisans, SHGs to sell to government",
    "benefits": "Direct government procurement without tender hassle",
    "documents": ["Aadhaar", "PAN", "Bank account"],
    "apply_steps": ["Register as seller on gem.gov.in", "List products", "Receive government orders"],
    "keywords": ["MSME", "sell", "government", "business", "marketplace", "tender"]
  }
]

export default schemes;