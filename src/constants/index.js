import {
  python,
  backend,
  software,
  web,
  javascript,
  django,
  reactjs,
  tailwind,
  nodejs,
  postgresql,
  git,
  docker,
  fastapi,
  dotworld,
  accenttechnosoft,
  novitech,
  crowdfunding,
  quora_project,
  blog_web,
  threejs,
  mysql,
  elonmusk,
  apj_kalam,
  sundarpichai,
  linkedin,
  github_icon,
  gmail,
  instagram,
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
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  }
  
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
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
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Dot World Technologies",
    icon: dotworld,
    link: "https://dotworld.in/",
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Demonstrated proficiency in Python, Fast API, PostgreSQL, OpenCV, and AI technologies during tenure at Dot World Software Technologies.",
      "Designed real-time image processing systems, developed efficient Fast API RESTful APIs, and optimized PostgreSQL databases for improved performance.",
      " Successfully integrated AI models for predictive analytics and automated decision-making.",
      "Demonstrated continuous learning, fostering the adoption of best development practices, positively impacting projects and team dynamics."
    ],
  },
  {
    title: " Full Stack Developer (Intern)",
    company_name: "Accent Techno Soft",
    icon: accenttechnosoft,
    link: "https://www.accenttechnosoft.com/",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Worked as a Full Stack Developer at Accent Techno Soft from January 2023 to March 2023.",
      "Utilized skills in Python, Django, HTML, CSS, and JavaScript to develop responsive user interfaces and implement backend functionalities.",
      "Worked on various projects and collaborated with a skilled team to contribute to the successful delivery of high-quality web applications.",
      "Gained practical, hands-on experience during the internship, further honing skills as a Full Stack Developer."
    ],
  },
  {
    title: "Junior Python Developer (Intern)", 
    company_name: "Novi-Tech Pvt Ltd",
    icon: novitech,
    link: "#",
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Successfully completed a 3-month internship as a Junior Python Developer at Novi-Tech Pvt Ltd.",
      "Worked on Python development projects during the internship, gaining practical, hands-on experience in the field.",
      "Leveraged the opportunity to enhance and develop skills as a Python Developer through practical applications and real-world projects.",
      "The internship at Novi-Tech Pvt Ltd provided significant learning opportunities, contributing to professional growth in the field of Python."
    ],
  }
];

const testimonials = [
  
  {
    testimonial:
      "All Birds find shelter during a rain.But Eagle avoids rain by flying above the Clouds.Problems are common, but attitude makes the difference!",
    name: "APJ Abdul Kalam",
    designation: "Former Prime Minister",
    company: "India",
    image: apj_kalam,
  },
  {
    testimonial:
      "As a leader, It is important to not just see your own success, but focus on the success of others. ",
    name: "Sundar Pichai",
    designation: "CEO",
    company: "Google Inc.",
    image: sundarpichai,
  },
  {
    testimonial:
      "I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla and SpaceX",
    image: elonmusk,
  },
];

const projects = [
  {
    name: "Crowd Funding",
    description:
      "Crowd Funding is an online platform that enables users to create and fund campaigns for their favorite projects.The project involved developing user-friendly interfaces and managing userauthentication for seamless crowdfunding operations.",
    tags: [
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/gokul1414/CrowdFunding",
  },
  {
    name: "Blog App",
    description:
      "Web application that allows users to create, read, update, and delete blog posts. It also includes features such as user authentication, comment posting, and user profile management.With user interactivity and authentication.",
    tags: [
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
      
    ],
    image: blog_web,
    source_code_link: "https://github.com/gokul1414",
  },
  {
    name: "Quzi[Quora-Inspired]",
    description:
      "Quzi simplifies knowledge exchange users register, explore questions, contribute answers fostering a dynamic community. It offers a seamless and responsive experience for both desktop and mobile users.With user interactivity and authentication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: quora_project,
    source_code_link: "https://github.com/gokul1414/Quora-Clone",
  },
];

const socialLinks = [
  {
    username: "gokul_dev",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/gokul-dev",
    image: linkedin,
  },
  {
    username: "gokul1414",
    platform: "Github",
    url: "https://github.com/gokul1414",
    image: github_icon,
  },
  {
    username: "gggokul865@gmail.com",
    platform: "Email",
    url: "mailto:gggokul865@gmail",
    image: gmail,
  },
  {
    username: "dev._gokul",
    platform: "Instagram",
    url: "https://www.instagram.com/dev._gokul/",
    image: instagram,
  }
  
];


export { services, technologies, experiences, testimonials, projects , socialLinks };
