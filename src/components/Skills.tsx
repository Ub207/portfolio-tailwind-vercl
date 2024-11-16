import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
          <p className='text-gray-500 pt-2'>I have a strong foundation in HTML, CSS, TypeScript, React, and extensive experience in JavaScript and Node.js for building full-stack applications. I am currently a beginner in Next.js, exploring its potential for creating scalable web solutions. I also work with Headless CMS for dynamic content management. My ongoing learning includes AI, the metaverse, and Web 3.0 technologies, enabling me to stay at the forefront of modern development and emerging tech innovations.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">css</h2>
              <h2 data-aos="zoom-in-up">node.js</h2>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills
