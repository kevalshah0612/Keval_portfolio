export const portfolioData = {
  personal: {
    name: "Keval Shah",
    headline: "Software Engineer for Backend, Full-Stack and AI-Assisted Systems",
    subheadline:
      "Java, Python, Spring Boot, React, TypeScript, AWS, RAG, LLM Evaluation, AI-Assisted Tools",
    summary:
      "Welcome to my portfolio. I build backend services, full-stack applications, AI-assisted developer tools, and AI/ML workflows with Java, Python, Spring Boot, React, TypeScript, AWS, RAG, and LLM evaluation. I am seeking full-time software engineering opportunities across the United States.",
    voiceIntro:
      "Welcome. I am Keval Shah, a software engineer with more than three years of production experience, currently completing my master's in computer science with an AI specialization. I am based in New York, New York, and looking for full-time software engineering, backend, full-stack, and AI machine learning opportunities across the United States.",
    location: "New York, NY",
    email: "keval.shah61298@gmail.com",
    linkedin: "https://www.linkedin.com/in/keval-shah0612/",
    github: "https://github.com/kevalshah0612",
    portfolio: "https://keval-portfolio.vercel.app/",
    resumes: [
      {
        label: "Backend Software Engineer Resume",
        href: "/resumes/Keval_Shah_Backend_Software_Engineer.pdf",
        focus: "Java, Spring Boot, AWS, REST APIs, CI/CD, reliability"
      },
      {
        label: "AI/ML Software Engineer Resume",
        href: "/resumes/Keval_Shah_AI_ML_Software_Engineer.pdf",
        focus: "Python, ML pipelines, RAG, LLM evaluation, pgvector, FastAPI"
      }
    ]
  },

  heroStats: [
    { value: "3+", label: "Years production engineering" },
    { value: "10,000+", label: "Users restored in auth recovery" },
    { value: "40+", label: "Production releases supported" },
    { value: "10M+", label: "Analytics records processed" }
  ],

  proofPillars: [
    {
      title: "Backend Engineering",
      signal: "Java, Spring Boot, REST APIs, OAuth 2.0, RBAC",
      detail:
        "Owned API, access-control, concurrency, debugging, and release workflows across enterprise systems.",
      icon: "fa-server"
    },
    {
      title: "Full-Stack Systems",
      signal: "React, TypeScript, REST APIs, PostgreSQL, MongoDB",
      detail:
        "Connected frontend workflows, API layers, data models, dashboards, and product automation into usable applications.",
      icon: "fa-code"
    },
    {
      title: "AI/ML Systems",
      signal: "Python, scikit-learn, RAG, embeddings, pgvector",
      detail:
        "Built ML-supported data workflows, retrieval systems, transaction intelligence, and grounded document intelligence.",
      icon: "fa-brain"
    },
    {
      title: "AI-Assisted Tools",
      signal: "LangGraph, DeepEval, OpenAI API, Anthropic API",
      detail:
        "Created workflow automation for resumes, job applications, code review, and LLM evaluation quality gates.",
      icon: "fa-diagram-project"
    }
  ],

  systemsMap: [
    {
      label: "Production Foundation",
      title: "TCS backend and platform reliability",
      proof:
        "Java services, Spring Boot APIs, RBAC, OAuth recovery, multithreaded uploads, CI/CD, Datadog and CloudWatch",
      accent: "mint"
    },
    {
      label: "Full-Stack Analytics",
      title: "Applied analytics and ML workflows",
      proof:
        "Python pipelines, REST APIs, PostgreSQL, MongoDB, React dashboards, structured data preparation, and ML-supported analytics",
      accent: "amber"
    },
    {
      label: "Project Depth",
      title: "AI tools, RAG, evaluation and job intelligence",
      proof:
        "JobPulse, FraudSift, Resume Agent, JobFill AI Extension, ReviewBot, EvalTrace and FilingQuery",
      accent: "cyan"
    }
  ],

  experience: [
    {
      role: "Software Engineer II | Backend Systems and Platform Reliability",
      company: "Tata Consultancy Services",
      location: "Approved academic leave while completing MS CS",
      dates: "Oct 2022 - Present",
      activeDelivery: "Active software engineering delivery through Dec 2024",
      tags: ["Java", "Spring Boot", "AWS", "OAuth 2.0", "RBAC", "CI/CD"],
      bullets: [
        "Owned a multithreaded Java upload workflow for large 3D file transfers, reducing SharePoint transfer time from 60 seconds to 10 seconds",
        "Resolved a live Microsoft SharePoint authentication failure by coordinating with Microsoft engineers and shipping a custom OAuth 2.0 access flow within 48 hours",
        "Led RBAC and access-control improvements across 10 internal applications, reducing access-request support tickets by 22%",
        "Standardized Python, AWS, Docker, Kubernetes, and Linux maintenance workflows across 10+ applications to reduce recurring operational overhead",
        "Drove code reviews, release planning, production debugging, stakeholder updates, and delivery coordination across a 9-developer engineering team."
      ]
    },
    {
      role: "Software Engineering Intern | AI/ML Systems and Predictive Analytics",
      company: "Applied Analytics Initiative",
      location: "New York, NY",
      dates: "Jun 2025 - Aug 2025",
      tags: ["Python", "REST APIs", "PostgreSQL", "MongoDB", "React", "scikit-learn"],
      bullets: [
        "Architected Python and REST API workflows for multi-country analytics, reducing reporting turnaround from hours to 30 seconds",
        "Operationalized data pipelines processing 10M+ weekly records into PostgreSQL and MongoDB for filtered analysis by category, geography, and year",
        "Modeled ML-supported analytics workflows with Python, scikit-learn, structured data preparation, and API-ready datasets for exploration",
        "Integrated React dashboard workflows for 6 teams, replacing spreadsheet-heavy review with interactive filters, graph views, and map-based analysis."
      ]
    },
    {
      role: "Software Engineer | Backend APIs and Release Infrastructure",
      company: "Tata Consultancy Services",
      location: "Backend APIs, release infrastructure and distributed systems",
      dates: "Mar 2021 - Sep 2022",
      tags: ["Java 11", "Redis", "REST APIs", "GitLab CI/CD", "Jenkins", "OpenShift"],
      bullets: [
        "Recovered a dependency-broken Java 11 application within 2 months by refactoring backend flows, restoring system communication, and introducing Redis caching",
        "Designed REST API contracts across 3 Java and Spring Boot applications, supporting consistent data exchange across relational and NoSQL-backed systems",
        "Released GitLab CI/CD and Jenkins workflows across 7+ applications, supporting 40+ zero-downtime production deployments",
        "Guided junior developers through code reviews, debugging paths, release checklists, and backend handoffs across production application work."
      ]
    },
    {
      role: "Teaching Assistant | Database Systems, OOP and Code Review",
      company: "Binghamton University",
      location: "Binghamton, NY",
      dates: "Aug 2025 - Present",
      tags: ["Java", "C++", "SQL", "OOP", "Database Systems", "Code Review"],
      bullets: [
        "Reviewed Java, C++, SQL, OOP, and database-systems submissions for 120+ students with focus on correctness, maintainability, and implementation quality",
        "Coached students through Java, C++, SQL, OOP, and concurrency debugging sessions while emphasizing edge cases, readability, and maintainable implementation choices."
      ]
    }
  ],

  projects: [
    {
      name: "JobPulse",
      category: "AI Job Intelligence Platform",
      github: "https://github.com/kevalshah0612/jobpulse",
      summary:
        "Full-stack job intelligence platform that ingests roles, normalizes job data, extracts skills, and ranks opportunities through embedding-based semantic search.",
      evidence:
        "Impact: turns scattered job data into searchable, ranked opportunities using semantic matching and cached retrieval.",
      architecture:
        "Architecture: ingestion workers, PostgreSQL, pgvector search, Redis caching, API services, and React workflows.",
      metrics: ["10,000+ job postings", "semantic match", "pgvector search"],
      tech: [
        "LLM Skill Extraction",
        "OpenAI Embeddings",
        "pgvector",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "React",
        "TypeScript",
        "Node.js"
      ]
    },
    {
      name: "FraudSift",
      category: "ML Transaction Intelligence",
      github: "https://github.com/kevalshah0612/fraudsift",
      summary:
        "Machine learning transaction-risk system that classifies spending, detects anomalies, flags fraud signals, scores merchant risk, and returns spending insights.",
      evidence:
        "Impact: converts transaction history into risk signals, category drift, anomaly scores, and merchant-level spending insights.",
      architecture:
        "Architecture: FastAPI services, feature engineering, classification, anomaly detection, risk scoring, and React views.",
      metrics: ["22,000+ transactions", "12 categories", "risk scoring"],
      tech: [
        "Machine Learning",
        "IsolationForest",
        "TF-IDF",
        "Classification",
        "scikit-learn",
        "FastAPI",
        "pandas",
        "NumPy",
        "Docker"
      ]
    },
    {
      name: "Resume Agent",
      category: "Agentic Resume Automation Workflow",
      github: "https://github.com/kevalshah0612/resume-agent",
      summary:
        "Agentic resume workflow that converts job descriptions into evidence-grounded resume data, review output, DOCX/PDF files, and application answers.",
      evidence:
        "Impact: reduces repetitive resume tailoring by generating structured, reviewable, evidence-grounded application materials.",
      architecture:
        "Architecture: model calls, structured outputs, validation, DOCX/PDF generation, workflow archives, and desktop controls.",
      metrics: ["schema validation", "DOCX/PDF automation", "concurrent workflows"],
      tech: [
        "Anthropic API",
        "NVIDIA Endpoint",
        "Structured Outputs",
        "Evidence Grounding",
        "Python",
        "Tkinter",
        "python-docx"
      ]
    },
    {
      name: "JobFill AI Extension",
      category: "AI Application Autofill Extension",
      github: "https://github.com/kevalshah0612/jobfill-ai-extension",
      summary:
        "Browser-based application assistant that accelerates job applications through profile memory, resume parsing, field detection, autofill, and custom answer drafting.",
      evidence:
        "Impact: speeds up repetitive application forms while keeping candidate profile and resume data local-first.",
      architecture:
        "Architecture: Manifest V3 extension, page scanning, field detection, local profile memory, and optional Claude drafting.",
      metrics: ["Manifest V3", "local profile memory", "form automation"],
      tech: [
        "Chrome Manifest V3",
        "Browser Automation",
        "Resume Parsing",
        "Local Storage",
        "Anthropic Claude",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    {
      name: "ReviewBot",
      category: "Agentic Code Review System",
      github: "https://github.com/kevalshah0612/reviewbot",
      summary:
        "Agentic pull-request review system that reviews code changes across architecture, security, style, maintainability, and test coverage before posting GitHub feedback.",
      evidence:
        "Impact: turns pull-request review into a structured workflow for architecture, security, style, maintainability, and test coverage.",
      architecture:
        "Architecture: GitHub webhooks, diff retrieval, LangGraph agents, Redis memory, static analysis, and GitHub comments.",
      metrics: ["PR review automation", "Redis memory", "GitHub Actions"],
      tech: [
        "LangGraph",
        "Multi-Agent Systems",
        "OpenAI API",
        "GitHub API",
        "GitHub Actions",
        "Redis",
        "FastAPI",
        "Docker",
        "Bandit"
      ]
    },
    {
      name: "EvalTrace",
      category: "LLM Evaluation Harness",
      github: "https://github.com/kevalshah0612/evaltrace",
      summary:
        "LLM evaluation workflow that turns RAG quality into measurable CI checks for answer relevance, faithfulness, contextual recall, and hallucination risk.",
      evidence:
        "Impact: makes RAG quality measurable through faithfulness, recall, relevance, and hallucination checks before release.",
      architecture:
        "Architecture: DeepEval tests, benchmark datasets, pytest, CI thresholds, trace review, and regression tracking.",
      metrics: ["23% to 4% hallucination reduction", "CI thresholds", "RAG quality gates"],
      tech: [
        "DeepEval",
        "RAG Evaluation",
        "Faithfulness",
        "Contextual Recall",
        "Hallucination Detection",
        "pytest",
        "GitHub Actions"
      ]
    },
    {
      name: "FilingQuery",
      category: "RAG Document Intelligence System",
      github: "https://github.com/kevalshah0612/filingquery",
      summary:
        "Financial document intelligence system that answers natural-language questions over SEC filings using hybrid retrieval, vector search, reranking, and citations.",
      evidence:
        "Impact: answers filing questions with grounded responses instead of unsupported model output.",
      architecture:
        "Architecture: SEC ingestion, metadata-aware chunking, BM25, pgvector, reranking, FastAPI, and citations.",
      metrics: ["5,000+ SEC filings", "hybrid retrieval", "citation-grounded answers"],
      tech: [
        "RAG",
        "BM25",
        "pgvector",
        "Embeddings",
        "Reranking",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "OpenAI API"
      ]
    }
  ],

  skills: [
    {
      group: "Backend Systems",
      items: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Distributed Systems",
        "Redis",
        "API Design",
        "System Design"
      ]
    },
    {
      group: "AI/ML and RAG",
      items: [
        "Python",
        "Machine Learning",
        "scikit-learn",
        "RAG",
        "Embeddings",
        "Vector Search",
        "LLM Evaluation",
        "DeepEval"
      ]
    },
    {
      group: "Cloud and DevOps",
      items: [
        "AWS",
        "Docker",
        "Kubernetes",
        "OpenShift",
        "Linux",
        "GitLab CI/CD",
        "GitHub Actions",
        "Jenkins"
      ]
    },
    {
      group: "Data Systems",
      items: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "NoSQL",
        "pgvector",
        "Data Modeling",
        "Data Pipelines",
        "SQL"
      ]
    },
    {
      group: "Frontend and Product",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Chrome Extensions",
        "Dashboards",
        "HTML",
        "CSS",
        "Workflow Automation"
      ]
    },
    {
      group: "Security and Reliability",
      items: [
        "OAuth 2.0",
        "JWT",
        "RBAC",
        "Spring Security",
        "Datadog",
        "CloudWatch",
        "Production Debugging",
        "Code Review"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Science, Computer Science, AI Specialization",
      school: "Binghamton University, State University of New York",
      location: "Binghamton, NY",
      dates: "Jan 2025 - May 2026",
      detail: "GPA: 4.00"
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      school: "Gujarat Technological University",
      location: "Ahmedabad, India",
      dates: "Graduated Sep 2020",
      detail: "GPA: 3.85"
    }
  ],

  contactFocus: [
    "Software Engineer",
    "Full Stack Software Engineer",
    "Backend Software Engineer",
    "AI/ML Software Engineer",
    "AI-Assisted Tool Developer",
    "Platform Engineer"
  ]
};
