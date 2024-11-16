import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
    {
      id: 1,
      title: "Static Resume",
      desc: "A simple static resume built using pure HTML and CSS, showcasing personal information, education, and experience.",
      img: "images/Static resume.png",
      tags: ["HTML", "CSS"]
    },
    {
      id: 2,
      title: "Dynamic Resume",
      desc: "A dynamic resume featuring interactivity and data binding, built with JavaScript and styled with modern CSS.",
      img: "images/Dynamic resume.png",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      id: 3,
      title: "Editable Resume",
      desc: "An interactive and dynamic resume built with TypeScript, HTML, and CSS, allowing for real-time updates and customization.",
      img: "images/Editable resume.png",
      tags: ["TypeScript", "HTML", "CSS"]
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
}

export default Projects
