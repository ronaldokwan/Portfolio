import { CgCPlusPlus } from "react-icons/cg";
import {
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaAws, FaWindows } from "react-icons/fa";
import { FaC, FaJava } from "react-icons/fa6";
import {
  SiApollographql,
  SiBootstrap,
  SiCloudflare,
  SiDbeaver,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiJest,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiRedux,
  SiSequelize,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const languages = [
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiPhp, label: "PHP" },
  { Icon: DiPython, label: "Python" },
  { Icon: FaC, label: "C" },
  { Icon: CgCPlusPlus, label: "C++" },
  { Icon: FaJava, label: "Java" },
  { Icon: TbBrandCSharp, label: "C#" },
  { Icon: DiHtml5, label: "HTML5" },
  { Icon: DiCss3Full, label: "CSS3" },
];

export const databases = [
  { Icon: DiMongodb, label: "MongoDB" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiSqlite, label: "SQLite" },
  { Icon: SiRedis, label: "Redis" },
];

export const frameworks = [
  { Icon: DiReact, label: "React" },
  { Icon: TbBrandReactNative, label: "React Native" },
  { Icon: SiRedux, label: "Redux" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiBootstrap, label: "Bootstrap" },
  { Icon: SiJquery, label: "jQuery" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: SiExpress, label: "Express" },
  { Icon: SiLaravel, label: "Laravel" },
  { Icon: SiFlask, label: "Flask" },
  { Icon: SiSequelize, label: "Sequelize" },
  { Icon: SiGraphql, label: "GraphQL" },
  { Icon: SiApollographql, label: "Apollo GraphQL" },
];

export const cloud = [
  { Icon: FaAws, label: "AWS" },
  { Icon: SiGooglecloud, label: "Google Cloud" },
  { Icon: SiVercel, label: "Vercel" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiGithub, label: "GitHub" },
  { Icon: SiSupabase, label: "Supabase" },
  { Icon: SiCloudflare, label: "Cloudflare" },
];

export const tools = [
  { Icon: FaWindows, label: "Windows" },
  { Icon: SiLinux, label: "Linux" },
  { Icon: VscVscode, label: "VS Code" },
  { Icon: SiPostman, label: "Postman" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiGitlab, label: "GitLab" },
  { Icon: SiDbeaver, label: "DBeaver" },
  { Icon: SiVite, label: "Vite" },
  { Icon: SiJest, label: "Jest" },
  { Icon: SiExpo, label: "Expo" },
];
