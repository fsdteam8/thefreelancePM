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
      {
        id: "cpmai",
        name: "Cognitive Project Management in AI (CPMAI)",
        description:
          "The CPMAI certification focuses on managing AI and ML projects. It’s ideal for professionals in industries where artificial intelligence plays a key role, helping them understand the unique challenges of managing AI-based initiatives.",
        idealFor:
          "Project managers working on AI and machine learning projects.",
        prerequisites: [
          "No formal prerequisites",
          "Training course required before the exam",
          "AI and ML project management experience recommended",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "Healthcare",
          "Telecommunications",
          "Manufacturing & Engineering",
        ],
        url: "https://www.pmi.org/shop/p-/digital-product/cognitive-project-management-in-ai-(cpmai)-v7---training-,-a-,-certification/cpmai-b-01",
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
          "Government & Public Sector",
          "Entertainment & Media",
        ],
        url: "https://www.pmi.org/certifications/certified-associate-capm",
      },
      {
        id: "ccrp",
        name: "Certified Clinical Research Project Manager (CCRP)",
        description:
          "The CCRP certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
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
    realestate: [
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
    transportation: [
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
    nonprofit: [
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
    entertainment: [
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
    hospitality: [
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
    agriculture: [
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
    pharmaceuticals: [
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
        id: "ccrp",
        name: "Certified Clinical Research Project Manager (CCRP)",
        description:
          "The CCRP certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
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
    cybersecurity: [
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
    education: [
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
    energy: [
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
    automotive: [
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
    government: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
      {
        id: "cpmai",
        name: "Cognitive Project Management in AI (CPMAI)",
        description:
          "The CPMAI certification focuses on managing AI and ML projects. It’s ideal for professionals in industries where artificial intelligence plays a key role, helping them understand the unique challenges of managing AI-based initiatives.",
        idealFor:
          "Project managers working on AI and machine learning projects.",
        prerequisites: [
          "No formal prerequisites",
          "Training course required before the exam",
          "AI and ML project management experience recommended",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "Healthcare",
          "Telecommunications",
          "Manufacturing & Engineering",
        ],
        url: "https://www.pmi.org/shop/p-/digital-product/cognitive-project-management-in-ai-(cpmai)-v7---training-,-a-,-certification/cpmai-b-01",
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
        url: "https://scaledagile.com/training/leading-safe",
      },
    ],
    manufacturing: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    cybersecurity: [
      {
        id: "cspm",
        name: "Certified Security Project Manager (CSPM)",
        description:
          "The CSPM certification is designed for professionals managing security projects, particularly those involving physical and electronic security systems. It demonstrates expertise in managing scope, budgets, timelines, and stakeholders within security-focused environments.",
        idealFor:
          "Security professionals and project managers overseeing physical or electronic security projects.",
        prerequisites: [
          "Minimum 6,000 hours of hands-on security project management experience within the last 10 years",
          "Security Industry Association (SIA) approval to sit for the exam",
        ],
        industries: ["Cybersecurity"],
        url: "https://www.securityindustry.org/professional-development/cspm-certification",
      },
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    finance: [
      {
        id: "pmi-rmp",
        name: "Risk Management Professional (PMI-RMP)®",
        description:
          "The PMI-RMP certification is for project managers who specialize in risk management. It demonstrates the ability to identify, assess, and manage risks in projects, making it ideal for professionals who work in high-risk industries or complex projects.",
        idealFor:
          "Project managers focused on identifying and managing project risks.",
        prerequisites: [
          "Bachelor’s degree + 24 months risk management experience + 30 hours risk management education OR",
          "High school diploma + 36 months risk management experience + 40 hours risk management education",
        ],
        industries: [
          "Finance & Banking",
          "Cybersecurity",
          "Energy & Utilities",
        ],
        url: "https://www.pmi.org/certifications/risk-management-rmp",
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    marketing: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    government: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    education: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    energy: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    automotive: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    nonprofit: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    hospitality: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    healthcare: [
      {
        id: "ccrp",
        name: "Certified Clinical Research Project Manager (CCRP)",
        description:
          "The CCRP certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
        idealFor:
          "Project managers in the healthcare or clinical research sectors.",
        prerequisites: [
          "Bachelor's degree in life sciences, healthcare, or related field",
          "Clinical research or project management experience recommended",
        ],
        industries: ["Healthcare", "Pharmaceuticals & Biotechnology"],
        url: "https://charteredcertifications.com/learning/courses/ccrp",
      },
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    pharmaceuticals: [
      {
        id: "ccrp",
        name: "Certified Clinical Research Project Manager (CCRP)",
        description:
          "The CCRP certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
        idealFor:
          "Project managers in the healthcare or clinical research sectors.",
        prerequisites: [
          "Bachelor's degree in life sciences, healthcare, or related field",
          "Clinical research or project management experience recommended",
        ],
        industries: ["Healthcare", "Pharmaceuticals & Biotechnology"],
        url: "https://charteredcertifications.com/learning/courses/ccrp",
      },
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    construction: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ecommerce: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    telecommunications: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
        url: "https://scaledagile.com/training/leading-safe",
      },
    ],
    realestate: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    transportation: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
    entertainment: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    agriculture: [
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
          "Pharmaceuticals & Biotechnology",
          "Education & E-learning",
          "Cybersecurity",
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
    ],
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
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
        url: "https://scaledagile.com/training/leading-safe",
      },
      {
        id: "cpmai",
        name: "Cognitive Project Management for AI (CPMAI)",
        description:
          "The CPMAI certification focuses on managing AI and ML projects. It’s ideal for professionals in industries where artificial intelligence plays a key role, helping them understand the unique challenges of managing AI-based initiatives.",
        idealFor:
          "Project managers working on AI and machine learning projects.",
        prerequisites: [
          "No formal prerequisites",
          "Training course required before the exam",
          "AI and ML project management experience recommended",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "Healthcare",
          "Telecommunications",
          "Manufacturing & Engineering",
        ],
        url: "https://www.pmi.org/shop/p-/digital-product/cognitive-project-management-in-ai-(cpmai)-v7---training-,-a-,-certification/cpmai-b-01",
      },
    ],
    marketing: [
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
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
    healthcare: [
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
      {
        id: "ccrp",
        name: "Certified Clinical Research Project Manager (CCRP)",
        description:
          "The CCRP certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
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
        id: "pmi-rmp",
        name: "Risk Management Professional (PMI-RMP)®",
        description:
          "The PMI-RMP certification is for project managers who specialize in risk management. It demonstrates the ability to identify, assess, and manage risks in projects, making it ideal for professionals who work in high-risk industries or complex projects.",
        idealFor:
          "Project managers focused on identifying and managing project risks.",
        prerequisites: [
          "Bachelor’s degree + 24 months risk management experience + 30 hours risk management education OR",
          "High school diploma + 36 months risk management experience + 40 hours risk management education",
        ],
        industries: [
          "Finance & Banking",
          "Cybersecurity",
          "Energy & Utilities",
        ],
        url: "https://www.pmi.org/certifications/risk-management-rmp",
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
    ],
    cybersecurity: [
      {
        id: "cpmai",
        name: "Certified AI Project Manager (CPMAI)",
        description:
          "The CPMAI certification focuses on managing AI and machine learning projects. It’s ideal for professionals in industries where artificial intelligence plays a key role, helping them understand the unique challenges of managing AI-based initiatives.",
        idealFor:
          "Project managers working on AI and machine learning projects.",
        prerequisites: [
          "No formal prerequisites",
          "Training course required before the exam",
          "AI and ML project management experience recommended",
        ],
        industries: [
          "Technology (IT & Software Development)",
          "Cybersecurity",
          "Pharmaceuticals & Biotechnology",
          "Finance & Banking",
        ],
        url: "https://www.pmi.org/shop/p-/digital-product/cognitive-project-management-in-ai-(cpmai)-v7---training-,-a-,-certification/cpmai-b-01",
      },
      {
        id: "cspm",
        name: "Certified Security Project Manager (CSPM)",
        description:
          "The CSPM certification is designed for professionals managing security projects, particularly those involving physical and electronic security systems. It demonstrates expertise in managing scope, budgets, timelines, and stakeholders within security-focused environments.",
        idealFor:
          "Security professionals and project managers overseeing physical or electronic security projects.",
        prerequisites: [
          "Minimum 6,000 hours of hands-on security project management experience within the last 10 years",
          "Security Industry Association (SIA) approval to sit for the exam",
        ],
        industries: ["Cybersecurity"],
        url: "https://www.securityindustry.org/professional-development/cspm-certification",
      },
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
    ],
    government: [
      {
        id: "prince2",
        name: "PRINCE2 Practitioner",
        description: "Advanced certification for PRINCE2 implementation.",
        idealFor: "Advanced PRINCE2 methodology users.",
        prerequisites: [
          "No prerequisites; open to anyone interested in project management",
        ],
        industries: ["Government & Public Sector"],
        url: "https://www.prince2.com/usa/prince2/foundation",
      },
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
    ],
    education: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
    ],
    energy: [
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
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    automotive: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
    ],
    nonprofit: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    hospitality: [
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
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    pharmaceuticals: [
      {
        id: "ccrp",
        name: "Certified Clinical Research Project Manager (CCRP)",
        description:
          "The CCRP certification is for professionals working in clinical project management, particularly in pharmaceutical and healthcare industries. It covers managing clinical trials, research, regulatory requirements, and compliance in project management within healthcare.",
        idealFor:
          "Project managers in the healthcare or clinical research sectors.",
        prerequisites: [
          "Bachelor's degree in life sciences, healthcare, or related field",
          "Clinical research or project management experience recommended",
        ],
        industries: ["Healthcare", "Pharmaceuticals & Biotechnology"],
        url: "https://charteredcertifications.com/learning/courses/ccrp",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    construction: [
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
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    telecommunications: [
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
        url: "https://scaledagile.com/training/leading-safe",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    ecommerce: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "lssbb",
        name: "Lean Six Sigma Black Belt",
        description:
          "Lean Six Sigma Black Belt certification demonstrates advanced knowledge of Six Sigma methodologies and tools for leading process improvement projects. Black Belts typically lead project teams and serve as experts in data-driven decision-making, process optimization, and organizational efficiency.",
        idealFor:
          "Experienced professionals leading process improvement projects and managing teams in quality-focused roles.",
        prerequisites: [
          "Typically requires completion of Lean Six Sigma Green Belt certification",
          "Experience leading or supporting Six Sigma projects is recommended",
          "Training or coursework in Six Sigma principles usually required",
        ],
        industries: [
          "Manufacturing",
          "Healthcare",
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "Supply Chain & Logistics",
        ],
        url: "https://iassc.org/six-sigma-certification/black-belt-certification",
      },
    ],
    manufacturing: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "lssbb",
        name: "Lean Six Sigma Black Belt",
        description:
          "Lean Six Sigma Black Belt certification demonstrates advanced knowledge of Six Sigma methodologies and tools for leading process improvement projects. Black Belts typically lead project teams and serve as experts in data-driven decision-making, process optimization, and organizational efficiency.",
        idealFor:
          "Experienced professionals leading process improvement projects and managing teams in quality-focused roles.",
        prerequisites: [
          "Typically requires completion of Lean Six Sigma Green Belt certification",
          "Experience leading or supporting Six Sigma projects is recommended",
          "Training or coursework in Six Sigma principles usually required",
        ],
        industries: [
          "Manufacturing",
          "Healthcare",
          "Technology (IT & Software Development)",
          "Finance & Banking",
          "Supply Chain & Logistics",
        ],
        url: "https://iassc.org/six-sigma-certification/black-belt-certification",
      },
    ],
    realestate: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
    ],
    transportation: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "pgmp",
        name: "Program Management Professional (PgMP)®",
        description:
          "The PgMP certification demonstrates expertise in managing complex programs. It is ideal for professionals who oversee and coordinate multiple projects that align with strategic business objectives.",
        idealFor:
          "Experienced program managers overseeing multiple related projects.",
        prerequisites: [
          "Bachelor’s degree + 48 months project management experience + 48 months program management experience OR",
          "High school diploma + 48 months project management experience + 84 months program management experience",
        ],
        industries: [
          "Healthcare",
          "Construction & Engineering",
          "Marketing & Advertising",
          "Telecommunications",
          "Pharmaceuticals & Biotechnology",
          "Transportation & Logistics",
          "Energy & Utilities",
          "Nonprofit & Social Impact",
          "Hospitality & Tourism",
        ],
        url: "https://www.pmi.org/certifications/program-management-pgmp",
      },
    ],
    entertainment: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
      },
    ],
    agriculture: [
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
        url: "https://www.pmi.org/certifications/portfolio-management-pfmp",
      },
      {
        id: "cpd",
        name: "Certified Project Director (CPD)",
        description:
          "The CPD certification is for experienced project managers who have advanced project management skills. It validates the ability to oversee and direct large, complex projects and programs across various industries, focusing on leadership and strategic alignment.",
        idealFor:
          "Senior-level project managers with leadership and strategic oversight responsibilities.",
        prerequisites: [
          "Must have PMP, PRINCE2, or equivalent",
          "5+ years of project management experience",
        ],
        industries: [
          "Marketing & Advertising",
          "Government & Public Sector",
          "Real Estate & Property Management",
          "Education & E-learning",
          "Energy & Utilities",
          "Automotive & Aerospace",
          "Entertainment & Media",
          "Hospitality & Tourism",
          "Agriculture & Food Industry",
        ],
        url: "https://gaqm.org/certifications/project_management/cpd",
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

// https://chatgpt.com/share/681edf1f-da88-8012-840c-7db83dddb7a2
