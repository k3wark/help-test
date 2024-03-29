import './component-css/Navbar.css';
import {Link, NavLink, Outlet} from "react-router-dom"
import {useState} from 'react';
import HelpLogo from '../assets/images/helpLogo.svg';
import UserAvatar from '../assets/images/userAvatar.svg'

export const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <div>
        <nav>
            <div className='navLinks'>
                <Link to="/Home"><img src={HelpLogo}/></Link>
                <NavLink to="/Home"><p className='navLinkText'>Home</p></NavLink>
                <NavLink to="/AboutUs"><p className='navLinkText'>About Us</p></NavLink>
                <NavLink to="/FAQs"><p className='navLinkText'>FAQs</p></NavLink>
                <NavLink to="/SOS"><p className='navLinkText'>Call S.O.S</p></NavLink>
            </div>

            <div className='navUser' onClick={() => setOpen(!open)}>
                <p className='userText'>User</p>
                <div className='userAvatar'><img src={UserAvatar}/></div>

                {
                    open &&
                    <div className='dropdownContent'>
                        <div className='dropdownArrowContainer'><div className='dropdownArrow'></div></div>
                        <div className='dropdownMenu'>
                            <Link to ="/User"><p>User Profile</p></Link>
                            <Link to ="/"><p>Logout</p></Link>
                        </div>
                    </div>
                }
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}