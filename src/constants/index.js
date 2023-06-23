import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    allstate,
    kainos,
    screen,
    hacked,
    carrent,
    jobit,
    tripguide,
    threejs,
    linkedin,
    springpod,
    python,
    java,
    linux,
    fedora,
    logo,
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
      id:"projects",
      title: "Projects",

    },
    // {
    //   id: "cv",
    //   title: "Download CV" ,
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Aspiring Web Developer",
      icon: web,
    },
    {
      title: "ReactJS",
      icon: backend,
    },
    {
      title: "BackEnd Devlopment",
      icon: mobile,
    },
    {
      title: "Problem Solving",
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
      name: "python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },

  ];
  
  const experiences = [
    {
      title: "Frontend Intern",
      company_name: "TechFabs",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "April 2022 - July 2022",
      points: [
        "Revamped the front end of the organization's website homepage.",
        "Overall improvement in user,experience and design improvements.",
        "Coded using HTML,CSS and JavaScript to fix bugs for the organization's website.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Hackathon",
      company_name: "HackOdisha 2.0",
      icon: logo,
      iconBg: "#383E56",
      date: "November 2022",
      points: [
        "ONLINE, 36-hour-long event that bring together technocrats from all over the country.",
        "The problem statements were stimulating enough for programmers who love solving mind-bending problems.",
        "Our Team took the environmental problem statement and created a project TrasHack - machine learning model for waste classification.",
        "Divided the work to individuals and made a great attempt on the task by the end of the day.",
      ],
    },
    {
      title: "Compitetive Coding",
      company_name: " ",
      icon: logo,
      iconBg: "#E6DEDD",
      date: " ",
      points: [
        "Solved 100+ Leetcode problems",
        "5 ⭐ in Hackerrank in C++",
        "3 ⭐ in Hackerrank in SQL",
        "Regularly trying to upscale problem solving and coding skills.",
      ],
    },
    {
      title: "Pet / Personal Projects",
      company_name: " ",
      icon: logo,
      iconBg: "#383E56",
      date: " ",
      points: [
        "Dome-Dice-Game.",
        "Drum-kit Game",
        "Kickin'It - Nike inspired Online Shoe Store",
        "TextUtils",
        "NewsMonkey",
        "iNoteBook",
        "FindYourFlix - Movie Recomendation",
        "FaceRecognition - OpenCV project",
        "TrasHack - Waste Classification Model",
        "Diesease Prediction Model for diabetes, parkinson diesease, heart diesease",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     text:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "StayFit",
      description:
        "Andrioid Application developed for leading a healthy lifestyle, includes different types of training methods with customizable routine, Progress Tracker ,Total Daily Enery Expenditure calculator for mass gain,maintainence and fat loss.",
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "FIREBASE",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Raaaaaahul/StayFit",
    },
    {
      name: "Kickin' It",
      description:
        "Nike Inspired Web-Application for an online Shoe Store with MODERN and MINIMILASTIC design",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "green-text-gradient",
        },
        {
          name: "TailWindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Raaaaaahul/Shoe-Store",
    },
    {
      name: "FindYourFlix",
      description:
        "A machine learning Project with a web user interface for movie recomendation, One can get recomendations on the movies that they have already watched",
      tags: [
        {
          name: "StreamLit",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-Learning",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Raaaaaahul/findyourflix",
    },
  ];

  export { services, technologies, experiences, projects, };