import { useState } from 'react'
import Logo from '../assets/images/Travling.png'

function Header(){
    const [count, setCount] = useState(0);
    const incrementCount = () =>{
        setCount(count +1);
    };
    return (
        <header className={" h-[112px] w-[1440px] max-w-full flex flex-row items-center justify-between"}>
        <a
          href="/"
        >
         <img src={Logo} alt="" className='mt-2 h-[35px] w-[141px]' />
        </a>
        <div className='space-x-[80px] font-bold text-[15px]'>
          <a className='hover:text-white' href="/product">
            Product
          </a>
          <a className='hover:text-white' href="/contact">
            Contact
          </a>
          <a className='hover:text-white' href='about-us'>
            About Us
          </a>
        </div>
        <button 
              onClick={incrementCount}
              className='bg-[#FA8443] rounded-lg h-[46px] w-[120px] text-white'>
          Sign Up
        </button>
      </header>
    )
}

export default Header