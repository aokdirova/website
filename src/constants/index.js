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
    icon: jest,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: ["", ""],
  },
];

const projects = [
  {
    name: "Online Shop",
    description: "lorem ipsum dolorem",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: brainleftandright,
    source_code_link: "https://github.com/",
  },
  {
    name: "",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: wal,
    source_code_link: "https://github.com/",
  },
  {
    name: "",
    description: "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mountDoom,
    source_code_link: "https://github.com/",
  },
];

const artGallery = [
  { image: aurora, alt: "aurora borealis" },
  { image: ballerina, alt: "ballerina" },
  { image: baum, alt: "tree in the dark" },
  { image: boats, alt: "boats in the night" },
  {
    image: brainleftandright,
    alt: "image describing two parts of brain with a flower colored in black on one side and colored on another",
  },
  { image: couple, alt: "couple kissing under rain" },
  { image: cutie, alt: "cute dog art" },
  { image: france, alt: "france" },
  { image: lettertolovedone, alt: "empty envelope" },
  { image: maki, alt: "flowers" },
  { image: mountDoom, alt: "mountain from Lord of the rings in my head" },
  { image: muse, alt: "muse" },
  { image: nightcity, alt: "city in the night. it is snowing" },
  { image: tulips, alt: "tulips on canvas" },
  { image: wal, alt: "a whale. maybe a docker whale?" },
  { image: water, alt: "water being poured into the glass" },
];

export { technologies, experiences, projects, artGallery };
