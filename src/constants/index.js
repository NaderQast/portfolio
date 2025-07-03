import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/P1.png";
import project6 from "../assets/projects/p3.png";
import project7 from "../assets/projects/p2.png";
import project8 from "../assets/projects/p4.png";
import project9 from "../assets/projects/p5.png";
import project10 from "../assets/projects/p6.png";
import project11 from "../assets/projects/p7.png";

export const HERO_CONTENT = `Innovative and driven Engineer with a deep passion for cutting-edge technologies, specializing in Web Development and expanding expertise in Web 3.0, blockchain, and decentralized applications (DApps). Experienced in smart contract development and exploring advanced blockchain ecosystems. `;
export const ABOUT_TEXT = `On the front-end, I work extensively with modern frameworks like React and Next.js, applying best practices in UI/UX design, component architecture, and performance optimization. On the blockchain side, I develop secure and efficient smart contracts using Solidity, with a deep understanding of advanced design patterns such as proxy patterns, access control, upgradable contracts, and factory-based deployments. I use Foundry as my main development and testing framework, allowing for fast, modular, and well-tested contract systems that are production-ready.

I’m passionate about building reliable systems that follow clean architecture and scalable design principles. I enjoy exploring how advanced smart contract patterns can be applied to solve real-world problems—such as token economies, payment gateways, DAO structures, and on-chain logic for decentralized finance (DeFi).

Beyond blockchain, I have a strong interest in AI and emerging technologies like zero-knowledge proofs, L2 scaling, and decentralized identity systems, and I'm always excited to learn and adapt as the tech landscape evolves.

`;

export const EXPERIENCES = [
  {
    year: "2018 - 2022",
    role: "IT technical support.",
    company: "Kashlan Company",
    description: `I was Responsible for Maintaining System and software
checking and fixing Hardware issues .
installing Operating systems and other important apps for customers `,
    technologies: [],
  },
  {
    year: "2024",
    role: "Front-End Internship.",
    company: "Mad-Solution co",
    description: `Developed skills in writing clean and readable code, incorporating best practices and industry tips.`,
    technologies: ["HTML", "Tailwind-CSS", "React", "figma"],
  },
  {
    year: "2025",
    role: "Blockchain developer trainee",
    company: "Blokkat",
    description: `Learning about blockchain achitecture ,EVMs ,industry technologies and best practices  `,
    technologies: [
      "Solidity",
      "Foundry",
      "anvill",
      "Ethereum",
      "Smart Contracts",
    ],
  },
];

export const Links = {
  github: "https://github.com/NaderQast/",
  linkedin: "https://www.linkedin.com/in/nader-al-quwatli/",
  facebook: "https://www.facebook.com/Nader.Qas/",
  CV: "https://drive.google.com/drive/folders/1ya_WemzpbY3w3I5GnObJah8Z8JKWCGf5?usp=drive_link",
};

export const PROJECTS = [
  {
    title: "Crypto-Souq",
    image: project8,
    description:
      "A Website to show the Prices of the Crypto currincies with 4 different currencies including USD,EUR,SAR and AED you can also see each currency performance details with the help of Google chart data , also you can search for any crypto currency and match results with the current typing ",
    technologies: ["HTML", "CSS", "React"],
    link: "https://crypto-souq.vercel.app/",
  },
  {
    title: "Nader-Ecommerce",
    image: project9,
    description:
      "An e-commerce website built with React, featuring a modern, responsive design and seamless user experience. The site includes dynamic product listings and an efficient 'Add to Cart' functionality implemented using Redux Toolkit. This functionality allows users to add, remove, and update items in their cart with real-time state management, ensuring a smooth and interactive shopping experience. Deployed on Vercel for optimal performance and scalability. ",
    technologies: ["HTML", "Tailwind.CSS", "React", "Redux-toolkit"],
    link: "https://nader-ecommerce.vercel.app/",
  },
  {
    title: "Decentralized-Voting-System - Web 3.0",
    image: project10,
    description:
      "decentralized voting system using blockchain to ensure secure, transparent, and tamper-proof elections. Implemented smart contracts for automated vote validation and recording on-chain, enhancing trust and eliminating fraud. Built on Sepolia for cost-efficient testing.",
    technologies: ["Solidity", "Foundry", "Ethereum", "Smart Contracts", "ACL"],
    link: "https://github.com/NaderQast/Decentralized-Voting",
  },
  {
    title: "Products-NFT-Minter - Web 3.0",
    image: project11,
    description:
      "Developed a multi-chain NFT minting dApp enabling users to mint custom NFTs on Sepolia or Scroll Sepolia testnets. Integrated network switching for seamless cross-chain deployment, with secure smart contract handling for metadata and ownership verification. Streamlined user experience via Wagmi from Reown and responsive frontend. ",
    technologies: ["Solidity", "Foundry", "ERC-721", "IPFS", "ACL", "i18n"],
    link: "https://nft-minter-mu-six.vercel.app/",
  },

  {
    title: "Finance-Data-Page",
    image: project7,
    description:
      "A single page landing website to show the services for an Economic Company",
    technologies: ["HTML", "Tailwind.CSS", "React"],
    link: "https://finance-data-react.vercel.app/",
  },
  {
    title: "Sa3a-Store",
    image: project5,
    description:
      "Single Page e-commerce website with nice appearance and dark mode Feature ",
    technologies: ["HTML", "Tailwind.CSS", "React.JS"],
    link: "https://sa3a-store-51x9.vercel.app/",
  },

  {
    title: "React-Blog",
    image: project6,
    description:
      "A simple react blog application with user google account authentication and CRUD operations with react Router and like/dislike button  ",
    technologies: ["HTML", "CSS", "React.JS", "Firebase", "TypeScript"],
    link: "https://react-social-bb389.web.app/",
  },
];

export const CONTACT = {
  address: "Damascus,Zablatani",
  phoneNo: "+963 988608187 ",
  email: "nader.qas@gmail.com",
};
