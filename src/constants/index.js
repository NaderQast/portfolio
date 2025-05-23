import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/P1.png";
import project6 from "../assets/projects/p3.png";
import project7 from "../assets/projects/p2.png";
import project8 from "../assets/projects/p4.png";
import project9 from "../assets/projects/p5.png";


export const HERO_CONTENT = `A motivated Computer Engineer passionate for tech ,seeking for imporving my skills , particularly in WEB development . I enjoy learning and working with others , and I am excited to see where my skills and passion for building will take me in future. `;
;

export const ABOUT_TEXT = `I am a dedicated with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. I am also passionate about AI and Web 3. I am always looking for ways to use these technologies to create innovative and impactful applications.`;

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
    technologies: ["HTML","Tailwind-CSS","React"],
  },
];

export const Links = 
  {
    github: "https://github.com/NaderQast/",
    linkedin: "https://www.linkedin.com/in/nader-al-quwatli/",
    facebook: "https://www.facebook.com/Nader.Qas/",
    CV: "https://drive.google.com/drive/folders/1ya_WemzpbY3w3I5GnObJah8Z8JKWCGf5?usp=drive_link", 
  }


export const PROJECTS = [
  {
    title: "Crypto-Souq",
    image: project8,
    description:
      "A Website to show the Prices of the Crypto currincies with 4 different currencies including USD,EUR,SAR and AED you can also see each currency performance details with the help of Google chart data , also you can search for any crypto currency and match results with the current typing ",
    technologies: ["HTML", "CSS", "React",],
    link:"https://crypto-souq.vercel.app/"
  },
  {
    title: "Nader-Ecommerce",
    image: project9 ,
    description:
      "An e-commerce website built with React, featuring a modern, responsive design and seamless user experience. The site includes dynamic product listings and an efficient 'Add to Cart' functionality implemented using Redux Toolkit. This functionality allows users to add, remove, and update items in their cart with real-time state management, ensuring a smooth and interactive shopping experience. Deployed on Vercel for optimal performance and scalability. ",
    technologies: ["HTML", "Tailwind.CSS", "React","Redux-toolkit"],
    link:"https://nader-ecommerce.vercel.app/"
  },
  
  {
    title: "Finance-Data-Page",
    image: project7,
    description:
      "A single page landing website to show the services for an Economic Company",
    technologies: ["HTML", "Tailwind.CSS", "React",],
    link:"https://finance-data-react.vercel.app/"
  },
  {
    title: "Sa3a-Store",
    image: project5,
    description:
      "Single Page e-commerce website with nice appearance and dark mode Feature ",
    technologies: ["HTML", "Tailwind.CSS", "React.JS", ],
    link: "https://sa3a-store-51x9.vercel.app/",
  },


  {
    title: "React-Blog",
    image: project6,
    description:
      "A simple react blog application with user google account authentication and CRUD operations with react Router and like/dislike button  ",
    technologies: ["HTML", "CSS", "React.JS", "Firebase","TypeScript"],
    link:"https://react-social-bb389.web.app/",
  },
];

export const CONTACT = {
  address: "Damascus,Zablatani",
  phoneNo: "+963 988608187 ",
  email: "nader.qas@gmail.com",
};
