import React from 'react';
import AboutImg from '../assets/img/About img.png'
import { Button } from '@material-tailwind/react';
const About = () => {
    return (
        <div className=' flex flex-col items-center pt-24 text-black px-12'>
            <h1 className='text-5xl '>About Us</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center bg-yellow-700 rounded-xl mt-8'>
                <div className='w-80 flex items-center lg:w-4/12 p-1'>
                    <img src={AboutImg} alt="" />
                </div>
                <div className='p-2 text-justify lg:w-1/2 flex lg:justify-center flex-col gap-2'>
                    <h1 className='text-white text-2xl'>Can not find <span>Blood</span> ? Don't Warry...  </h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde nihil iure harum quam, deserunt ipsam rem aliquid, qui saepe eligendi eveniet, tenetur beatae delectus accusamus! Harum placeat tenetur earum.
                    <div className='flex items-center justify-center lg:justify-start pt-5'>
                        <a href='#contact'>
                            <Button size="sm" className="mb-2 ">
                                Contact us
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;