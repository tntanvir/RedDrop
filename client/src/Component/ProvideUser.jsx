import React from 'react';
import { BiSearch, BiSolidDonateBlood } from "react-icons/bi"
import { Link } from 'react-router-dom';

const ProvideUser = () => {
    return (

        <div id='provide' className="flex flex-col md:flex-row items-center justify-center gap-4 p-5">
            <Link to={'/donerfrom'}>
                <div className="md:w-96 py-4 px-3 rounded-lg border shadow-md flex items-center flex-col justify-center cursor-pointer w-fit">

                    <div className='bg-gray-900 p-4 text-white font-semibold rounded-full w-fit animate-bounce'> <BiSolidDonateBlood /> </div>
                    <h1 className='text-2xl font-semibold'>Donat Blood</h1>
                    <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid minus cum laboriosam cupiditate commodi dolorum inventore eius sunt porro.</p>

                </div>
            </Link>
            <Link to={'/resivedfrom'}>
                <div className="md:w-96 py-4 px-3 rounded-lg border shadow-md flex items-center flex-col justify-center cursor-pointer w-fit">
                    <div className='bg-gray-900 p-4 text-white font-semibold rounded-full w-fit animate-bounce'> <BiSearch /> </div>
                    <h1 className='text-2xl font-semibold'>Search Blood</h1>
                    <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aliquid minus cum laboriosam cupiditate commodi dolorum inventore eius sunt porro.</p>
                </div>
            </Link>
        </div>

    );
};

export default ProvideUser;