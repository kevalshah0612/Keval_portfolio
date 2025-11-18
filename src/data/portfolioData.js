export const portfolioData = {
  personal: {
    name: "Keval Shah",
    title: "Software Developer | MS CS @ Binghamton",
    email: "kshah24@binghamton.edu",
    phone: "(607) 235-1181",
    location: "New York - Open to Relocate",
    linkedin: "https://www.linkedin.com/in/keval-shah0612/",
    github: "https://github.com/kevalshah0612",
    summary:
      "Software Developer at TCS with 3.5+ years experience across 10+ enterprise projects, orchestrated data processing for 10M+ records, and 90% performance improvements using Java, Python, Spring Boot, React, Oracle, and AWS. Recognized leader with 5+ Star of the Month awards, certified full-stack training (ranked 1st), and end-to-end project ownership including CI/CD implementation. Graduate student with 4.0 GPA seeking Summer 2026 internships and full-time SDE roles, with expertise in scalable systems and security integration.",
    seeking: "Summer 2026 internships and full-time SDE roles"
  },

  // Optional core skills (not explicitly in resume but consistent)
  coreSkills: [
    { name: "Full-Stack Development", level: 95 },
    { name: "Java & Spring Boot", level: 93 },
    { name: "Python & Flask/Django", level: 88 },
    { name: "React & Angular", level: 90 },
    { name: "AWS & Cloud Services", level: 87 },
    { name: "Database Systems & Optimization", level: 91 }
  ],

  experience: [
    {
      id: 1,
      title: "Teaching Assistant - Database Systems (CS 432/532)",
      company: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      duration: "Aug 2025 - Present",
      description: [
        "Redesigned database curriculum with faculty and created course materials, improving student learning outcomes",
        "Conducted TA sessions explaining database concepts (normalization, indexing, query optimization) to students",
        "Graded assignments and projects using detailed rubrics, providing constructive feedback to enhance understanding"
      ],
      current: true
    },
    {
      id: 2,
      title: "Software Developer (Volunteer)",
      company: "Global Health Impact (GHI)",
      location: "New York, NY (Remote/Volunteer Role)",
      duration: "Jun 2025 - Aug 2025",
      description: [
        "Engineered Flask REST APIs to process disease data for 180+ countries by orchestrating data aggregation pipelines and devising predictive models for epidemiological trends",
        "Developed interactive React dashboards for real-time geographic visualizations and analytics, incorporating UI/UX feedback to expand platform coverage to regional and national reporting",
        "Authored and documented 8+ API endpoints and dashboards for international public health teams, creating user training materials and providing post-launch support to ensure system reliability"
      ],
      current: false
    },
    {
      id: 3,
      title: "System Engineer",
      company: "Tata Consultancy Services",
      location: "India",
      duration: "Oct 2022 - Dec 2024",
      description: [
        "Led full-stack development and tech stack upgrades for 10+ enterprise applications by implementing modern frameworks and architectures, improving performance and compatibility",
        "Implemented multithreading architecture for high-resolution PDF file upload processes in legacy applications, achieving 90% faster processing time and $1.2M annual cost savings",
        "Optimized data processing systems handling 10M+ records per batch using custom functionality with database and SharePoint API integration, streamlining data storage and retrieval"
      ],
      current: false
    },
    {
      id: 4,
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      location: "India",
      duration: "Mar 2021 - Sep 2022",
      description: [
        "Enhanced security infrastructure across 10+ projects by integrating SSL and SAST tools and developing custom SharePoint authentication solutions, strengthening security and modernizing legacy systems",
        "Established CI/CD pipelines for 10+ projects with automated deployment processes and AWS infrastructure management (RDS, EC2, S3), enabling seamless operations and successful server migrations from CentOS to AL2/AL3",
        "Managed complete project lifecycle and stakeholder communication via weekly client meetings and comprehensive documentation, earning 5+ Star of the Month awards"
      ],
      current: false
    },
    {
      id: 5,
      title: "Technical Mentor & Presenter",
      company: "Tata Consultancy Services",
      location: "India",
      duration: "Sep 2024 - Nov 2024",
      description: [
        "Led technology learning sessions for 300+ junior developers and conducted T-Factor training, achieving a 4.39 score",
        "Mentored junior developers during full-stack training, providing MERN stack guidance and securing first-rank certification",
        "Managed end-to-end delivery of 40+ production releases on schedule through weekly stakeholder communication and comprehensive project lifecycle oversight including documentation and CI/CD implementation"
      ],
      current: false,
      isLeadership: true
    }
  ],

  projects: [
    {
      id: 1,
      title: "Event & Finance Management System",
      description:
        "Designed and developed a group expense management platform with 12+ features including bill splitting, payment tracking, and shared financial visibility for seamless expense management among groups.",
      technologies: [
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "Docker",
        "Spring Security",
        "JWT",
        "REST APIs"
      ],
      duration: "Jun 2025 - Present",
      highlights: [
        "Designed group expense management platform with 12+ features including bill splitting, payment tracking, and shared financial visibility",
        "Built scalable microservices API with JWT authentication handling 1000+ concurrent transactions and secure user data access"
      ],
      icon: "fas fa-credit-card",
      status: "In Development",
      type: "Co-Developer"
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "Built a healthcare management system with 10+ modules including appointment scheduling, patient records, billing, and inventory for multiple user roles.",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "JavaScript",
        "Linux"
      ],
      duration: "Mar 2024 - Apr 2024",
      highlights: [
        "Built healthcare management system with 10+ modules including appointment scheduling, patient records, and billing for 3 user roles",
        "Implemented Role-Based Access Control with AES encryption across 8 database tables for patient, doctor, and admin accounts"
      ],
      icon: "fas fa-hospital",
      status: "Completed",
      type: "Co-Developer"
    }
    // Smart Irrigation IoT System is not on this resume version, so removed
  ],

  // You can also add an education section to feed into the portfolio if you need it in UI
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      duration: "Expected Dec 2026",
      gpa: "4.00/4.00",
      details: [
        "Relevant Coursework: Database Systems, Design & Analysis of Algorithms, Programming Languages, Machine Learning, Programming for the Web, Systems Programming"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Gujarat, India",
      duration: "Aug 2016 - Sep 2020",
      gpa: null,
      details: []
    }
  ],

  skills: {
    "Programming Languages": [
      "Java",
      "Python",
      "JavaScript",
      "C++",
      "TypeScript",
      "SQL",
      "Go",
      "C",
      "PL/SQL"
    ],
    "Software Development & Systems": [
      "Large Software Systems",
      "Distributed Systems",
      "Web Application Development",
      "Algorithm Development",
      "Software Engineering",
      "Parallel Systems",
      "Automation Infrastructure",
      "Natural Language Processing",
      "UI"
    ],
    "Operating Systems & Environments": [
      "Unix/Linux Environments",
      "Shell Scripting",
      "System Programming",
      "Command Line Tools",
      "Windows"
    ],
    "Data Structures & Algorithms": [
      "Algorithm Design & Analysis",
      "Data Structures",
      "Performance Optimization",
      "Computer Science Fundamentals"
    ],
    "Cloud/DevOps/Infrastructure": [
      "AWS (EC2, S3, RDS)",
      "Docker",
      "CI/CD Pipelines",
      "Jenkins",
      "Git",
      "System Design",
      "Unix/Linux",
      "Networking"
    ],
    "Development & Deployment": [
      "Spring Boot",
      "Microservices",
      "RESTful APIs",
      "Node.js",
      "Spring MVC"
    ],
    "Data/AI/ML & Databases": [
      "PostgreSQL",
      "MySQL",
      "Machine Learning",
      "MongoDB",
      "Artificial Intelligence",
      "TensorFlow",
      "Oracle",
      "Pandas",
      "NumPy"
    ]
  },

  achievements: [
    "5+ Star of the Month awards at TCS for exceptional project delivery and client satisfaction",
    "Ranked 1st in TCS full-stack development certification program out of 200+ participants",
    "Led and contributed to 10+ enterprise-scale projects with multi-million dollar impact",
    "Achieved 90% performance improvements through system optimization and multithreading architecture redesign",
    "Maintained a perfect 4.0 GPA in Master's program at SUNY Binghamton while serving as Teaching Assistant",
    "T-Factor training achievement with 4.39 score demonstrating technical capability and learning agility",
    "Consistently ranked among top 3 contenders in TCS hackathons",
    "Led technology learning sessions for 300+ junior developers at TCS",
    "Managed end-to-end delivery of 40+ production releases on schedule with full CI/CD and documentation ownership",
    "Orchestrated data processing for 10M+ records per batch using optimized data pipelines and API integrations"
  ]
};
