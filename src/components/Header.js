import Menu from './Menu';
import Logo from '../assets/images/Travling.png'
import { Link } from 'react-router-dom';

function Header(){
    
    return (
        <header className={" h-[112px] w-[1440px] max-w-full flex flex-row items-center justify-between"}>
        <a
          href="/"
        >
         <img src={Logo} alt="" className='mt-2 h-[35px] w-[141px]' />
        </a>
        <div className='space-x-[80px] font-bold text-[15px]'>
            <Menu href="/product" label="Product" />
            <Menu href="/contact" label="Contact" />
            <Menu href="/us" label="About Us" />
        </div>
        <Link
            to="/login"
            className="bg-[#FA8443] rounded-lg h-[46px] w-[120px] text-white flex items-center justify-center	">
				<span>Sign In</span>
			  </Link>
      </header>
    )
}

export default Header;