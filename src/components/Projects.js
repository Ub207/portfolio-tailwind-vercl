"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Heading_1 = __importDefault(require("./Heading"));
const Card_1 = __importDefault(require("./Card"));
const data = [
    {
        id: 1,
        title: "Static Resume",
        desc: "A simple static resume built using pure HTML and CSS, showcasing personal information, education, and experience.",
        img: "/Staticresume.png",
        tags: ["HTML", "CSS"]
    },
    {
        id: 2,
        title: "Dynamic Resume",
        desc: "A dynamic resume featuring interactivity and data binding, built with JavaScript and styled with modern CSS.",
        img: "/Dynamicresume.png",
        tags: ["JavaScript", "HTML", "CSS"]
    },
    {
        id: 3,
        title: "Editable Resume",
        desc: "An interactive and dynamic resume built with TypeScript, HTML, and CSS, allowing for real-time updates and customization.",
        img: "/Editableresume.png",
        tags: ["TypeScript", "HTML", "CSS"]
    }
];
const Projects = () => {
    return (<div id='projects' className='container pt-32'>
      <Heading_1.default title="My Projects"/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md: grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card_1.default key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tags}/>))}

      </div>
    </div>);
};
exports.default = Projects;
