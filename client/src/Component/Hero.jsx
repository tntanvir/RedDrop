import { Button } from '@material-tailwind/react';
import doner from '../assets/img/boner.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { ContextApi } from '../App';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useContext(ContextApi);
  const notify = () => {
    if (userLogin.email) {

      navigate('/provideUser')
    } else {
      toast.error("Login Fast!", {
        theme: "colored"
      })

    }


  }

  return (
    <div className=" text-black flex-row md:flex justify-around items-center md:px-16 px-2 bg-yellow-700 relative md:pb-14">
      <svg className='absolute bottom-0 w-full left-0 right-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1" d="M0,288L120,288C240,288,480,288,720,272C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      <div className="md:w-1/2">
        <h1 className='md:text-5xl font-light md:text-start text-center text-3xl'><span className='text-gray-900 font-semibold'>Help</span> & save Life </h1>
        <h1 className='text-center font-light text-4xl md:text-start md:text-7xl text-[#2a2a2a]'>By</h1>
        <h1 className='md:text-5xl font-light text-3xl text-center md:text-start'>Donating <span className='text-gray-900 font-semibold'>Blood</span></h1>
        <p className='text-justify font-light md:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis natus cum, reprehenderit recusandae, in illo sit eum sapiente magnam sint iste laudantium velit non quaerat. Unde consequuntur natus quisquam.</p>
        <div className='flex gap-5 justify-center md:justify-start md:mt-4 z-40 md:absolute'>

          {/* <button onClick={notify} className='px-5 py-1 bg-gray-800 text-white rounded-lg'>Get Start</button> */}
          <Button onClick={notify} className="rounded-full">get start</Button>
        </div>
      </div>
      <div className='lg:w-2/6 flex items-center justify-center m-auto'>
        <img src={doner} alt="" />
      </div>
      <ToastContainer />
    </div>
  )
};

export default Hero;
