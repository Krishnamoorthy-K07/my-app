import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Infosys,
    Java,
    Spring,
    Express,
    Postgresql,
    PicsArt,
    TodoList,
    Extension
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express",
      icon: Express,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Postgresql",
      icon: Postgresql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "System Engineer Trainee",
      company_name: "Infosys",
      icon: Infosys,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Feb 2022",
      points: [
        "3-monthes of Training in Java, MySQL, Basic Networking,Spring Framework, Spring REST, Microservices and React JS"
      ],
    },
    {
      title: "System Engineer",
      company_name: "Infosys",
      icon: Infosys,
      iconBg: "#E6DEDD",
      date: "Feb 2022 Onwards ",
      points: [
        "Designing and developing proxies that acts as mediator using Java, Groovy, and XSLT",
        "Designing and developing proxies that used to fetch data from the table using Query, Groovy, and XSLT. ",
        "Building and maintaining APIs that can be consumed by other services and systems.",
        "Working with databases like PostgreSQL, MySQL and Oracle for data storage and retrieval",
        "Troubleshooting and debugging issues in microservices as they arose.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pixel Art Generator",
      description:
        "A simple pixel art generator website is an online tool that enables users to create pixel art graphics by manually filling in a grid of square cells. It typically includes a range of color options and drawing tools to help users create their designs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: PicsArt,
      source_code_link: "https://github.com/Krishnamoorthy-K07?tab=repositories",
    },
    {
      name: "MERN Todo App",
      description:
        "A MERN Todo App is a web application built using MongoDB for data storage, Express.js for creating a server, React for the front-end, and Node.js for running the server. It allows users to add, update, and delete tasks from a TODO list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: TodoList,
      source_code_link: "https://github.com/Krishnamoorthy-K07?tab=repositories",
    },
    {
      name: "StoreTAb",
      description:
        "A browser extension  that runs within a web browser, designed to save and recall the URL of the current browser tab, allowing users to quickly revisit it later. It typically involves a simple user interface that can be accessed via a browser button, and stores the URL data.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: Extension,
      source_code_link: "https://github.com/Krishnamoorthy-K07?tab=repositories",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };