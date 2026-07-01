export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Expertise in Data Structures and Algorithms with a focus on problem solving.",
    description:
      "Active problem solver with 300+ problems solved on LeetCode & CodeChef, optimizing solutions for runtime and memory complexity.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Lucknow, U.P., open to remote and on-site opportunities.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly expanding my skillset",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building high-performance APIs and interactive modern user interfaces.",
    description: "Focused on clean code, REST architectures, and robust databases.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Certified developer showcasing proven industry knowledge.",
    description: "Click below to view credentials:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
    links: [
      {
        text: "Accenture - Data Structures and Algorithms",
        url: "https://www.linkedin.com/in/piyush-prabhakar-b722ba232",
      },
      {
        text: "Infosys - HTML/CSS & Full Stack Developer Program",
        url: "https://www.linkedin.com/in/piyush-prabhakar-b722ba232",
      },
      {
        text: "Simplilearn - Introduction to SQL",
        url: "https://www.linkedin.com/in/piyush-prabhakar-b722ba232",
      },
      {
        text: "MongoDB - Certified Developer",
        url: "https://www.linkedin.com/in/piyush-prabhakar-b722ba232",
      },
    ],
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "P-chat-app (Real-Time Messaging)",
    des: "A real-time chat application featuring 1-to-1 direct messaging, live status tracking, inline edit/delete, and Base64 file sharing over WebSockets with glassmorphic UI.",
    img: "/p-chat.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    id: 2,
    title: "News-App (Live Aggregator)",
    des: "A dynamic news application integrating News API to fetch 1000+ daily articles, with auto-updates every 10 seconds for real-time categorised delivery.",
    img: "/news-app.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  },
  {
    id: 3,
    title: "Courttitude (Sports Booking)",
    des: "A sports arena booking platform for turf and pickleball court reservations built using React, Node, Express, and MongoDB, optimizing scheduling and user booking flows.",
    img: "/courttitude.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
  },
];

export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    nameImg: "/git.svg",
    link: "https://github.com/Prabhakarpiyush",
  },
  {
    id: 2,
    name: "LinkedIn",
    img: "/link.svg",
    nameImg: "/link.svg",
    link: "https://www.linkedin.com/in/piyush-prabhakar-b722ba232",
  },
];

export const workExperienceMain = [
  {
    id: 1,
    title: "Trainee Software Associate at DevLogix",
    desc: "Developed modern web apps, built a Face Recognition Attendance System (FastAPI/MongoDB), and created Courttitude booking platform. Optimized features and integrated REST APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern at QCC",
    desc: "Built a full-stack car management system reducing manual operations by 90%. Engineered 10+ RESTful APIs with JWT, RBAC, and optimized MongoDB index queries.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Joint Secretary at Botnet Club",
    desc: "Mentored students in Web Development (HTML, CSS, JS, React) and organized technical workshops, coding bootcamps, and events to grow community engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Problem Solver & Competitive Programmer",
    desc: "Solved 300+ algorithm problems on LeetCode and CodeChef. Runner-up at College Hackathon. Practiced debugging, optimization, and advanced DSA methodologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Prabhakarpiyush",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/piyush-prabhakar-b722ba232",
  },
];
