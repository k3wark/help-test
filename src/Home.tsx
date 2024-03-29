import './stylesheets/Home.css';
import { Link } from 'react-router-dom';
import FB from './assets/images/socialFB.svg';
import Insta from './assets/images/socialIG.svg';
import TwitX from './assets/images/socialX.svg';
import CardAvatar from './assets/images/historyCardAvatar.svg';
import CardTime from './assets/images/historyCardClock.svg';
import CardReport from './assets/images/historyCardReport.svg';
import TypeEMS from './assets/images/cardEms.svg';
import NextBtn from './assets/images/nextBtn.svg';
import { useState } from 'react';

export default function Home(){

    const user =
    {
        reports: [
            {
                type: 'EMS',
                name: 'Gawr Gura',
                id: 1,
                time: '10:00AM',
                date: '10/01/2023',
                kind: 'Trauma',
                incident: 'Many many blood. Ah.'
            },
            {
                type: 'Security',
                name: 'Nanashi Mumei',
                id: 2,
                time: '9:00AM',
                date: '01/18/2024',
                kind: 'Harassment',
                incident: 'They hurt my feelings'
            },
            {
                type: 'Fire',
                name: 'Takanashi Kiara',
                id: 3,
                time: '11:00AM',
                date: '02/14/2024',
                kind: 'Fire',
                incident: 'Whoops'
            }
        ]
    };

    const [openedReport, setOpenedReport] = useState(user.reports[0]);
    const [currentReportNum, setCurrentReportNum] = useState(1);

    const handleOpenReport = () =>
    {
        setCurrentReportNum(currentReportNum + 1);
        setOpenedReport(user.reports[currentReportNum]);
    }

    return(
        <div className='homeMainDiv'>
            <div className='socialsDiv'>
                <Link to='/'><img src={FB}/></Link>
                <Link to='/'><img src={Insta}/></Link>
                <Link to='/'><img src={TwitX}/></Link>
            </div>

            <div className='historyDiv'>
                <h1 className='homeHistoryTitle'>History</h1>
                        <div className='historyCard' key={openedReport.id}>
                            <img className='cardBg' src={TypeEMS} />
                            <h1 className='cardType'>{openedReport.type}</h1>
                            <div className='cardContent'>
                                <div className='cardDetails'>
                                    <div className='historyDetails'>
                                        <img src={CardAvatar}/>
                                        <div className='historyDetailsRight'>
                                            <h1>{openedReport.name}</h1>
                                            <h2>Request #{openedReport.id}</h2>
                                        </div>
                                    </div>
                                    <div className='historyDetails'>
                                        <img src={CardTime}/>
                                        <div className='historyDetailsRight'>
                                            <h1>{openedReport.time}</h1>
                                            <h2>{openedReport.date}</h2>
                                        </div>
                                    </div>
                                    <div className='historyDetails'>
                                        <img id='reportImg' src={CardReport}/>
                                        <div className='historyDetailsRight'>
                                            <h1>{openedReport.kind}</h1>
                                            <h2>Report</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardReport'>
                                    <h1>Incident Report</h1>
                                    <p>{openedReport.incident}</p>
                                </div>
                            </div>
                        </div>
                <div className='historyBtns'>
                    <div className='historyNavBtns'>
                        <img className='historyPrev' src={NextBtn} onClick={() => {setCurrentReportNum(currentReportNum - 1), setOpenedReport(user.reports[currentReportNum])}} />
                        <p>{currentReportNum}</p>
                        <img className='historyNext' src={NextBtn} onClick={handleOpenReport} />
                    </div>

                    <Link to='/SOS'><button className='sosBtn'>Call S.O.S</button></Link>
                </div>
            </div>

            <div className='UserCard'>
                <div className='avatar'><img src=''/></div>
                <div className='clyr'><a className='sy'>College 3rd Year</a></div>
                <div className='tr'><div className='trtxt'>IPSUM</div></div>
                <div className='ichi'><a className='fn'>First Name</a></div>
                <div className='nii'><a className='ln'>Last Name</a></div>
                <div className='ph'><img src=''/><a className='num'>09XXXXXXXXXX</a></div>
                <div className='crd'><img src=''/><a className='num'>2021309041</a></div>
                <div className='hs'><img src=''/><a className='num'>Hose No. | Barangay | City | Province</a></div>
                <div className='cld'><img src=''/><a className='num'>Emergency Contact Name | Phone Number</a></div>
                <div className='pin'><img src=''></img></div>
            </div>
        </div>
    )
}