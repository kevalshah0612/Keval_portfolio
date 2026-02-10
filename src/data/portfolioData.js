export const portfolioData = {
  personal: {
    name: "Keval Shah",
    title: "Software Engineer | MS CS @ Binghamton",
    email: "kshah24@binghamton.edu",
    phone: "(607) 235-1181",
    location: "New York - Open to Relocate",
    linkedin: "https://www.linkedin.com/in/keval-shah0612/",
    github: "https://github.com/kevalshah0612",
    summary:
      "Software Engineer with 4 years building production systems at scale. Delivered $1.2M savings and 92% performance gains through distributed system optimization. MS Computer Science student (GPA 4.00, May 2026) with hands-on experience in Java, Spring Boot, Python, React, and AWS. Seeking full-time Software Engineer roles starting May 2026.",
    seeking: "Full-time Software Engineer roles starting May 2026"
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
      title: "Teaching Assistant",
      company: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      duration: "Aug 2025 - Present",
      description: [
        "Mentor 150+ students across two core CS courses, leading labs, office hours, and code reviews on SQL, query optimization, OOP design patterns, and clean code practices",
        "Developed structured feedback rubrics and hands-on exercises that improved average assignment scores by 18%"
      ],
      current: true
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Global Health Impact (GHI)",
      location: "Binghamton, NY",
      duration: "Jun 2025 - Aug 2025",
      description: [
        "Automated health analytics processing 10M+ weekly records across 180+ countries, eliminating 95% of manual reporting work through Flask REST APIs and Python microservices",
        "Drove 40% user growth by designing React/TypeScript dashboards with role-based access and drill-down analytics based on stakeholder feedback",
        "Increased pipeline reliability from 85% to 96% uptime through schema validation, monitoring alerts, and retry logic"
      ],
      current: false
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Tata Consultancy Services (TCS)",
      location: "Gandhinagar, India",
      duration: "Mar 2021 - Dec 2024",
      description: [
        "Accelerated 3D PDF ingestion 92% (4min → 20sec) delivering $1.2M annual savings by engineering multithreaded Java/Spring Boot pipeline with parallel I/O and memory-mapped file handling",
        "Scaled distributed microservices to 50K+ daily requests at 99.9% uptime, handling 5× traffic spikes through Redis caching, connection pooling, and async processing",
        "Shortened release cycles 60% (5 days → 2 days) while maintaining 99.5% uptime by standardizing GitHub Actions CI/CD with automated testing across 7 microservices",
        "Eliminated 500+ critical and high-severity vulnerabilities by integrating SAST scanning (SonarQube) into CI/CD workflows, reducing production security exposure by 85% and meeting compliance requirements",
        "Rescued production functionality within 3 days by implementing certificate-based authentication after unexpected API deprecation"
      ],
      current: false
    }
  ],

  projects: [
    // NEW PROJECTS FROM RESUME
    {
      id: 1,
      title: "Key-Value Database in C with Crash Recovery",
      description:
        "Designed crash-safe KV store achieving 20K+ ops/sec with zero data loss using hash-indexed storage, WAL, and multithreaded handlers.",
      technologies: [
        "C",
        "POSIX Threads",
        "Hash Indexing",
        "Write-Ahead Logging",
        "Multithreading"
      ],
      duration: "Recent",
      highlights: [
        "Achieved 20K+ operations per second with zero data loss",
        "Implemented hash-indexed storage with Write-Ahead Logging (WAL)",
        "Built multithreaded handlers for concurrent request processing"
      ],
      icon: "fas fa-database",
      status: "Completed",
      type: "Solo Developer"
    },
    {
      id: 2,
      title: "Distributed URL Shortener and Analytics Platform",
      description:
        "Architected full-stack microservices platform with p95 latency <50ms at 1K req/sec and 75% faster deployments.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Redis",
        "PostgreSQL",
        "Docker",
        "GCP",
        "Microservices"
      ],
      duration: "Recent",
      highlights: [
        "Achieved p95 latency <50ms at 1000 requests per second",
        "Reduced deployment time by 75% through containerization",
        "Built analytics tracking with Redis caching and PostgreSQL persistence"
      ],
      icon: "fas fa-link",
      status: "Completed",
      type: "Solo Developer"
    },
    {
      id: 3,
      title: "AI-Powered Q&A Chatbot",
      description:
        "Deployed serverless chatbot with persistent conversation history using edge computing and LLM integration.",
      technologies: [
        "TypeScript",
        "Cloudflare Workers",
        "Llama 3.1-8B",
        "Edge Computing",
        "Serverless"
      ],
      duration: "Recent",
      highlights: [
        "Deployed serverless architecture using Cloudflare Workers at the edge",
        "Integrated Llama 3.1-8B for natural language understanding",
        "Implemented persistent conversation history for context-aware responses"
      ],
      icon: "fas fa-robot",
      status: "Completed",
      type: "Solo Developer",
      github: "https://github.com/kevalshah0612"
    },
    {
      id: 4,
      title: "CNN Image Classifier",
      description:
        "Trained ShallowCNN (545K params) and DeepCNN (919K params) reaching ~80% accuracy through hypothesis testing on regularization and optimizers.",
      technologies: [
        "PyTorch",
        "scikit-learn",
        "CNNs",
        "Deep Learning",
        "Python"
      ],
      duration: "Recent",
      highlights: [
        "Achieved ~80% accuracy on image classification task",
        "Trained both ShallowCNN (545K parameters) and DeepCNN (919K parameters)",
        "Conducted hypothesis testing on regularization techniques and optimizers"
      ],
      icon: "fas fa-brain",
      status: "Completed",
      type: "Academic Project"
    },
    // EXISTING PROJECTS (KEPT AS IS)
    {
      id: 5,
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
      id: 6,
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
  ],

  // Education section
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      duration: "Jan 2025 - May 2026",
      gpa: "4.00/4.00",
      details: [
        "Relevant Coursework: Artificial Intelligence, Machine Learning, NLP, Computer Vision, Algorithms, Systems Programming"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Gujarat, India",
      duration: "Aug 2016 - Sep 2020",
      gpa: "3.85/4.00",
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
      "C"
    ],
    "Backend Development": [
      "Spring Boot",
      "Spring Security",
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "GraphQL",
      "Microservices"
    ],
    "Frontend Development": [
      "React",
      "Angular",
      "HTML5",
      "CSS3",
      "TypeScript"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, RDS, Lambda, CloudWatch)",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "CI/CD"
    ],
    "Databases": [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "Redis",
      "MongoDB"
    ],
    "Tools & Testing": [
      "Git",
      "Maven",
      "JUnit",
      "PyTest",
      "Jest",
      "k6",
      "Linux",
      "Agile",
      "TDD"
    ],
    "AI & Machine Learning": [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP (Transformers, BERT)",
      "CNNs",
      "GANs",
      "LLM APIs"
    ]
  },

  achievements: [
    "Delivered $1.2M annual savings through 92% performance optimization of PDF processing pipeline",
    "Scaled distributed systems to 50K+ daily requests at 99.9% uptime with 5× traffic spike handling",
    "Reduced release cycles by 60% while maintaining 99.5% uptime across 7 microservices",
    "Eliminated 500+ security vulnerabilities, reducing production exposure by 85%",
    "Drove 40% user growth through React/TypeScript dashboards at Global Health Impact",
    "Improved student assignment scores by 18% through structured feedback and hands-on exercises",
    "Maintained perfect 4.0 GPA in MS Computer Science program with AI specialization",
    "5+ Star of the Month awards at TCS for exceptional project delivery and client satisfaction",
    "Ranked 1st in TCS full-stack development certification program out of 200+ participants",
    "Led technology learning sessions for 300+ junior developers at TCS"
  ]
};
