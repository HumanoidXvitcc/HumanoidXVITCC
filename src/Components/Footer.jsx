import React from 'react'

const Footer = () => {
  return (
    <div className='custom:px-[8vw] text-white '>
        <div className='md:flex md:flex-col md:items-center'>       
            <p className='md:p-2 custom:p-2'>Build | Integrate | Innovate </p>
            <hr className='wd-[70vw] custom:wd-[90vw]'/>
            <div className='md:flex md:flex-col custom:flex custom:p-4 custom:items-center'>
                <div className='md:flex md:p-4 custom:flex-1 custom:flex md:justify-center'>
                    <svg className='md:px-2 custom:px-2' height="41" viewBox="0 0 40 41" fill="#2ae8d1" xmlns="http://www.w3.org/2000/svg">
                        <a href="https://www.linkedin.com/company/humanoidxvitcc/mycompany/">
                            <path d="M35.5556 0.505859C36.7343 0.505859 37.8648 0.974112 38.6983 1.80761C39.5317 2.6411 40 3.77156 40 4.9503V36.0614C40 37.2402 39.5317 38.3706 38.6983 39.2041C37.8648 40.0376 36.7343 40.5059 35.5556 40.5059H4.44444C3.2657 40.5059 2.13524 40.0376 1.30175 39.2041C0.468252 38.3706 0 37.2402 0 36.0614V4.9503C0 3.77156 0.468252 2.6411 1.30175 1.80761C2.13524 0.974112 3.2657 0.505859 4.44444 0.505859H35.5556ZM34.4444 34.9503V23.1725C34.4444 21.2512 33.6812 19.4085 32.3226 18.0499C30.964 16.6913 29.1213 15.9281 27.2 15.9281C25.3111 15.9281 23.1111 17.0836 22.0444 18.817V16.3503H15.8444V34.9503H22.0444V23.9947C22.0444 22.2836 23.4222 20.8836 25.1333 20.8836C25.9585 20.8836 26.7498 21.2114 27.3332 21.7949C27.9167 22.3783 28.2444 23.1696 28.2444 23.9947V34.9503H34.4444ZM8.62222 12.8614C9.61236 12.8614 10.562 12.4681 11.2621 11.7679C11.9622 11.0678 12.3556 10.1182 12.3556 9.12808C12.3556 7.06142 10.6889 5.37253 8.62222 5.37253C7.62619 5.37253 6.67095 5.7682 5.96664 6.4725C5.26234 7.17681 4.86667 8.13205 4.86667 9.12808C4.86667 11.1947 6.55556 12.8614 8.62222 12.8614ZM11.7111 34.9503V16.3503H5.55556V34.9503H11.7111Z" fill="#2ae8d1"/>
                        </a>
                    </svg>
                    <svg className='md:px-2 custom:px-2' height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <a href='https://www.instagram.com/humanoidx.vitcc/?hl=en'>
                            <path d="M20 0C14.5725 0 13.89 0.025 11.7575 0.12C9.625 0.22 8.1725 0.555 6.9 1.05C5.56461 1.55081 4.35535 2.3385 3.3575 3.3575C2.3385 4.35535 1.55081 5.56461 1.05 6.9C0.555 8.17 0.2175 9.625 0.12 11.75C0.025 13.8875 0 14.5675 0 20.0025C0 25.4325 0.025 26.1125 0.12 28.245C0.22 30.375 0.555 31.8275 1.05 33.1C1.5625 34.415 2.245 35.53 3.3575 36.6425C4.4675 37.755 5.5825 38.44 6.8975 38.95C8.1725 39.445 9.6225 39.7825 11.7525 39.88C13.8875 39.975 14.5675 40 20 40C25.4325 40 26.11 39.975 28.245 39.88C30.3725 39.78 31.83 39.445 33.1025 38.95C34.437 38.4489 35.6454 37.6612 36.6425 36.6425C37.755 35.53 38.4375 34.415 38.95 33.1C39.4425 31.8275 39.78 30.375 39.88 28.245C39.975 26.1125 40 25.4325 40 20C40 14.5675 39.975 13.8875 39.88 11.7525C39.78 9.625 39.4425 8.17 38.95 6.9C38.4492 5.56461 37.6615 4.35535 36.6425 3.3575C35.6446 2.3385 34.4354 1.55081 33.1 1.05C31.825 0.555 30.37 0.2175 28.2425 0.12C26.1075 0.025 25.43 0 19.995 0H20ZM18.2075 3.605H20.0025C25.3425 3.605 25.975 3.6225 28.0825 3.72C30.0325 3.8075 31.0925 4.135 31.7975 4.4075C32.73 4.77 33.3975 5.205 34.0975 5.905C34.7975 6.605 35.23 7.27 35.5925 8.205C35.8675 8.9075 36.1925 9.9675 36.28 11.9175C36.3775 14.025 36.3975 14.6575 36.3975 19.995C36.3975 25.3325 36.3775 25.9675 36.28 28.075C36.1925 30.025 35.865 31.0825 35.5925 31.7875C35.2696 32.6548 34.7581 33.4395 34.095 34.085C33.395 34.785 32.73 35.2175 31.795 35.58C31.095 35.855 30.035 36.18 28.0825 36.27C25.975 36.365 25.3425 36.3875 20.0025 36.3875C14.6625 36.3875 14.0275 36.365 11.92 36.27C9.97 36.18 8.9125 35.855 8.2075 35.58C7.33958 35.2581 6.554 34.7475 5.9075 34.085C5.24318 33.439 4.73082 32.6534 4.4075 31.785C4.135 31.0825 3.8075 30.0225 3.72 28.0725C3.625 25.965 3.605 25.3325 3.605 19.99C3.605 14.6475 3.625 14.02 3.72 11.9125C3.81 9.9625 4.135 8.9025 4.41 8.1975C4.7725 7.265 5.2075 6.5975 5.9075 5.8975C6.6075 5.1975 7.2725 4.765 8.2075 4.4025C8.9125 4.1275 9.97 3.8025 11.92 3.7125C13.765 3.6275 14.48 3.6025 18.2075 3.6V3.605ZM30.6775 6.925C30.3623 6.925 30.0502 6.98708 29.7591 7.10769C29.4679 7.2283 29.2033 7.40508 28.9804 7.62794C28.7576 7.8508 28.5808 8.11538 28.4602 8.40656C28.3396 8.69774 28.2775 9.00983 28.2775 9.325C28.2775 9.64017 28.3396 9.95226 28.4602 10.2434C28.5808 10.5346 28.7576 10.7992 28.9804 11.0221C29.2033 11.2449 29.4679 11.4217 29.7591 11.5423C30.0502 11.6629 30.3623 11.725 30.6775 11.725C31.314 11.725 31.9245 11.4721 32.3746 11.0221C32.8246 10.572 33.0775 9.96152 33.0775 9.325C33.0775 8.68848 32.8246 8.07803 32.3746 7.62794C31.9245 7.17786 31.314 6.925 30.6775 6.925ZM20.0025 9.73C18.6402 9.70875 17.2872 9.95871 16.0224 10.4654C14.7577 10.972 13.6063 11.7252 12.6354 12.6811C11.6645 13.6369 10.8934 14.7764 10.3671 16.0331C9.8408 17.2899 9.56975 18.6388 9.56975 20.0012C9.56975 21.3637 9.8408 22.7126 10.3671 23.9693C10.8934 25.2261 11.6645 26.3656 12.6354 27.3214C13.6063 28.2773 14.7577 29.0305 16.0224 29.5371C17.2872 30.0438 18.6402 30.2938 20.0025 30.2725C22.6989 30.2304 25.2705 29.1298 27.1624 27.2081C29.0544 25.2865 30.1148 22.6979 30.1147 20.0012C30.1148 17.3046 29.0544 14.716 27.1624 12.7944C25.2705 10.8727 22.6989 9.77207 20.0025 9.73ZM20.0025 13.3325C20.8781 13.3325 21.7451 13.505 22.554 13.84C23.363 14.1751 24.098 14.6662 24.7171 15.2854C25.3363 15.9045 25.8274 16.6395 26.1625 17.4485C26.4975 18.2574 26.67 19.1244 26.67 20C26.67 20.8756 26.4975 21.7426 26.1625 22.5515C25.8274 23.3605 25.3363 24.0955 24.7171 24.7146C24.098 25.3338 23.363 25.8249 22.554 26.16C21.7451 26.495 20.8781 26.6675 20.0025 26.6675C18.2342 26.6675 16.5383 25.965 15.2879 24.7146C14.0375 23.4642 13.335 21.7683 13.335 20C13.335 18.2317 14.0375 16.5358 15.2879 15.2854C16.5383 14.035 18.2342 13.3325 20.0025 13.3325Z" fill="#2ae8d1"/>
                        </a>
                    </svg>
                    <svg className='md:px-2 custom:px-2' height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href='https://github.com/HumanoidX-VITCC'>
                        <path d="M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z" fill="#2ae8d1"/>
                    </a>
                    </svg>
                </div>        
                <div className='md:flex md:justify-center md:items-center custom:flex custom:items-center custom:justify-end'>
                    <p className='center'>Made with ❤️ from HumanoidXVITCC</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer
