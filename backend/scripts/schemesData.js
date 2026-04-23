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
  }
]


export default schemes;
