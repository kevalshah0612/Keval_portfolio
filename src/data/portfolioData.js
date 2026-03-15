export const portfolioData = {
  personal: {
    name: "Keval Shah",
    title: "Software Engineer | MS CS @ Binghamton",
    email: "kshah24@binghamton.edu",
    phone: "(607) 235-1181",
    location: "Binghamton, NY - Open to Relocate",
    linkedin: "https://www.linkedin.com/in/keval-shah0612/",
    github: "https://github.com/kevalshah0612",
    portfolio: "https://keval-portfolio.vercel.app",
    summary:
      "Software Engineer with 4 years of experience building distributed systems, backend platforms, and data-driven products. Currently pursuing an MS in Computer Science at Binghamton University (GPA 4.00) with hands-on experience in Java, Spring Boot, Python, React, cloud infrastructure, and machine learning. Seeking full-time Software Engineer roles starting May 2026.",
    seeking: "Full-time Software Engineer roles starting May 2026"
  },

  coreSkills: [
    { name: "Backend Engineering", level: 95 },
    { name: "Java & Spring Boot", level: 94 },
    { name: "Python & FastAPI/Flask", level: 91 },
    { name: "React & TypeScript", level: 89 },
    { name: "Cloud & DevOps", level: 88 },
    { name: "Databases & Distributed Systems", level: 92 }
  ],

  experience: [
    {
      id: 1,
      title: "Teaching Assistant",
      company: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      duration: "Aug 2025 - Present",
      description: [
        "Mentor 120+ students across Database Management and Object-Oriented Programming, leading code reviews and debugging sessions in C++, Java, SQL, concurrency, and database design"
      ],
      current: true
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "Global Health Impact",
      location: "New York",
      duration: "Jun 2025 - Aug 2025",
      description: [
        "Architected Python FastAPI REST APIs with OAuth and JWT authentication across 4 backend services, connecting a TypeScript and React frontend to real-time disease burden predictions that cut data analysis turnaround from hours to seconds",
        "Spearheaded development and deployment of Python scikit-learn machine learning models on GCP, training on WHO health data to forecast country-level disease impact scores and reduce manual reporting effort by 90%",
        "Pioneered Python ETL pipelines across 5+ disease categories that eliminated manual data transformation steps and delivered machine learning-ready datasets for the organization's first predictive analytics dashboard"
      ],
      current: false
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Tata Consultancy Services (Wabtec Corporation)",
      location: "India",
      duration: "Mar 2021 - Dec 2024",
      description: [
        "Unified distributed role-based access control with Spring Security across 10 Java Spring Boot microservices, integrating MySQL and NoSQL sources and reducing access-related support tickets by 22%",
        "Drove AWS cloud cost optimization across 10 enterprise applications using Python cleanup scripts, Datadog observability, Docker, and Kubernetes lifecycle management, saving $18K per month",
        "Transformed a broken legacy Java application into a production-ready distributed system in 2 months by upgrading to Java 11 and introducing Redis caching, improving response time by 30% and reducing user incidents by 19%",
        "Engineered a Java multithreaded concurrent file upload system for Microsoft SharePoint serving 10K+ users, cutting upload time from 60 seconds to 10 seconds, and led a 5-member team to resolve a live authentication outage in 2 days via a custom OAuth solution",
        "Established GitLab CI/CD as the unit-wide delivery standard by building Python automation from scratch, streamlining Agile sprint releases to deliver 40+ production deployments with zero-downtime rollback capability"
      ],
      current: false
    }
  ],

  projects: [
        {
      id: 1,
      title: "FinSafe Transaction Intelligence Platform",
      description:
        "Constructed a Dockerized transaction intelligence platform combining React, Node.js, and Python FastAPI services for categorization, anomaly detection, fraud signals, and spending insights.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Python FastAPI",
        "scikit-learn",
        "pandas",
        "NumPy",
        "Docker"
      ],
      duration: "Recent",
      highlights: [
        "Built a 3-service platform that produced real-time risk-scored outputs across 12 financial categories",
        "Developed an inference pipeline with 6 scikit-learn models for classification, anomaly detection, fraud signal detection, and spend forecasting",
        "Combined concurrent REST APIs with containerized deployment for modular and production-style system design"
      ],
      icon: "fas fa-chart-line",
      status: "Completed",
      type: "Solo Developer"
    },
    {
      id: 2,
      title: "CareerLens Job Intelligence Platform",
      description:
        "Engineered a job intelligence platform that ingests job postings, matches them semantically, and returns ranked recommendations with low-latency retrieval.",
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "React.js",
        "TypeScript",
        "Kubernetes",
        "Python FastAPI"
      ],
      duration: "Recent",
      highlights: [
        "Built a Kafka-driven ingestion pipeline to normalize postings from 3+ sources into a unified schema",
        "Deployed a semantic matching service using pgvector similarity search, Redis caching, and FastAPI",
        "Delivered ranked job recommendations with an architecture designed for low-latency search and scalable indexing"
      ],
      icon: "fas fa-briefcase",
      status: "Completed",
      type: "Solo Developer"
    },
    {
      id: 3,
      title: "AI-Powered Q&A Chatbot",
      description:
        "Deployed a serverless chatbot with persistent conversation history using edge infrastructure and LLM-based response generation.",
      technologies: [
        "TypeScript",
        "Cloudflare Workers",
        "Llama 3.1-8B",
        "Edge Computing",
        "Serverless"
      ],
      duration: "Recent",
      highlights: [
        "Deployed a serverless architecture using Cloudflare Workers",
        "Integrated Llama 3.1-8B for natural language question answering",
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
        "Trained CNN models for image classification and evaluated architectural tradeoffs across regularization and optimization strategies.",
      technologies: [
        "PyTorch",
        "scikit-learn",
        "CNNs",
        "Deep Learning",
        "Python"
      ],
      duration: "Recent",
      highlights: [
        "Trained ShallowCNN and DeepCNN architectures for comparative evaluation",
        "Reached around 80% classification accuracy on the target dataset",
        "Tested the impact of regularization methods and optimizer choices on performance"
      ],
      icon: "fas fa-brain",
      status: "Completed",
      type: "Academic Project"
    },
    {
      id: 5,
      title: "Event & Finance Management System",
      description:
        "Designed and developed a group expense management platform with bill splitting, payment tracking, and shared financial visibility for collaborative expense handling.",
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
        "Built 12+ features including bill splitting, payment tracking, and shared expense visibility",
        "Developed a secure microservices API with JWT authentication for multi-user workflows"
      ],
      icon: "fas fa-credit-card",
      status: "In Development",
      type: "Co-Developer"
    },
    {
      id: 6,
      title: "Hospital Management System",
      description:
        "Built a healthcare management system supporting appointments, billing, records, and inventory across multiple user roles.",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "JavaScript",
        "Linux"
      ],
      duration: "Mar 2024 - Apr 2024",
      highlights: [
        "Implemented 10+ modules including appointments, patient records, billing, and inventory",
        "Added role-based access control and AES encryption across 8 database tables"
      ],
      icon: "fas fa-hospital",
      status: "Completed",
      type: "Co-Developer"
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      duration: "Expected May 2026",
      gpa: "4.00/4.00",
      details: [
        "Merit Scholarship Recipient",
        "Coursework: Data Structures and Algorithms, Systems Programming, Artificial Intelligence, Machine Learning, Natural Language Processing"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Ahmedabad, India",
      duration: "Graduated Sep 2020",
      gpa: "3.85/4.00",
      details: []
    }
  ],

  skills: {
    "Programming Languages": [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PL/SQL",
      "C++",
      "C"
    ],
    "Backend Development": [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "Kafka"
    ],
    "Frontend Development": [
      "React.js",
      "TypeScript",
      "Angular",
      "HTML",
      "CSS"
    ],
    "Cloud & DevOps": [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
      "GitHub Actions",
      "Linux",
      "Amazon Linux",
      "Datadog"
    ],
    Databases: [
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "NoSQL",
      "pgvector",
      "Database Schema Design"
    ],
    "Testing & Monitoring": [
      "JUnit",
      "PyTest",
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
      "Polaris",
      "BlackDuck"
    ],
    "Data & AI/ML": [
      "scikit-learn",
      "pandas",
      "NumPy",
      "ETL",
      "Predictive Analytics",
      "PyTorch",
      "TensorFlow",
      "CNNs",
      "LLM APIs"
    ],
    Methodologies: [
      "Agile",
      "Scrum",
      "SDLC"
    ]
  },

  achievements: [
    "Saved $18K per month through AWS cloud cost optimization across 10 enterprise applications",
    "Reduced access-related support tickets by 22% through distributed role-based access control across 10 microservices",
    "Improved application response time by 30% and reduced user incidents by 19% through Java 11 modernization and Redis caching",
    "Cut SharePoint upload time from 60 seconds to 10 seconds for 10K+ users with a multithreaded Java upload system",
    "Delivered 40+ production deployments with zero-downtime rollback capability through CI/CD automation",
    "Reduced manual reporting effort by 90% at Global Health Impact with ML-backed data pipelines",
    "Maintained a 4.00 GPA in the MS Computer Science program at Binghamton University",
    "Mentored 120+ students across database and object-oriented programming courses",
    "Built full-stack and ML-backed portfolio projects spanning finance intelligence, job matching, distributed systems, and storage engines"
  ]
};