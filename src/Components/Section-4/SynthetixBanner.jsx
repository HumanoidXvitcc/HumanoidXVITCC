import React,{useState} from 'react'
import SectionHeading from '../ExtraFeatures/SectionHeading'
import SynthetixBannerPhoto from '../SynthetixBannerPhoto'
import ConfettiExplosion from 'react-confetti-explosion';

    
const SynthetixBanner = () => {
  const [isExploding, setIsExploding] = useState(false);
    function Explode(){
        setIsExploding(true);
        setTimeout(() => {
            setIsExploding(false);
        }, 2000);
    }
  return (
    <div id="events" className='mb-[10vh]'>
    <SectionHeading text1="New" text2="Event" ptext="" />
        <div className='z-0 pb-12 text-white flex items-center'>
          <marquee behavior="scroll" direction="left" className='p-2 bg-[#178376] text-xl font-semibold'><h1>NEW EVENT ALERT!<span> </span>  NEW EVENT ALERT! NEW EVENT ALERT!   NEW EVENT ALERT!   NEW EVENT ALERT!   NEW EVENT ALERT!   NEW EVENT ALERT!    NEW EVENT ALERT!    NEW EVENT ALERT!    NEW EVENT ALERT!  NEW EVENT ALERT!    NEW EVENT ALERT!    NEW EVENT ALERT!</h1></marquee>
        </div>
        <SynthetixBannerPhoto/>   
      <div className=' flex justify-center p-8'>
            <div className='hover:scale-110 duration-500 hover:duration-500 texture-bg px-8 bg-[#178376]/90 flex lg:flex-col rounded-xl'>
                <div className='flex  flex-col p-16 lg:p-8 lg:items-center'>
                    <h1 className='mxl:text-[4em] text-[3em] sm:text-[2em] font-bold text-white'>SYNTHETIX'24</h1>
                    <h4 className='text-black text-[em] mxl:text-[1.5em]  font-semibold'>THE FUTURE IS HERE!</h4>
                </div>
                <div className='flex pb-8 justify-center hover:text-[#178376] font-semibold items-end'> 
                    <a href="https://vitchennaievents.com">
                      <button onClick={Explode} className='NavBar-bg hover:bg-white/60 text-white hover:text-[#178376] bg-black flex items-center rounded p-2'>
                        {isExploding && <ConfettiExplosion />}
                        <p className='px-4 py-2'>Register</p>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 13.5V9L21 15L15 21V16.5H9V13.5H15ZM15 0C23.28 0 30 6.72 30 15C30 23.28 23.28 30 15 30C6.72 30 0 23.28 0 15C0 6.72 6.72 0 15 0ZM15 27C21.63 27 27 21.63 27 15C27 8.37 21.63 3 15 3C8.37 3 3 8.37 3 15C3 21.63 8.37 27 15 27Z" fill="#178376"/>
                        </svg>
                    </button>
                    </a>
                </div>
            </div>
        </div>  
             
        <hr className='ml-[8vw] w-[84vw] mt-[10vh]'/> 
    </div>
    
  )
}

export default SynthetixBanner