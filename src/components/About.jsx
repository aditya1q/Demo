import dev from '../assets/dev.png'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
      <Navbar />
      <main id='about' className='text-black flex flex-col lg:flex-row items-center justify-between h-[150vh] lg:h-[100vh]'>
        <div className='flex w-full flex-col gap-5 justify-center items-center lg:w-2/3 bg-gray-200 h-full'>
          <h1 className='text-4xl md:text-6xl font-sans w-full text-center'>
            All About Me
          </h1>
          <p className='text-sm lg:text-[15px] w-[80%] text-center'>
            Successfully completed a six-month Full Stack Development internship at Ensino Research
            and Development Private Limited in Dehradun, where I gained valuable exposure to both
            frontend and backend technologies. While I had the opportunity to work on full stack
            development, my passion led me to specialize in frontend development. I focused on refining my skills in HTML, CSS, JavaScript and various frontend frameworks, with a primary focus on
            creating user-friendly and visually appealing interfaces.
          </p>
          <h1 className='font-bold text-xl'>Certification Course/Internship:</h1>
          <h1 className='font-bold text-lg'>Roles and Responsibilities: </h1>
          <ul className='list-disc ml-10'>
            <li>Good hand and knowledge in HTML5, CSS3, and JavaScript</li>
            <li>During my 6-month internship at Ensino Private Limited, I developed and maintained
              responsive web applications.</li>
            <li>I gained familiarity with popular front-end frameworks such as React, Next, and Tailwind.</li>
            <li>Implemented mobile-first design strategies to enhance user experience.</li>
            <li>Hands-on experience with code editors (e.g., Visual Studio Code)</li>
            <li>I acquired understanding of CSS preprocessors, particularly Sass.</li>
            <li>Applied responsive web design principles to create user-friendly interfaces.</li>
          </ul>
        </div>
        <div className='h-[100%] w-[100%] lg:w-[50%] lg:h-[100vh] object-cover mt-10'>
          <img src={dev} alt='dev' className='h-[90%] object-contain w-[100%] ' />
        </div>
      </main>
    </>
  )
}

export default About