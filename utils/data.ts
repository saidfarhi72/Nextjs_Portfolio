export const data= [
    {
      "field": "Profile",
      "name": "FARHI Said",
      "text": "FARHI Said Software Engineer Experienced software engineer skilled in full-stack development with Java, React.js, Next.js, and FastAPI. Proficient in AWS, Docker, Kubernetes, and CI/CD pipelines with a strong background in delivering innovative, scalable applications. Led the development of AI-powered job posting management and candidate tracking platform, reducing recruitment time by 40%. Spearheaded the development of a Next.js-based task management and collaboration app, boosting team productivity by 35%."
    },
    {
      "field": "Education",
      "name": "Engineer Degree (Master Level) — Software Engineering",
      "text": "Engineer Degree (Master Level) — Software Engineering INPT Morocco 2021-2024"
    },
    {
      "field": "Education",
      "name": "Preparatory Classes for Engineering Schools",
      "text": "Preparatory Classes for Engineering Schools CPGE Morocco 2019-2021"
    },
    {
      "field": "Experience",
      "name": "Software Engineer Internship at NETOPIA Morocco",
      "text": "Software Engineer Internship NETOPIA Morocco Feb 2024 - Present Engineered a Java and React.js platform for job posting management, candidate tracking, and interview scheduling, powered by AI, reducing recruitment time by 40%. Collaborated with a cross-functional team to integrate AI algorithms for resume screening, improving accuracy by 30%."
    },
    {
      "field": "Experience",
      "name": "Software Engineer Internship at DEVACTUS Morocco",
      "text": "Software Engineer Internship DEVACTUS Morocco Jun 2023 - Jul 2023 Created Sassify, a streamlined solution for SaaS application creation, boosting development speed by 40% and enhancing user experience, which led to a 30% increase in client satisfaction. Implemented RESTful APIs for backend services."
    },
    {
      "field": "Experience",
      "name": "Software Engineer Internship at FMJ Morocco",
      "text": "Software Engineer Internship FMJ Morocco Jul 2022 - Aug 2022 Implemented a comprehensive full-stack application, transforming financial operations for Ministry of Justice employees and streamlining communication with the General Treasury, resulting in a 50% increase in workflow efficiency."
    },
    {
      "field": "Project",
      "name": "Innovative Task Management and Collaboration Web App",
      "text": "Lead Developer Innovative Task Management and Collaboration Web App Spearheaded the development of a Next.js-based web application designed to revolutionize task management and team collaboration, featuring AI-enhanced project management, real-time brainstorming boards, integrated video conferencing, and a comprehensive calendar system, increasing team productivity by 35%. Conducted usability testing and gathered user feedback, resulting in a 40% improvement in user satisfaction ratings."
    },
    {
      "field": "Project",
      "name": "Agro-Food Supply Chain Management Using Blockchain and IPFS",
      "text": "Project Developer Agro-Food Supply Chain Management Using Blockchain and IPFS Conceived and built a project that combines Blockchain’s security and transparency with IPFS’s decentralized storage to enhance reliability in the agro-food supply chain, improving traceability and reducing fraud by 60%."
    },
    {
      "field": "Project",
      "name": "SaaS Chatbot Application",
      "text": "Developer SaaS Chatbot Application Designed a SaaS application using React and FastAPI that enables users to create custom chatbots for their specific needs. The platform provides intuitive tools for designing chatbot workflows and deploying agents, enhancing customer engagement and support, leading to a 25% increase in user satisfaction."
    },
    {
      "field": "Skills",
      "name": "Programming Languages",
      "text": "Programming Languages: Java, Python, JavaScript, Go"
    },
    {
      "field": "Skills",
      "name": "Frameworks & Libraries",
      "text": "Frameworks & Libraries: React.js, Next.js, Node.js, FastAPI, Django"
    },
    {
      "field": "Skills",
      "name": "Tools & Technologies",
      "text": "Tools & Technologies: Git, Docker, Kubernetes, AWS, CI/CD pipelines"
    },
    {
      "field": "Skills",
      "name": "Software Development",
      "text": "Software Development: Full-Stack Development, System Design, Infrastructure as Code"
    },
    {
      "field": "Languages",
      "name": "Arabic",
      "text": "Languages: Arabic [Native]"
    },
    {
      "field": "Languages",
      "name": "French",
      "text": "Languages: French [Fluent]"
    },
    {
      "field": "Languages",
      "name": "English",
      "text": "Languages: English [Proficient]"
    }
  ]
  

export const search = (query:any) => {
    const results = data.filter((item) =>
      item.text.toLowerCase().includes(query.toLowerCase())
    );
    return results.map((item) => ({
      ...item,
      highlightedText: highlightText(item.text, query)
    }));
  };
  
  const highlightText = (text:any, query:any) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight ">$1</span>');
  };
  