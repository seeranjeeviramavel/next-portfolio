import { Icons } from "@/components/icons";
import { HomeIcon, Icon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Seeranjeevi Ramavel L",
  initials: "L",
  url: "https://media.licdn.com/dms/image/v2/D5603AQG2vDW_iUhMwg/profile-displayphoto-shrink_200_200/B56ZP_B9dfGQAc-/0/1735150525505?e=1744848000&v=beta&t=5d-qotxz8loAww8gAQDqr961ZbQvPrVw-fRjB6S1At8",
  location: "Tirunelveli, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Tirunelveli",
  description:
    "Web Developer. I love crafting seamless digital experiences and solving real-world problems. Passionate about building, sharing, and growing. Very active on LinkedIn.",
  summary:
    "I'm an experienced Web Developer specializing in building responsive, high-performance applications with React.js, Next.js, and Redux. I have expertise in backend integration using Node.js, Express.js, and MongoDB, along with RESTful API development. Currently, I'm expanding my skills in Java Spring Boot and Angular to broaden my technical expertise.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQG2vDW_iUhMwg/profile-displayphoto-shrink_200_200/B56ZP_B9dfGQAc-/0/1735150525505?e=1744848000&v=beta&t=5d-qotxz8loAww8gAQDqr961ZbQvPrVw-fRjB6S1At8",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Drizzle ORM",
    "Docker",
    "Java",
    "Spring Boot",
    "Angular",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "seeranjeeviramavel@gmail.com",
    tel: "+91 8248657251",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/seeranjeeviramavel",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/seeranjeeviramavel",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:seeranjeeviramavel@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Vivant360 Software Services",
      href: "https://www.vivant360.com/",
      badges: ["Star Performer"],
      location: "Tirunelveli, Tamil Nadu",
      title: "Software Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQGgwwOcpg4iew/company-logo_200_200/company-logo_200_200/0/1630610037076/vivant360_logo?e=1747267200&v=beta&t=jXhwHhDbYQcmeAjalmOZoQpEUcfW6iZabrnRO8Vgj3c",
      start: "June 2023",
      end: "Present",
      description:
        "Developed and maintained scalable web applications using React.js, Redux, and Tailwind CSS. Integrated REST APIs and optimized performance, improving load times by 30%.",
    },
  ],
  education: [
    {
      school: "Alagappa University",
      href: "http://alagappauniversity.ac.in/",
      degree: "Master of Business Administration",
      logoUrl: "http://alagappauniversity.ac.in/img/core-img/logo2.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "St. Xaviers College (Autonomous), Palayamkottai",
      href: "http://stxavierstn.edu.in/",
      degree: "Bachelor of Computer Science (CGPA: 8.5)",
      logoUrl:
        "http://upload.wikimedia.org/wikipedia/en/2/21/XavierPalayam.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "No Code Platform",
      href: "#",
      dates: "2023 - Present",
      active: true,
      image: "/Vzee.png",
      description:
        "Designed and developed a robust dynamic rendering system for a hybrid CRM application. Implemented caching mechanisms that resulted in a 30% reduction in loading times. Integrated drag-and-drop features to simplify user interface customization, making it more accessible for non-technical users. Enhanced overall performance and scalability to support growing business needs.",
      technologies: [
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      links: [],
    },



    {
      title: "FormEasePro",
      href: "https://formeasepro.vercel.app/",
      dates: "2024 - Present",
      image: "/FormEasePro.png",
      active: true,
      description:
        "FormEasePro is an intuitive, JSON Schema-driven form builder and renderer that lets users easily create and customize forms with a drag-and-drop interface. Powered by React, Shadcn UI, and Tailwind CSS, it automatically generates the form schema as you design, making it simple to build and deploy dynamic forms quickly.",
      technologies: ["React", "Shadcn UI", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://formeasepro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/formeasepro",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Get Signature",
      href: "https://getsignature.vercel.app/",
      dates: "2024 - Present",
      image: "/GetSignature.png",
      active: true,
      description:
        "A wizard-based HTML email signature generator that allows users to create custom signatures for various email clients, including Gmail, Outlook, Yahoo, and Thunderbird.",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "Lucide React",
        "React Icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://getsignature.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/getsignature",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Mock Minds",
      href: "https://mockminds-demo.vercel.app/",
      dates: "2023 - Present",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQFQqOaM6PRWlg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729947207854?e=1740081600&v=beta&t=gR6d5Rc6_AwUTqKYlGGbVTYNfOJh8383IbhNByJGr5w",
      active: true,
  
      description:
        "Designed and implemented an AI-powered mock interview platform offering personalized interview questions and real-time feedback. Integrated secure user authentication, speech recognition, and webcam features for immersive user experiences. The platform enables users to practice interviews in various domains and receive actionable insights for improvement.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://mockminds-demo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/mockminds",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Career Compass",
      href: "https://career-compass-demo.web.app",
      dates: "2023 - Present",
      active: true,
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQH1C3nazjoInQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726681191356?e=1740250800&v=beta&t=NvZKTGI5Ov1chFBqSLTd7eAhje18gzDF44lsI3qHXjc",
      description:
        "Built a comprehensive job-seeking platform using the MERN stack. Enabled job applicants to apply and track their applications, while recruiters manage postings via a dashboard. Integrated JWT tokens and Google OAuth for secure authentication. Optimized UI/UX for seamless navigation and efficiency.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://career-compass-demo.web.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/careercompass",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Ecommerce Website",
      href: "https://suvarotti.com/",
      dates: "2023 - Present",
      active: true,
      image:"/Suvarotti.png",
      description:
        "Developed the platform with a mobile-first design, ensuring seamless usability across all devices. Implemented lazy loading and caching mechanisms to significantly enhance performance and reduce page load times. Optimized image handling for better visual quality and faster rendering. Upgraded the admin panel with an intuitive and user-friendly interface, empowering administrators with efficient control over products and categories.",
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://suvarotti.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://wingskart.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "React SQL Query Editor",
      href: "https://react-sql-query-editor.netlify.app/",
      dates: "2023 - Present",
      active: true,
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQELONyRWfWffA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720464002712?e=1740250800&v=beta&t=C8GkQDE0i0mOSzI7i5B1hm-Li0C7rVsUZOoplv8133g",
      description:
        "Created an advanced SQL query editor with support for query history, table selection, and interactive data result displays using Ag Grid. Integrated features to export data as CSV or JSON files, providing convenience for developers. Designed the application with user-friendly layouts and a focus on high performance.",
      technologies: ["React.js", "Next.js", "PostgreSQL", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://react-sql-query-editor.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/react-sql-query-editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
    },
    {
      title: "CryptoKing",
      href: "https://cryptoking-demo.netlify.app/",
      dates: "2024 - Present",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQHFMiKe5QOIQw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719152549124?e=1740250800&v=beta&t=0ShUR5_kDDL6swmDAYF7lJAtwLph3mYzHFs3T7TaQy4",
      active: true,
      description:
        "This project is a Crypto Currency Marketplace application built with React and Vite. It allows users to check live cryptocurrency data and view historical trends through a line chart. This application demonstrates proficiency in React by implementing advanced features such as dynamic routing, lazy loading of data on scroll, and integration with the CoinGecko API for live data and market details.",
      technologies: [
        "React",
        "Context API",
        "Tailwind CSS",
        "Axios",
        "AG Grid",
        "react-google-charts",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://cryptoking-demo.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/cryptoking",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "EduPlay",
      href: "https://github.com/seeranjeeviramavel/eduplay",
      dates: "2024 - Present",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQF4MBWvJrwaqw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719153051411?e=1740250800&v=beta&t=F76Yx_nyphx9XeyErea90OtrN_FXt4a_KraIcFH1LWU",
      active: true,
      description:
        "This project is a collection of diverse and engaging applications designed to test and improve various skills and knowledge areas. 'Quiz Planet' enables users to check their general knowledge skills, while the 'Dictionary' app fetches synonyms and pronunciations from the Google API. 'Typing Test' allows users to test and enhance their typing speed within a limited time and view the scores. 'Number Facts' provides interesting facts about any number, and 'Word Play' is a puzzle game aimed at improving word-building skills. Together, these applications offer a fun and educational experience for users of all ages.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://eduplay-demo.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/seeranjeeviramavel/eduplay",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
