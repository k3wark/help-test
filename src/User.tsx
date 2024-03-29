import './stylesheets/User.css';
import { Link } from 'react-router-dom';
import BackButton from './assets/images/backBtn.svg';
import ProfileIcon from './assets/images/userAvatar.svg'

export default function User(){
    return(
        <div className='userMainDiv'>
            <Link to='/Home'><button className='userBackBtn'><img src={BackButton} /></button></Link>
            <div className='userContent'>
                <div className='profileTop'>
                    <h1>My Profile</h1>
                    <img src={ProfileIcon} />
                </div>
                <h2>First Name</h2>
                <input type="text" />
                <h2>Last Name</h2>
                <input type="text" />
                <h2>Contact Number</h2>
                <input type="text" />
                <h2>Email Address</h2>
                <input type="text" />
                <div className='userPasswordBtn'>
                    <button>Change Password</button>
                </div>
            </div>
        </div>
    )
}