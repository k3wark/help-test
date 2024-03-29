import { Link } from 'react-router-dom';
import './stylesheets/MainLog.css'
import HelpLogo from './assets/images/helpLogo.svg';

export function MainLog(){
    return(
        <div className='loginMainDiv'>
            <div className='helpDesc'>
                <img src={HelpLogo} alt="helpLogo"/>
                <div className='helpDescText'>
                    A system that aims to further automate the office of ISSESO into its coverage and to increase its effectiveness on fulfilling its duty; giving more possibilities to community-connection and enhancement of the services the office can provide to the stakeholders of De La Salle Lipa.
                </div>
            </div>
            <div className='loginFill'>
                    <h1>Welcome!</h1>
                    <h2>Login to your account</h2>
                
                    <h3>Username</h3>
                    <input className='loginUsername' type='text' required />
                    <h3>Password</h3>
                    <input className='loginPassword' type='password' required />

                    <Link to="/Home">
                        <button className='loginBtn'>Login</button>
                    </Link>

                    <div className='loginRemFor'>
                        <label className='checkbox'>
                            <input type='checkbox'/>
                            <span className='checkmark'></span>
                            <span className='loginRem'>Remember Me</span>
                        </label>
                        <Link to={"/"}><div className='loginFor'>Forgot Passsword?</div></Link>
                    </div>

                    <Link to={"/"}><div className='loginSignup'>Don't have an account? Sign up here!</div></Link>
            </div>
        </div>
    )
}