import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  docker,
  express,
  kubernetes,
  zod,
  jest,
  check24,
  betterlink,
  aurora,
  ballerina,
  baum,
  boats,
  brainleftandright,
  couple,
  cutie,
  dancer,
  france,
  lettertolovedone,
  maki,
  mountDoom,
  muse,
  nightcity,
  tulips,
  wal,
  water,
  logo,
  shop,
  robot,
  website,
  natours,
  winter,
  sql_website,
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
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Jest",
    icon: jest,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ZOD",
    icon: zod,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Check24 Kfz-Versicherungen GmbH",
    icon: check24,
    iconBg: "#383E56",
    date: "Dec 2020 - present",
    points: [
      "Developing and maintaining web applications using React.js and React related tech on the Frontend, Node.js on the Backend",
      ,
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Betterlink GmbH",
    icon: betterlink,
    iconBg: "#E6DEDD",
    date: "Oct 2020",
    points: ["Job Offer accepted", "Cancelled because of funding issues"],
  },
  {
    title: "Independent Programming",
    company_name: "Independent",
    icon: logo,
    iconBg: "#383E56",
    date: "Dec 2019 - present",
    points: [
      "solving katas",
      "learning new technologies through building apps",
      "extending my knowledge with the help of different platforms like Udemy",
      "learning about clean code and architecture with the help of Uncle Bob",
    ],
  },
];

const projects = [
  {
    name: "AI SQL Query generator",
    description:
      "This is a small full-stack application, which uses the OpenAI API for translating human language to SQL Query. I built this small app to test out the Open API before using it for other bigger projects. Additionally, it was a nice practice for writing a small server",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "OPEN_AI",
        color: "pink-text-gradient",
      },
    ],
    image: sql_website,
    source_code_link: "https://github.com/aokdirova/sql-query-client",
    live_link: "https://gleaming-mochi-76bffc.netlify.app/",
  },
  {
    name: "My Website",
    description:
      "This is the website you are on right now. I built it recently, primarily for fun and to learn new technologies. This is a React project which was created with Vite. Additionally, I used Three.js for showing 3D models, Tailwind CSS for styling and Framer Motion for animations. I still need to optimize some things for this website: loading time of 3D models, memoizing callbacks and making some components reusable. It would also be interesting to rewrite this project using TypeScript",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/aokdirova/website",
    live_link: "https://aygul-okdirova.com",
  },
  {
    name: "Clothing Shop",
    description:
      "This Project is still a work in progress. I started it with an intention to test myself and build my personal React project outside of work from scratch. Main goal was to write it first in JS and then convert it to TS. Additionally, I tried first to manage state with Context and then I rewrote the project to use Redux.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/aokdirova/shopping-website-react",
    live_link: "https://celebrated-marzipan-11aa8e.netlify.app",
  },
  {
    name: "Joke Teller",
    description:
      "This is one of my very first personal projects. It's very simple Vanilla JS Project, which uses Joke Telling API and Text-to-Speech API. This project has a sentimental value. That is why it is here",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/aokdirova/programming-joke-teller",
    live_link: "https://programming-jokes-teller.netlify.app/",
  },
  {
    name: "Landing page",
    description:
      "One more of my early projects. This is a landing page built only with HTML and CSS without help of any packages or frameworks. I put it here to remind myself how powerful HTML and CSS are, even on their own.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/aokdirova/landing-page-outdoors",
    live_link: "https://elated-wiles-372388.netlify.app/",
  },
];

const artGallery = [
  { image: ballerina, alt: "ballerina" },
  { image: water, alt: "water being poured into the glass" },
  { image: dancer, alt: "dancing woman" },
  { image: couple, alt: "couple kissing under rain" },
  { image: winter, alt: "picture displaying winter and houses in snow" },
  { image: muse, alt: "muse" },
  { image: cutie, alt: "cute dog art" },
  { image: aurora, alt: "aurora borealis" },
  { image: baum, alt: "tree in the dark" },
  { image: boats, alt: "boats in the night" },
  {
    image: brainleftandright,
    alt: "image describing two parts of brain with a flower colored in black on one side and colored on another",
  },
  { image: france, alt: "france" },
  { image: lettertolovedone, alt: "empty envelope" },
  { image: maki, alt: "flowers" },
  { image: mountDoom, alt: "mountain from Lord of the rings in my head" },
  { image: nightcity, alt: "city in the night. it is snowing" },
  { image: tulips, alt: "tulips on canvas" },
  { image: wal, alt: "a whale. maybe a docker whale?" },
];

export { technologies, experiences, projects, artGallery };
