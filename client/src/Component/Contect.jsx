
import { Button } from '@material-tailwind/react';
import { MdMarkEmailRead, MdLocalPhone, MdHome } from 'react-icons/md'
const Contect = () => {
    return (
        <section id='contact' className='py-10 px-3 text-black'>
            <div className="text-center mt-8">
                <h3 className='text-4xl font-semibold text-black'>Contact <span className='text-gray-900'>Us</span></h3>
                <p className='text-gray-500 mt-3 text-center'>Get in touch</p>
                <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl shadow-xl border p-6 rounded-lg mx-auto'>
                    <form className=' flex flex-col flex-1 gap-5'>
                        <input className='border bg-blue-gray-100/10' type="text" placeholder='Your Name' />
                        <input className='border bg-blue-gray-100/10' type="text" placeholder='Your Email Address' />
                        <textarea className='border bg-blue-gray-100/10' placeholder='Your Message' rows={5} ></textarea>
                        <Button variant="gradient" size="sm" className="mb-2 ">
                            <span>Send Message</span>
                        </Button>
                    </form>
                    <div className=''>
                        <div className="flex gap-4 w-fit items-center">
                            <div className='min-w-[3rem] text-3xl min-h-[3rem] flex items-center justify-center text-white bg-gray-900 rounded-full my-1'>
                                <MdMarkEmailRead></MdMarkEmailRead>

                            </div>
                            <p className='text-lg hover:underline hover:text-gray-400'><a href="mailto:tntanvir2382018@gamil.com" >tntanvir2382018@gmail.com</a></p>
                        </div>
                        <div className="flex gap-4 w-fit items-center">
                            <div className='min-w-[3rem] text-3xl min-h-[3rem] flex items-center justify-center text-white bg-gray-900 rounded-full my-1' >
                                <MdLocalPhone></MdLocalPhone>

                            </div>
                            <p className='text-lg hover:underline hover:text-gray-400'><a href="tel:+8801307629936" >01307629936</a></p>
                        </div>
                        <div className="flex gap-4 w-fit items-center">
                            <div className='min-w-[3rem] text-3xl min-h-[3rem] flex items-center justify-center text-white bg-gray-900 rounded-full my-1'>
                                <MdHome></MdHome>

                            </div>
                            <p className='text-lg'>Chirirbander,Dinajpur,Bangladesh</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contect;