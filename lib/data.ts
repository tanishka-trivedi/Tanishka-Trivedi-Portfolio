export const portfolioData = {
  personal: {
    name: "Tanishka Trivedi",
    roles: ["AI Engineer", "Machine Learning Enthusiast", "Open Source Contributor"],
    email: "tanishkatrivedi.20@gmail.com",
    phone: "+91 9322667507",
    github: "https://github.com/tanishka-trivedi",
    linkedin: "https://www.linkedin.com/in/tanishka-trivedi-84845a331",
    leetcode: "https://leetcode.com/u/tanishkatrivedi_/",
    resume: "/Tanishka_Trivedi__resume (26).pdf",
    tagline: "Engineering intelligence from data — one model at a time.",
  },

  education: [
    {
      institution: "Indian Institute of Technology Jodhpur",
      degree: "B.Tech in Electrical Engineering",
      period: "Jul 2024 – Present",
      score: "CGPA: 7.62/10",
    },
    {
      institution: "Shri Sushil Kumar Thirani Junior College",
      degree: "Maharashtra Board (HSC)",
      period: "Feb 2024",
      score: "91.33%",
    },
    {
      institution: "Universal High School",
      degree: "ICSE Board (SSC)",
      period: "Jun 2022",
      score: "97.3%",
    },
  ],

  experience: [
    {
      role: "Open Source Contributor",
      org: "GirlScript Summer of Code",
      period: "May 2026 – Present",
      achievements: [
        "Merged 3 pull requests across 5+ repositories, delivering code improvements and cleaner developer documentation that reduced onboarding friction.",
        "Synthesized technical feedback from 5+ maintainers, iterating on code to ensure adherence to project architectural conventions.",
      ],
    },
    {
      role: "Open Source Contributor",
      org: "Social Summer of Code",
      period: "May 2026 – Present",
      achievements: [
        "Diagnosed and resolved 4+ reported issues across 3 repositories, reducing recurring defect rates through targeted root-cause analysis.",
        "Engaged in structured code reviews and issue triage discussions, aligning contributions with each project's architectural conventions.",
      ],
    },
  ],

  projects: [
    {
      name: "PPE Compliance Monitoring System",
      description:
        "Real-time safety-compliance pipeline using YOLOv8 and OpenCV, enabling automated detection of masks and PPE from live webcam feeds with sub-second latency.",
      tech: ["YOLOv8", "Flask", "OpenCV", "Python"],
      github: "https://github.com/tanishka-trivedi/PPE-Compliance-Monitoring-System",
      demo: null,
      metrics: "93% detection accuracy · Sub-second latency",
      period: "Jun 2026",
    },
    {
      name: "USD/INR Close Price Prediction",
      description:
        "T+1 USD/INR forecasting pipeline fusing GARCH-based volatility estimates with Decision Tree regression, backtested across 20+ years of historical exchange-rate data.",
      tech: ["Decision Trees", "GARCH", "Pandas", "scikit-learn"],
      github: "https://github.com/tanishka-trivedi/INR-price-prediction",
      demo: null,
      metrics: "74.7% directional accuracy · 10+ engineered features",
      period: "Mar – May 2026",
    },
    {
      name: "News Summarizer (NLP)",
      description:
        "Hybrid summarization pipeline combining TF-IDF extractive scoring with BART abstractive generation, compressing articles by 60–70% while preserving semantic coherence.",
      tech: ["Python", "BART", "TF-IDF", "FastAPI", "Transformers"],
      github: "https://github.com/tanishka-trivedi/News-Summarizer-AI",
      demo: "https://web-production-797de.up.railway.app/",
      metrics: "60-70% compression · <2s end-to-end latency",
      period: "Jan – Mar 2026",
    },
  ],

  skills: {
    Languages: ["C++", "Python", "Java", "JavaScript", "SQL"],
    "AI / ML": ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLMs", "RAG"],
    "Frameworks & Libraries": [
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "LangChain",
      "FastAPI",
      "Flask",
      "Streamlit",
    ],
    "Tools & Platforms": ["Git", "Docker", "REST APIs", "MongoDB", "MySQL"],
    "CS Fundamentals": ["DSA", "OOP", "DBMS", "MERN Stack"],
  },

  coursework: [
    "Pattern Recognition & Machine Learning",
    "Data Structures & Algorithms",
    "Linear Algebra",
    "Probability & Statistics",
    "Stochastic Processes",
    "Foundations of Quantum Information",
  ],

  achievements: [
    {
      title: "JEE Advanced — AIR 11925",
      description:
        "Scored 99.038 percentile in JEE Main and secured AIR 11925 in JEE Advanced — placing among India's top engineering aspirants.",
      icon: "🏆",
    },
    {
      title: "1st Place — Wire Wizard, Prometeo'25",
      description:
        "Won IIT Jodhpur's electronics competition by building an AI-powered smart glove that translates sign language to text using ML and I2C communication — 95% gesture recognition accuracy.",
      icon: "🥇",
    },
    {
      title: "Assistant Head — Prometeo'26",
      description:
        "Led cross-functional planning of IIT Jodhpur's largest technical festival, coordinating multiple event teams and driving engagement for 300+ participants.",
      icon: "⚡",
    },
    {
      title: "Competitive Programming",
      description:
        "Solved 300+ DSA problems on LeetCode spanning arrays, graphs, dynamic programming, and system design.",
      icon: "💻",
    },
  ],
};

// export const portfolioData = {
//   personal: {
//     name: "Tanishka Trivedi",
//     title: "Electrical Engineering Student",
//     subtitle: "Embedded Systems · DSA · Machine Learning",
//     email: "tanishkatrivedi.20@gmail.com",
//     phone: "+91-9322667507",
//     linkedin: "https://linkedin.com/in/tanishka-trivedi",
//     github: "https://github.com/tanishkatrivedi",
//     summary:
//       "B.Tech Electrical Engineering student at IIT Jodhpur with a strong foundation in embedded systems and software development. I build things that work at the hardware-software boundary — from sensor-interfacing gloves to version-control systems. Currently diving deep into Machine Learning.",
//   },

//   education: [
//     {
//       institution: "Indian Institute of Technology, Jodhpur",
//       degree: "B.Tech in Electrical Engineering",
//       period: "2024 – Expected May 2028",
//       location: "Jodhpur, India",
//       grade: "CGPA: 7.435 / 10.0",
//       type: "current",
//       icon: "🎓",
//     },
//     {
//       institution: "Shri Sushil Kumar Thirani Junior College",
//       degree: "Higher Secondary Certificate (HSC)",
//       period: "2022 – 2024",
//       location: "Thane, India",
//       grade: "91.33%",
//       type: "hsc",
//       icon: "📚",
//     },
//     {
//       institution: "Universal High School (ICSE)",
//       degree: "Secondary School Certificate",
//       period: "Until 2022",
//       location: "Thane, India",
//       grade: "97.3%",
//       type: "icse",
//       icon: "🏫",
//     },
//   ],

//   projects: [
//     {
//       title: "Smart Glove with Gesture & Orientation Detection",
//       period: "Dec 2024 – Jan 2025",
//       description:
//         "A hand glove modified with sensors to interpret Indian Sign Language (ISL) gestures — bridging communication for specially-abled individuals in real time.",
//       longDescription:
//         "Implemented real-time data collection and analysis routines using the I2C Communication Protocol to interface with orientation and flex sensors. Designed and programmed the embedded system in C/C++ to process sensor inputs, ensuring accurate and low-latency gesture detection.",
//       tech: ["Embedded C/C++", "I2C Protocol", "Microcontrollers", "Arduino", "Sensor Interfacing", "Hardware Design"],
//       highlights: [
//         "Real-time ISL gesture recognition",
//         "I2C sensor interfacing",
//         "Low-latency embedded processing",
//         "Custom circuit design",
//       ],
//       github: "https://github.com/tanishkatrivedi",
//       color: "green",
//       icon: "🖐️",
//     },
//     {
//       title: "Versioned Notepad",
//       period: "Oct 2025 – Nov 2025",
//       description:
//         "A lightweight version-control system for text files — think Git for notepad files. Focuses on efficient diff-based storage and full rollback capability.",
//       longDescription:
//         "Utilized diff-based storage techniques to minimize disk space consumption and optimized the core mechanism using DSA principles. Developed a command-line interface (CLI) and an interactive Windows menu for easy version tracking, rollback, and management.",
//       tech: ["C++", "Data Structures", "Algorithms", "CLI", "Windows Menu", "Software Design"],
//       highlights: [
//         "Diff-based storage for space efficiency",
//         "DSA-optimized core engine",
//         "Full CLI interface",
//         "Version rollback & management",
//       ],
//       github: "https://github.com/tanishkatrivedi",
//       color: "teal",
//       icon: "📝",
//     },
//   ],

//   skills: {
//     "Programming Languages": {
//       items: ["Java", "C++", "C", "Embedded C/C++"],
//       color: "green",
//     },
//     "Hardware & Embedded": {
//       items: ["Arduino", "Microcontrollers", "Sensor Interfacing", "I2C Communication", "Circuit Design"],
//       color: "teal",
//     },
//     "Core CS Concepts": {
//       items: ["Data Structures & Algorithms", "Pattern Recognition", "Version Control", "CLI Development"],
//       color: "purple",
//     },
//     "Tools & Others": {
//       items: ["MS Office", "Windows Menu Dev", "Git", "CLI Tools"],
//       color: "amber",
//     },
//   },

//   achievements: [
//     {
//       title: "Wire Wizard — 1st Place",
//       subtitle: "Prometeo, IIT Jodhpur Annual Tech Fest",
//       description: "Secured 1st position in the Arduino hardware event at IIT Jodhpur's annual technical festival.",
//       icon: "🏆",
//       color: "amber",
//       type: "competition",
//     },
//     {
//       title: "JEE Mains: 99.038 Percentile",
//       subtitle: "Joint Entrance Examination — Mains",
//       description: "Ranked in the top 1% of ~1.2 million candidates appearing for JEE Mains.",
//       icon: "⚡",
//       color: "green",
//       type: "exam",
//     },
//     {
//       title: "JEE Advanced Rank: 11925",
//       subtitle: "Joint Entrance Examination — Advanced",
//       description: "Qualified JEE Advanced — the gateway to IITs — one of India's most competitive exams.",
//       icon: "🎯",
//       color: "teal",
//       type: "exam",
//     },
//     {
//       title: "2nd in HSC Board — College",
//       subtitle: "SSKT Junior College, Thane",
//       description: "Secured 2nd position in HSC Board Examination across the college with 91.33%.",
//       icon: "🥈",
//       color: "purple",
//       type: "academic",
//     },
//     {
//       title: "Perfect Score in Chemistry & Biology",
//       subtitle: "ICSE Board Examination — Class X",
//       description: "Achieved 100/100 marks in both Chemistry and Biology in the ICSE Board Exam (97.3% overall).",
//       icon: "💯",
//       color: "amber",
//       type: "academic",
//     },
//   ],

//   coursework: {
//     completed: [
//       "Data Structures and Algorithms",
//       "Pattern Recognition and Machine Learning",
//       "Hardware Circuit Design",
//       "Embedded Systems Programming",
//       "I2C & Sensor Protocols",
//     ],
//     learning: [
//       "Machine Learning (in progress)",
//       "Deep Learning Fundamentals",
//       "Signal Processing",
//       "VLSI Design",
//     ],
//   },
// };
