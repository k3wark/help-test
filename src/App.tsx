import './stylesheets/App.css'
import { BrowserRouter as BrowserRouter, Routes, Route} from "react-router-dom";
import { MainLog } from './MainLog.tsx';
import { Navbar } from './components/Navbar.tsx';
import Home from './Home.tsx';
import SOS from './SOS.tsx';
import EMS from './EMS.tsx';
import Security from './Security.tsx';
import Fire from './Fire.tsx';
import FAQ from './FAQ.tsx';
import User from './User.tsx';
import AboutUs from './AboutUs.tsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLog/>} />

          <Route path="/" element={<Navbar/>}>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/FAQs" element={<FAQ/>}/>
            <Route path="/User" element={<User/>}/>
            <Route path="/SOS" element={<SOS/>}/>
            <Route path="/SOS/EMS" element={<EMS/>}/>
            <Route path="/SOS/Security" element={<Security/>}/>
            <Route path="/SOS/Fire" element={<Fire/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <p className='nexusTag'>NEXUS Innovation Labs Inc.</p>
    </div>
  )
}

export default App