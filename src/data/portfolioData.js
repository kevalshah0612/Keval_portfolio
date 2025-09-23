export const portfolioData = {
  personal: {
    name: "Keval Shah",
    title: "Full-Stack Software Developer",
    email: "kshah24@binghamton.edu",
    phone: "(607) 235-1181",
    location: "New York, NY",
    linkedin: "https://www.linkedin.com/in/keval-shah0612/",
    github: "https://github.com/kevalshah0612",
    summary: "Software Developer with 3.8+ years of experience at TCS, specializing in Java, Python, Spring Boot, and AWS. Currently pursuing MS in Computer Science at SUNY Binghamton with 4.0 GPA.",
    seeking: "Summer 2026 internships and full-time SDE roles"
  },

  // Add the missing coreSkills array
  coreSkills: [
    { name: "Full-Stack Development", level: 95 },
    { name: "Java & Spring Boot", level: 93 },
    { name: "Python & Django", level: 88 },
    { name: "React & Angular", level: 90 },
    { name: "AWS & Cloud Services", level: 87 },
    { name: "Database Design & Optimization", level: 91 }
  ],

  experience: [
    {
      id: 1,
      title: "Teaching Assistant - Database Systems (CS 432/532)",
      company: "State University of New York at Binghamton",
      location: "Binghamton, NY",
      duration: "Aug 2025 - Present",
      description: [
        "Redesigned database curriculum with faculty and created comprehensive course materials, improving student learning outcomes by 25%",
        "Conducted weekly sessions explaining complex database concepts (normalization, indexing, query optimization) to 50+ graduate students",
        "Graded assignments and projects using detailed rubrics, providing constructive feedback to enhance student understanding"
      ],
      current: true
    },
    {
      id: 2,
      title: "System Engineer",
      company: "Tata Consultancy Services",
      location: "India",
      duration: "Oct 2022 - Dec 2024",
      description: [
        "Led full-stack development and technology stack upgrades for 10+ enterprise applications serving millions of users",
        "Implemented multithreading architecture for file upload processes, resulting in 90% faster processing time and $1.2M annual cost savings",
        "Optimized data processing systems handling 10+ million records per batch using advanced algorithms and SharePoint API integration",
        "Managed complete project lifecycle and stakeholder communication through weekly client meetings",
        "Led end-to-end delivery of 40+ production releases on schedule with comprehensive documentation and CI/CD implementation"
      ],
      current: false
    },
    {
      id: 3,
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      location: "India", 
      duration: "Mar 2021 - Sep 2022",
      description: [
        "Enhanced security infrastructure across 10+ projects by integrating SSL and SAST tools, strengthening security measures by 80%",
        "Established CI/CD pipelines for 10+ projects with automated deployment processes and AWS infrastructure management",
        "Collaborated with cross-functional teams and managed server migrations from CentOS to AL2/AL3",
        "Developed custom SharePoint authentication solutions for legacy system modernization",
        "Received 5+ Star of the Month awards for exceptional project delivery and client satisfaction"
      ],
      current: false
    },
    {
      id: 4,
      title: "Technical Mentor & Presenter",
      company: "Tata Consultancy Services",
      location: "India",
      duration: "Sep 2024 - Nov 2024",
      description: [
        "Led technology learning sessions for 300+ junior developers and conducted T-Factor training achieving 4.39 score",
        "Mentored junior developers during full-stack training, providing MERN stack guidance and securing first rank certification",
        "Organized and presented at TCS hackathons, consistently ranking among top 3 contenders",
        "Developed training materials and guided colleagues through mini-projects to enhance team knowledge sharing"
      ],
      current: false,
      isLeadership: true
    }
  ],

  projects: [
    {
      id: 1,
      title: "Event & Finance Management System",
      description: "Developed comprehensive group expense platform with 12+ features including intelligent bill splitting, real-time payment tracking, and shared financial visibility for seamless expense management among groups.",
      technologies: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "Spring Security", "JWT", "REST APIs"],
      duration: "Jun 2025 - Present",
      highlights: [
        "Built scalable microservices API with JWT authentication supporting 1000+ concurrent users",
        "Handles 1000+ concurrent transactions efficiently with 99.9% uptime",
        "Implemented secure user data access with role-based permissions and encryption",
        "Integrated real-time notifications and payment processing capabilities"
      ],
      icon: "fas fa-credit-card",
      status: "In Development",
      type: "Co-Developer"
    },
    {
      id: 2,
      title: "Hospital Management System", 
      description: "Built comprehensive healthcare management system with 10+ modules including appointment scheduling, patient records management, billing system, and inventory tracking for streamlined hospital operations.",
      technologies: ["Python", "Django", "JavaScript", "GitHub Actions", "Slack API", "MySQL", "Bootstrap"],
      duration: "Mar 2024 - Apr 2024",
      highlights: [
        "Implemented Role-Based Access Control (RBAC) system ensuring data security and privacy compliance",
        "AES encryption implementation across 8 database tables protecting sensitive patient information",
        "Support for 3 user roles (patient, doctor, admin) with customized dashboards and functionalities",
        "Automated appointment scheduling with SMS/email notifications and billing integration"
      ],
      icon: "fas fa-hospital",
      status: "Completed",
      type: "Co-Developer"
    },
    {
      id: 3,
      title: "Smart Irrigation IoT System",
      description: "Developed IoT backend system processing real-time data from 20+ field sensors with automated irrigation algorithms for precision agriculture, optimizing water usage and crop yield.",
      technologies: ["Spring Boot", "Angular", "MySQL", "Spring Security", "JWT", "TypeScript", "Bootstrap", "Arduino"],
      duration: "Jun 2023 - Jul 2024",
      highlights: [
        "Reduced water consumption by 35% through smart irrigation algorithms and predictive analytics",
        "Improved crop yield by 20% with precision irrigation based on soil moisture and weather data", 
        "Arduino sensors integration with RESTful APIs for real-time data collection and processing",
        "Implemented weather API integration for intelligent irrigation scheduling and mobile application interface"
      ],
      icon: "fas fa-seedling",
      status: "Completed",
      type: "Full-Stack Capstone Project, Independent Project"
    }
  ],

  skills: {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C#", "Android", "SQL"],
    "Web Technologies": ["HTML5", "CSS3", "React.js", "Angular", "Bootstrap", "jQuery", "Web Applications", "Web Services", "RESTful APIs"],
    "Backend Technologies": ["Spring Boot", "Node.js", "Spring MVC", "Django", "Flask", "Express.js"],
    "Frameworks & Libraries": ["Spring Security", "JWT", "Hibernate", "Pandas", "NumPy", "TensorFlow", "Redux"],
    "Databases": ["Oracle", "SQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization"],
    "Cloud & DevOps": ["AWS (EC2, S3, RDS)", "Docker", "Jenkins", "CI/CD Pipelines", "Git", "GitHub Actions"],
    "Development Methodologies": ["Agile Development", "Full-Stack Development", "Microservices Architecture", "System Design"],
    "Tools & Technologies": ["SharePoint API", "Slack API", "SSL Integration", "SAST Tools", "Load Balancers"]
  },

  achievements: [
    "5+ Star of the Month awards at TCS for exceptional project delivery and client satisfaction",
    "Ranked 1st in TCS full-stack development certification program out of 200+ participants", 
    "Led cross-functional teams on 10+ enterprise-scale projects with multi-million dollar budgets",
    "Achieved 90% performance improvements through system optimization and architectural redesign",
    "Perfect 4.0 GPA in Master's program at SUNY Binghamton while serving as Teaching Assistant",
    "T-Factor training achievement with 4.39 score demonstrating technical capability and learning agility",
    "Consistently ranked among top 3 contenders in TCS hackathons",
    "Led technology learning sessions for 300+ junior developers at TCS",
    "Managed end-to-end delivery of 40+ production releases on schedule",
    "Processed 10+ million records efficiently, saving $1.2M annually in operational costs"
  ]
};
