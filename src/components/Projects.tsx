

import Heading from './Heading';
import Card from './Card';

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
    },
    
      {
        id: 4,
        title: "World Watches Website",
        desc: "Multipage website using React components including Home, About, Contact, and Watches pages.",
        img: "/multipge website.png",
        tags: ["HTML", "Node", "TailwindCSS", "TypeScript"]
      },
      {
        id: 5,
        title: "Dynamic and Functional Ecommerce Website in Next.js",
        desc: "An HTML, TypeScript, and Tailwind CSS based ecommerce website with payment method integration.",
        img: "/dynamic website.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
      },
      {
        id: 6,
        title: "Sharable Resume",
        desc: "A TypeScript-based sharable resume built with HTML and CSS, allowing users to dynamically showcase their skills.",
        img: "/sherable-resume.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
      }
    
  ];
  

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title = "My Projects"/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md: grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card
        key ={el.id}
        title = {el.title}
        desc ={el.desc}
        img = {el.img}
        tags = {el.tags}

        />))}

      </div>
    </div>
  )
  // Minor change to trigger Vercel redeploy
}

export default Projects  

// Minor change to trigger Vercel redeploy

