import {
  FaJava,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaSchool,
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiTailwindcss, SiDavinciresolve } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { BiLogoMongodb, BiSolidSchool } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import GsapIcon from "./GsapIcon.jsx";
import { MdSchool } from "react-icons/md";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  { id: "java", title: "Java", icon: FaJava },
  { id: "html", title: "HTML5", icon: TiHtml5 },
  { id: "css", title: "CSS3", icon: SiCss3 },
  { id: "js", title: "Javascript", icon: IoLogoJavascript },
  { id: "reactjs", title: "ReactJS", icon: FaReact },
  { id: "nodejs", title: "Node.js", icon: IoLogoNodejs },
  { id: "gsap", title: "GSAP", icon: GsapIcon },
  { id: "bootstrap", title: "Bootstrap", icon: FaBootstrap },
  { id: "tailwindcss", title: "Tailwind CSS", icon: SiTailwindcss },
  { id: "mysql", title: "MySQL", icon: GrMysql },
  { id: "mongodb", title: "MongoDB", icon: BiLogoMongodb },
  { id: "figma", title: "Figma", icon: FaFigma },
  { id: "davinciresolve", title: "DaVinci Resolve", icon: SiDavinciresolve },
  { id: "git", title: "Git", icon: FaGitAlt },
  { id: "github", title: "Github", icon: FaGithub },
  { id: "vscode", title: "VS Code", icon: VscVscode },
];

const journey = [
  {
    id: 1,
    icon: FaCode,
    heading: "Started my coding journey",
    year: 2025,
    institute: "Self-taught",
    description:
      "Started with HTML, CSS, and JS. Built my first website and instantly fell in love with it.",
  },
  {
    id: 2,
    icon: MdSchool,
    heading: "B.Tech",
    year: "2022 - 2025",
    institute: "University of Visvesvaraya College of Engineering",
    description:
      "Currently pursuing B.Tech in Electronics and Communication Department in UVCE.",
  },
  {
    id: 3,
    icon: FaSchool,
    heading: "Pre-university",
    year: "2022",
    institute: "Gurukul Ind PU College, Kalaburagi",
    description: "Completed my pre-university studies in Kalaburgi.",
  },
  {
    id: 4,
    icon: BiSolidSchool,
    heading: "SSLC",
    year: "2022",
    institute: "SRN Mehta Eng Med School, Kalaburagi",
    description: "Received my Secondary School Leaving Certificate in Kalaburgi itself.",
  },
];

const loadingPage = [
  {
    id: 1,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    path: "M224 160C224 107 267 64 320 64C373 64 416 107 416 160L416 163.6C416 179.3 403.3 192 387.6 192L252.5 192C236.8 192 224.1 179.3 224.1 163.6L224.1 160zM569.6 172.8C580.2 186.9 577.3 207 563.2 217.6L465.4 290.9C470.7 299.8 474.7 309.6 477.2 320L576 320C593.7 320 608 334.3 608 352C608 369.7 593.7 384 576 384L480 384L480 416C480 418.6 479.9 421.3 479.8 423.9L563.2 486.4C577.3 497 580.2 517.1 569.6 531.2C559 545.3 538.9 548.2 524.8 537.6L461.7 490.3C438.5 534.5 395.2 566.5 344 574.2L344 344C344 330.7 333.3 320 320 320C306.7 320 296 330.7 296 344L296 574.2C244.8 566.5 201.5 534.5 178.3 490.3L115.2 537.6C101.1 548.2 81 545.3 70.4 531.2C59.8 517.1 62.7 497 76.8 486.4L160.2 423.9C160.1 421.3 160 418.7 160 416L160 384L64 384C46.3 384 32 369.7 32 352C32 334.3 46.3 320 64 320L162.8 320C165.3 309.6 169.3 299.8 174.6 290.9L76.8 217.6C62.7 207 59.8 186.9 70.4 172.8C81 158.7 101.1 155.8 115.2 166.4L224 248C236.3 242.9 249.8 240 264 240L376 240C390.2 240 403.7 242.8 416 248L524.8 166.4C538.9 155.8 559 158.7 569.6 172.8z",
  },
  {
    id: 1,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    path: "M192 96C174.3 96 160 110.3 160 128L160 512C160 529.7 174.3 544 192 544C209.7 544 224 529.7 224 512L224 384L319.3 384L421.7 530.4C431.8 544.9 451.8 548.4 466.3 538.3C480.8 528.2 484.3 508.2 474.2 493.7L390.1 373.5C442.8 352.1 480 300.4 480 240C480 160.5 415.5 96 336 96L192 96zM336 320L224 320L224 160L336 160C380.2 160 416 195.8 416 240C416 284.2 380.2 320 336 320z",
  },
  {
    id: 1,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    path: "M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z",
  },
  {
    id: 1,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    path: "M147.7 98.5C164 91.7 182.7 99.4 189.5 115.7L320 428.8L450.5 115.7C457.3 99.4 476 91.7 492.3 98.5C508.6 105.3 516.3 124 509.5 140.3L349.5 524.3C344.5 536.2 332.9 544 320 544C307.1 544 295.4 536.2 290.5 524.3L130.5 140.3C123.7 124 131.4 105.3 147.7 98.5z",
  },
  {
    id: 1,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    path: "M192 96C174.3 96 160 110.3 160 128C160 145.7 174.3 160 192 160L288 160L288 480L192 480C174.3 480 160 494.3 160 512C160 529.7 174.3 544 192 544L448 544C465.7 544 480 529.7 480 512C480 494.3 465.7 480 448 480L352 480L352 160L448 160C465.7 160 480 145.7 480 128C480 110.3 465.7 96 448 96L192 96z",
  },
  {
    id: 1,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 640",
    path: "M149.1 97.9C161.8 93.3 176 97.2 184.6 107.5L448 423.6L448 128C448 110.3 462.3 96 480 96C497.7 96 512 110.3 512 128L512 512C512 525.5 503.6 537.5 490.9 542.1C478.2 546.7 464 542.8 455.4 532.5L192 216.4L192 512C192 529.7 177.7 544 160 544C142.3 544 128 529.7 128 512L128 128C128 114.5 136.4 102.5 149.1 97.9z",
  },
];

export { navLinks, skills, journey, loadingPage };
