export type CertificationLevel = "entry" | "mid" | "senior";

export type Certification = {
  id: string;
  name: string;
  description: string;
  idealFor: string;
  prerequisites: string[];
  industries: string[];
  url?: string;
};

export const certificationData: Record<
  CertificationLevel,
  Record<string, Certification[]>
> = {
  entry: {
    technology: [
      {
        id: "google",
        name: "Google Project Management Certification",
        description:
          "This entry-level certification provides foundational knowledge of project management. It covers essential concepts such as initiating projects, managing schedules, budgets, and teams, and applying best practices for project success. Ideal for those looking to break into project management or transition into the field.",
        idealFor: "Beginners or those new to project management.",
        prerequisites: [
          "No prerequisites; ideal for beginners.",
          "Offered via Coursera.",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Marketing & Advertising",
          "E-commerce & Retail",
          "Telecommunications",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://www.coursera.org/professional-certificates/google-project-management?utm_medium=sem&utm_source=gg&utm_campaign=b2c_namer_google-project-management_google_ftcof_professional-certificates_px_dr_bau_gg_sem_pr-bd_us_en_m_hyb_24-05_x&campaignid=12507120706&adgroupid=138976596210&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=636584713408&assetgroupid=&targetid=aud-303020828629:dsa-1903279393350&extensionid=&placement=&gad_source=1&gbraid=0AAAAADdKX6ZU3gRBZB9xTQ8kCrXJveK_-&gclid=CjwKCAjwq7fABhB2EiwAwk-YbK0DezRVKRYr-ynlDYRcM5og6GBjjgZGxyAFH7sG7wYNEp-lFJ-8-RoC6fEQAvD_BwE",
      },
      {
        id: "agilepm",
        name: "Agile Project Management (AgilePM®)",
        description:
          "AgilePM® certification focuses on Agile project management methods and frameworks. It is ideal for project managers and team leaders who want to integrate Agile principles into their project management practices, ensuring faster and more flexible project delivery.",
        idealFor:
          "Project managers working in Agile environments or transitioning from traditional methodologies.",
        prerequisites: [
          "No prerequisites for Foundation level",
          "Practitioner level requires passing the Foundation exam",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Telecommunications",
        ],
        url: "https://apmg-international.com/product/agile-project-management-agilepmr-certification",
      },
      {
        id: "csm",
        name: "Certified ScrumMaster (CSM)",
        description:
          "The CSM certification focuses on Scrum methodology, which is used in Agile project management. This certification is ideal for those looking to become Scrum Masters or work within Agile project teams, ensuring effective Scrum practices for project delivery.",
        idealFor:
          "Those interested in working in Agile environments or teams using Scrum.",
        prerequisites: [
          "No formal prerequisites",
          "Must attend a two-day (16-hour) CSM training from a Scrum Alliance-certified trainer",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Telecommunications",
        ],
        url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
      },
      {
        id: "psm",
        name: "Professional Scrum Master (PSM I, II, III)",
        description:
          "PSM certification is a series of progressive levels (I, II, III) for Scrum Masters, starting with the basics of Scrum to advanced understanding of Scrum principles, practices, and leadership. It is ideal for those who want to grow as Agile leaders and ensure Scrum practices are effectively implemented in their teams.",
        idealFor:
          "Scrum professionals looking to deepen their knowledge and expertise in Agile project management.",
        prerequisites: [
          "No formal prerequisites",
          "Self-study or training recommended",
          "PSM II requires passing PSM I",
          "PSM III requires passing PSM II",
          "Higher levels require deeper Scrum mastery",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Telecommunications",
        ],
        url: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-assessments",
      },
      {
        id: "itil4",
        name: "ITIL 4 Foundation Certification",
        description:
          "ITIL 4 Foundation certification provides an understanding of the ITIL framework, which focuses on aligning IT services with business needs. Ideal for IT professionals who want to manage and improve service delivery processes in a structured and strategic way.",
        idealFor:
          "IT professionals involved in service management, IT teams, and those in IT project management roles.",
        prerequisites: [
          "No prerequisites",
          "Suitable for IT professionals, project managers, and service managers",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Telecommunications",
        ],
        url: "https://www.axelos.com/certifications/itil-service-management/itil-4-foundation",
      },
      {
        id: "cpm",
        name: "Certified Project Manager (CPM)",
        description:
          "The CPM certification from IAPM is designed to establish competence in core project management principles. It is suitable for those entering project management roles or looking to formalize their project management knowledge.",
        idealFor:
          "Professionals with or without prior project management experience who want to enhance their credentials.",
        prerequisites: [
          "No formal prerequisites",
          "Training recommended but not required",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "Construction & Engineering",
          "Healthcare",
          "Marketing & Advertising",
        ],
        url: "https://www.iapm.net/en/certification/levels-of-certification/certified-project-manager-iapm/",
      },
    ],
    healthcare: [
      {
        id: "capm",
        name: "Certified Associate in Project Management (CAPM)®",
        description:
          "The CAPM certification is designed for those starting their project management career. It provides a solid foundation in project management terminology, processes, and best practices. A great starting point for individuals looking to advance their careers in project management.",
        idealFor:
          "Aspiring project managers or those with limited project management experience.",
        prerequisites: [
          "High school diploma, associate's degree, or equivalent",
          "23 hours of project management education or CAPM course completion",
        ],
        industries: [
          "Healthcare",
          "Finance & Banking",
          "Construction & Engineering",
          "E-commerce & Retail",
          "Manufacturing",
          "Pharmaceuticals & Biotechnology",
          "Cybersecurity",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Agriculture & Food Industry",
        ],
        url: "https://www.pmi.org/certifications/certified-associate-capm",
      },
      {
        id: "ccpm",
        name: "Certified Clinical Project Manager (CCPM)",
        description:
          "The CCPM certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
        idealFor:
          "Project managers in the healthcare or clinical research sectors.",
        prerequisites: [
          "Bachelor's degree in life sciences, healthcare, or related field",
          "Clinical research or project management experience recommended",
        ],
        industries: ["Healthcare", "Pharmaceuticals & Biotechnology"],
        url: "https://charteredcertifications.com/learning/courses/ccrp",
      },
    ],
    finance: [
      {
        id: "capm",
        name: "Certified Associate in Project Management (CAPM)®",
        description:
          "The CAPM certification is designed for those starting their project management career. It provides a solid foundation in project management terminology, processes, and best practices. A great starting point for individuals looking to advance their careers in project management.",
        idealFor:
          "Aspiring project managers or those with limited project management experience.",
        prerequisites: [
          "High school diploma, associate's degree, or equivalent",
          "23 hours of project management education or CAPM course completion",
        ],
        industries: [
          "Healthcare",
          "Finance & Banking",
          "Construction & Engineering",
          "E-commerce & Retail",
          "Manufacturing",
          "Pharmaceuticals & Biotechnology",
          "Cybersecurity",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Agriculture & Food Industry",
        ],
        url: "https://www.pmi.org/certifications/certified-associate-capm",
      },

      {
        id: "prince2",
        name: "PRINCE2 Foundation",
        description:
          "PRINCE2 is a widely recognized project management methodology. The Foundation level covers the fundamental principles of PRINCE2, including its processes, themes, and roles. Ideal for professionals who want to gain a structured and internationally recognized approach to project management.",
        idealFor:
          "Individuals working in or aspiring to work in structured project management environments, especially in Europe.",
        prerequisites: [
          "No prerequisites; open to anyone interested in project management",
        ],
        industries: [
          "Finance & Banking",
          "Marketing & Advertising",
          "Government & Public Sector",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.prince2.com/usa/prince2/foundation",
      },
    ],
    construction: [
      {
        id: "capm",
        name: "Certified Associate in Project Management (CAPM)®",
        description:
          "The CAPM certification is designed for those starting their project management career. It provides a solid foundation in project management terminology, processes, and best practices. A great starting point for individuals looking to advance their careers in project management.",
        idealFor:
          "Aspiring project managers or those with limited project management experience.",
        prerequisites: [
          "High school diploma, associate's degree, or equivalent",
          "23 hours of project management education or CAPM course completion",
        ],
        industries: [
          "Healthcare",
          "Finance & Banking",
          "Construction & Engineering",
          "E-commerce & Retail",
          "Manufacturing",
          "Pharmaceuticals & Biotechnology",
          "Cybersecurity",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Agriculture & Food Industry",
        ],
        url: "https://www.pmi.org/certifications/certified-associate-capm",
      },
      {
        id: "ccm",
        name: "Certified Construction Manager (CCM)",
        description:
          "The CCM certification is ideal for individuals working in or pursuing careers in construction project management. It validates the knowledge and expertise required to manage the planning, design, construction, and completion of projects in the construction industry.",
        idealFor: "Professionals working in construction project management.",
        prerequisites: [
          "Four-year degree in construction-related field + 4 years construction management experience OR",
          "Eight years of experience with no degree",
        ],
        industries: ["Construction & Engineering"],
        url: "https://www.cmaanet.org/certification/ccm",
      },
    ],
    marketing: [
      {
        id: "google",
        name: "Google Project Management Certification",
        description:
          "This entry-level certification provides foundational knowledge of project management. It covers essential concepts such as initiating projects, managing schedules, budgets, and teams, and applying best practices for project success. Ideal for those looking to break into project management or transition into the field.",
        idealFor: "Beginners or those new to project management.",
        prerequisites: [
          "No prerequisites; ideal for beginners.",
          "Offered via Coursera.",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Marketing & Advertising",
          "E-commerce & Retail",
          "Telecommunications",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://www.coursera.org/professional-certificates/google-project-management?utm_medium=sem&utm_source=gg&utm_campaign=b2c_namer_google-project-management_google_ftcof_professional-certificates_px_dr_bau_gg_sem_pr-bd_us_en_m_hyb_24-05_x&campaignid=12507120706&adgroupid=138976596210&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=636584713408&assetgroupid=&targetid=aud-303020828629:dsa-1903279393350&extensionid=&placement=&gad_source=1&gbraid=0AAAAADdKX6ZU3gRBZB9xTQ8kCrXJveK_-&gclid=CjwKCAjwq7fABhB2EiwAwk-YbK0DezRVKRYr-ynlDYRcM5og6GBjjgZGxyAFH7sG7wYNEp-lFJ-8-RoC6fEQAvD_BwE",
      },
      {
        id: "prince2",
        name: "PRINCE2 Foundation",
        description:
          "PRINCE2 is a widely recognized project management methodology. The Foundation level covers the fundamental principles of PRINCE2, including its processes, themes, and roles. Ideal for professionals who want to gain a structured and internationally recognized approach to project management.",
        idealFor:
          "Individuals working in or aspiring to work in structured project management environments, especially in Europe.",
        prerequisites: [
          "No prerequisites; open to anyone interested in project management",
        ],
        industries: [
          "Finance & Banking",
          "Marketing & Advertising",
          "Government & Public Sector",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.prince2.com/usa/prince2/foundation",
      },
    ],
    ecommerce: [
      {
        id: "google",
        name: "Google Project Management Certification",
        description:
          "This entry-level certification provides foundational knowledge of project management. It covers essential concepts such as initiating projects, managing schedules, budgets, and teams, and applying best practices for project success. Ideal for those looking to break into project management or transition into the field.",
        idealFor: "Beginners or those new to project management.",
        prerequisites: [
          "No prerequisites; ideal for beginners.",
          "Offered via Coursera.",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Marketing & Advertising",
          "E-commerce & Retail",
          "Telecommunications",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://www.coursera.org/professional-certificates/google-project-management?utm_medium=sem&utm_source=gg&utm_campaign=b2c_namer_google-project-management_google_ftcof_professional-certificates_px_dr_bau_gg_sem_pr-bd_us_en_m_hyb_24-05_x&campaignid=12507120706&adgroupid=138976596210&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=636584713408&assetgroupid=&targetid=aud-303020828629:dsa-1903279393350&extensionid=&placement=&gad_source=1&gbraid=0AAAAADdKX6ZU3gRBZB9xTQ8kCrXJveK_-&gclid=CjwKCAjwq7fABhB2EiwAwk-YbK0DezRVKRYr-ynlDYRcM5og6GBjjgZGxyAFH7sG7wYNEp-lFJ-8-RoC6fEQAvD_BwE",
      },
      {
        id: "capm",
        name: "Certified Associate in Project Management (CAPM)®",
        description:
          "The CAPM certification is designed for those starting their project management career. It provides a solid foundation in project management terminology, processes, and best practices. A great starting point for individuals looking to advance their careers in project management.",
        idealFor:
          "Aspiring project managers or those with limited project management experience.",
        prerequisites: [
          "High school diploma, associate's degree, or equivalent",
          "23 hours of project management education or CAPM course completion",
        ],
        industries: [
          "Healthcare",
          "Finance & Banking",
          "Construction & Engineering",
          "E-commerce & Retail",
          "Manufacturing",
          "Pharmaceuticals & Biotechnology",
          "Cybersecurity",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Agriculture & Food Industry",
        ],
        url: "https://www.pmi.org/certifications/certified-associate-capm",
      },
    ],
    telecommunications: [
      {
        id: "google",
        name: "Google Project Management Certification",
        description:
          "This entry-level certification provides foundational knowledge of project management. It covers essential concepts such as initiating projects, managing schedules, budgets, and teams, and applying best practices for project success. Ideal for those looking to break into project management or transition into the field.",
        idealFor: "Beginners or those new to project management.",
        prerequisites: [
          "No prerequisites; ideal for beginners.",
          "Offered via Coursera.",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Marketing & Advertising",
          "E-commerce & Retail",
          "Telecommunications",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://www.coursera.org/professional-certificates/google-project-management?utm_medium=sem&utm_source=gg&utm_campaign=b2c_namer_google-project-management_google_ftcof_professional-certificates_px_dr_bau_gg_sem_pr-bd_us_en_m_hyb_24-05_x&campaignid=12507120706&adgroupid=138976596210&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=636584713408&assetgroupid=&targetid=aud-303020828629:dsa-1903279393350&extensionid=&placement=&gad_source=1&gbraid=0AAAAADdKX6ZU3gRBZB9xTQ8kCrXJveK_-&gclid=CjwKCAjwq7fABhB2EiwAwk-YbK0DezRVKRYr-ynlDYRcM5og6GBjjgZGxyAFH7sG7wYNEp-lFJ-8-RoC6fEQAvD_BwE",
      },
      {
        id: "agilepm",
        name: "Agile Project Management (AgilePM®)",
        description:
          "AgilePM® certification focuses on Agile project management methods and frameworks. It is ideal for project managers and team leaders who want to integrate Agile principles into their project management practices, ensuring faster and more flexible project delivery.",
        idealFor:
          "Project managers working in Agile environments or transitioning from traditional methodologies.",
        prerequisites: [
          "No prerequisites for Foundation level",
          "Practitioner level requires passing the Foundation exam",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Telecommunications",
        ],
        url: "https://apmg-international.com/product/agile-project-management-agilepmr-certification",
      },
    ],
    manufacturing: [
      {
        id: "capm",
        name: "Certified Associate in Project Management (CAPM)®",
        description:
          "The CAPM certification is designed for those starting their project management career. It provides a solid foundation in project management terminology, processes, and best practices. A great starting point for individuals looking to advance their careers in project management.",
        idealFor:
          "Aspiring project managers or those with limited project management experience.",
        prerequisites: [
          "High school diploma, associate's degree, or equivalent",
          "23 hours of project management education or CAPM course completion",
        ],
        industries: [
          "Healthcare",
          "Finance & Banking",
          "Construction & Engineering",
          "E-commerce & Retail",
          "Manufacturing",
          "Pharmaceuticals & Biotechnology",
          "Cybersecurity",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Agriculture & Food Industry",
        ],
        url: "https://www.pmi.org/certifications/certified-associate-capm",
      },
      {
        id: "lssgb",
        name: "Lean Six Sigma Green Belt",
        description:
          "Lean Six Sigma certifications focus on process optimization and quality management. The Green Belt is for professionals who want to lead projects that improve processes.",
        idealFor:
          "Project managers, process improvement specialists, and those in quality management roles.",
        prerequisites: [
          "No prerequisites (some providers recommend work experience)",
        ],
        industries: [
          "Manufacturing",
          "E-commerce & Retail",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://iassc.org/six-sigma-certification/green-belt-certification/",
      },
    ],
    // Add more industries and their certifications as needed
  },
  mid: {
    technology: [
      {
        id: "pmp",
        name: "Project Management Professional (PMP)®",
        description:
          "The PMP certification is one of the most respected in the project management industry. It demonstrates advanced project management experience and knowledge of methodologies. It is ideal for experienced project managers who want to take their careers to the next level.",
        idealFor:
          "Experienced project managers seeking to validate their skills and knowledge.",
        prerequisites: [
          "Four-year degree + 36 months project experience + 35 hours project management training OR",
          "High school diploma/associate degree + 60 months project experience + 35 hours project management training",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Healthcare",
          "Finance & Banking",
          "Construction & Engineering",
          "Marketing & Advertising",
          "E-commerce & Retail",
          "Telecommunications",
          "Manufacturing",
          "Education & E-learning",
          "Pharmaceuticals & Biotechnology",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://www.pmi.org/certifications/project-management-pmp",
      },
      {
        id: "pmi-acp",
        name: "Agile Certified Practitioner (PMI-ACP)®",
        description:
          "The PMI-ACP certification is designed for those who work in Agile project management or are involved in Agile practices. It covers Agile principles, practices, and tools, making it ideal for project managers who want to gain credibility in Agile methodologies.",
        idealFor:
          "Project managers and professionals working in Agile environments.",
        prerequisites: [
          "Secondary degree (high school diploma or higher)",
          "21 contact hours of Agile training",
          "12 months of general project experience in the last 5 years (or PMP/CAPM certification)",
          "8 months of Agile project experience in the last 3 years",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Marketing & Advertising",
          "Education & E-learning",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
        ],
        url: "https://www.pmi.org/certifications/agile-certifications",
      },
    ],
    // Add more industries and their certifications for mid-level
  },
  senior: {
    technology: [
      {
        id: "pfmp",
        name: "Portfolio Management Professional (PfMP)®",
        description:
          "The PfMP certification is designed for those responsible for portfolio management, overseeing multiple projects and programs to achieve strategic goals. It is ideal for senior-level professionals who align portfolios with organizational strategy.",
        idealFor:
          "Professionals responsible for managing multiple projects and programs within an organization.",
        prerequisites: [
          "Bachelor's degree + 48 months of portfolio management experience + 96 months of business experience OR",
          "High school diploma + 84 months of portfolio management experience + 96 months of business experience",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "E-commerce & Retail",
          "Manufacturing",
          "Cybersecurity",
          "Real Estate & Property Management",
          "Transportation & Logistics",
          "Education & E-learning",
          "Automotive & Aerospace",
          "Nonprofit & Social Impact",
          "Entertainment & Media",
          "Agriculture & Food Industry",
        ],
      },
      {
        id: "safe",
        name: "SAFe Agilist (SA)",
        description:
          "The SAFe Agilist certification is designed for those who want to learn how to scale Agile practices across the enterprise. It's ideal for professionals who are part of or leading Agile transformations within larger organizations.",
        idealFor:
          "Agile professionals looking to implement and scale Agile across organizations.",
        prerequisites: [
          "No formal prerequisites",
          "Experience in Agile, Scrum, or Lean recommended",
          "Must attend a SAFe Agilist training course",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Telecommunications",
        ],
      },
    ],
    // Add more industries and their certifications for senior-level
  },
};

// Helper function to determine experience level
export function getExperienceLevel(years: string): CertificationLevel {
  if (years === "0-1" || years === "2-3") {
    return "entry";
  } else if (years === "4-5" || years === "6-7") {
    return "mid";
  } else {
    return "senior";
  }
}

// Helper function to get recommended certifications
export function getRecommendedCertifications(
  industry: string,
  experienceYears: string,
  currentCertifications: string[],
): Certification[] {
  const level = getExperienceLevel(experienceYears);

  // Get certifications for the industry and level
  let recommendations: Certification[] = [];

  // Try to get recommendations for the specific industry
  if (certificationData[level][industry]) {
    recommendations = certificationData[level][industry];
  } else {
    // If no specific recommendations for this industry, get general recommendations
    // This is a fallback in case we don't have data for a specific industry
    const generalIndustries = ["technology", "healthcare", "finance"];
    for (const generalIndustry of generalIndustries) {
      if (certificationData[level][generalIndustry]) {
        recommendations = certificationData[level][generalIndustry];
        break;
      }
    }
  }

  // Filter out certifications the user already has
  const filteredRecommendations = recommendations.filter(
    (cert) => !currentCertifications.includes(cert.id),
  );

  // If all recommended certifications are already held, try the next level up
  if (filteredRecommendations.length === 0) {
    if (level === "entry") {
      return getRecommendedCertifications(
        industry,
        "4-5",
        currentCertifications,
      ); // Try mid-level
    } else if (level === "mid") {
      return getRecommendedCertifications(
        industry,
        "8-9",
        currentCertifications,
      ); // Try senior-level
    } else {
      // If they already have all senior-level certifications, return empty array
      return [];
    }
  }

  return filteredRecommendations;
}

// Lean Six Sigma Black Belt

// https://chatgpt.com/share/681edf1f-da88-8012-840c-7db83dddb7a2
