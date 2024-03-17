import React from 'react'

const SynthetixBanner = () => {
  return (
    <div className='flex justify-center pb-8'>
        <div className='w-[70vw] h-[50vh] sm:h-[20vh] bg-[#2ae8d1] flex lg:flex-col rounded-xl'>
            <div className='flex flex-col p-16 lg:p-8 lg:items-center'>
                <h1 className='mxl:text-7xl text-4xl sm:text-4xl font-bold text-white'>SYNTHETIX'24</h1>
                <h4 className='text-black text-xl mxl:text-2xl  font-semibold'>THE FUTURE IS HERE!</h4>
            </div>
            <div className='flex lg:justify-center items-end pb-6'>
                <button className=' bg-black  flex items-center rounded p-2'>
                    <p className=' text-white px-2'>Register</p>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 13.5V9L21 15L15 21V16.5H9V13.5H15ZM15 0C23.28 0 30 6.72 30 15C30 23.28 23.28 30 15 30C6.72 30 0 23.28 0 15C0 6.72 6.72 0 15 0ZM15 27C21.63 27 27 21.63 27 15C27 8.37 21.63 3 15 3C8.37 3 3 8.37 3 15C3 21.63 8.37 27 15 27Z" fill="#FEF3F3"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SynthetixBanner