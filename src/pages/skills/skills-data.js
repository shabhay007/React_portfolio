import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_cpp from "../../assets/img/skills/cpp_img_icon.jfif";
import L_python from "../../assets/img/skills/python_img_icon.jfif";
import L_render from "../../assets/img/skills/render.svg";

export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
  ],

  backend: [
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: "Node.js",
    },
  ],
  hostingPlatforms: [
    {
      link: "https://render.com/",
      imgAltText: "Render",
      imgSrc: L_render,
      skillName: "Render",
    },
  ],
  programmingLanguages: [
    {
      link: "https://www.geeksforgeeks.org/c-plus-plus/",
      imgAltText: "C++",
      imgSrc: L_cpp,
      skillName: "C++",
    },
    {
      link: "https://www.geeksforgeeks.org/python-programming-language/",
      imgAltText: "Python",
      imgSrc: L_python,
      skillName: "Python",
    },
  ],
  databases: [
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: L_MONGODB,
      skillName: "MongoDB",
    },
    {
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],
};
