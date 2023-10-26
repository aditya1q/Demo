import pgImage from '../assets/man.png';
import Navbar from './Navbar';

const Home = () => {
  const gradientText = {
    background: '-webkit-linear-gradient(#4c3894, #2f0e52 29%, #ff1361 67%, #fff800)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };
  return (
    <>
      <Navbar />
      <div className='flex items-center h-screen mt-24 lg:mt-0 justify-between flex-col lg:flex-row  w-full'>
        <div className='flex flex-col gap-5 items-center justify-center lg:w-[50%] h-[60vh] w-full mb-10 lg:mb-0'>
          <h1 className='md:text-[25px] text-[20px] font-semibold mb-6 leading-tight text-center'>HELLO ITS ME <br className='sm:block hidden' /> ADITYA TIWARI APPLIED FOR<br className='sm:block hidden' /><span style={gradientText} className='font-bold text-[25px]'>FRONTEND DEVELOPMENT POSITION</span></h1>
          <p className='text-[14px] mb-6 w-[65%] text-center'>Hello, Welcome to the Task page, Here Ive completed my task successfully for the position of frontend development in Mudraksh and McShow. I am a passionate and aspiring front-end developer showcasing my Skills and dedication to creating engaging web experiences</p>
          {/* <button className='flex items-center gap-5 px-6 rounded-3xl py-2 bg-black text-white'>
          <a href='https://devfolio-roan-nine.vercel.app/' className='text-[14px] font-bold'>Visit Portfolio</a>
        </button> */}
        </div>

        <div className='flex items-center justify-center mt-5 lg:mt-0'>
          <img src={pgImage} alt="" className='object-contain flex items-center justify-center w-[70%] h-[60vh] mr-0 lg:mr-32' />
        </div>
      </div>
    </>
  )
}

export default Home