import './stylesheets/EMS.css';
import { Link } from 'react-router-dom';
import BackButton from './assets/images/backBtn.svg';

export default function Security(){
    return(
        <div className='emsMainDiv'>
            <Link to='/SOS'><button className='emsBackBtn'><img src={BackButton} /></button></Link>
            <h1 className='emsTitle'>SECURITY DISTRESS</h1>
            <div className='emsContent'>
                <div className='emsLeft'>
                    <div className='emsRadio'>
                        <h2>Concern</h2>
                        <div className='emsRadioOptions'>
                            <label><input type='radio' name='concernSelect' value='Harassment'/><span className='conditionOption'>Harassment</span></label>
                            <label><input type='radio' name='concernSelect' value='Missing Item'/><span className='conditionOption'>Missing Item</span></label>
                            <label><input type='radio' name='concernSelect' value='Commotion'/><span className='conditionOption'>Commotion</span></label>
                            <label><input type='radio' name='concernSelect' value='Missing Person'/><span className='conditionOption'>Missing Person</span></label>
                        </div>
                    </div>
                    <div className='emsOther'>
                        <h2>Specify Other Information</h2>
                        <textarea placeholder='Describe the current condition of the patient'></textarea>
                    </div>
                </div>
                <div className='emsRight'>
                    <div className='emsLocation'>
                        <h2>Location</h2>
                        <input type="text" placeholder='Building' />
                        <input type="text" placeholder='Room No.' />
                        <input type="text" placeholder='Area' />
                    </div>
                    <div className='emsFloor'>
                        <h2>Floor Number</h2>
                        <div className='emsFloorOptions'>
                            <label><input type='radio' name='floorSelect' value='1'/><span className='conditionOption'>1</span></label>
                            <label><input type='radio' name='floorSelect' value='2'/><span className='conditionOption'>2</span></label>
                            <label><input type='radio' name='floorSelect' value='3'/><span className='conditionOption'>3</span></label>
                            <label><input type='radio' name='floorSelect' value='4'/><span className='conditionOption'>4</span></label>
                            <label><input type='radio' name='floorSelect' value='5'/><span className='conditionOption'>5</span></label>
                            <label><input type='radio' name='floorSelect' value='6'/><span className='conditionOption'>6</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <button className='emsSOSBtn'>Send S.O.S</button>
        </div>
    )
}