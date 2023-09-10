import doner from '../assets/img/boner.png'
const Hero = () => {


  return (
    <div className=" h-screen text-white flex-row md:flex justify-around items-center md:px-16 px-2">
      <div className="md:w-1/2 ">
        <h1 className='md:text-6xl md:text-start text-center text-3xl'>Donate Blood</h1>
        <h1 className='text-center text-4xl md:text-7xl text-[#ff725e]'>&</h1>
        <h1 className='md:text-5xl text-3xl text-center md:text-end'>Sava a Life</h1>
        <p className='text-justify md:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis natus cum, reprehenderit recusandae, in illo sit eum sapiente magnam sint iste laudantium velit non quaerat. Unde consequuntur natus quisquam.</p>
        <div className='flex gap-5 justify-center md:justify-start md:mt-4'>
          <button className='px-5 py-1 bg-[#ff725e] text-white rounded-lg'>Donate</button>
          <button className='px-5 py-1 bg-[#ff725e] text-white rounded-lg'>Find</button>
        </div>
      </div>
      <div className='lg:w-2/6 flex items-center justify-center m-auto'>
        <img src={doner} alt="" />
      </div>
    </div>
  )
};

export default Hero;
