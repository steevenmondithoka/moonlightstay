

import './App.css';




import {Routes,Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Banner from './components/Banner';
import Footer from './components/Footer';

import Contact from './components/Contact';
import Loginscreen from './screens/Loginscreen';
import Bookingscreen from './screens/Bookingscreen';
import Register from './screens/Register';
import HomePage from './components/HomePage';
import Profiledcreen from './screens/Profiledcreen';
import Adminscreen from './screens/Adminscreen';
import Navy from './components/Navy'
import Gallery from './components/Gallery';
import HotelCard from './screens/HotelCard';
import AuthComponent from './screens/AuthComponent';
import Steeve from './screens/Steeve';
import ServicesComponent from './components/ServicesComponent';
import About from './components/About';
import HomelyPage from './components/HomelyPage';


function App() {
 
  return (
    <div className="App">
     <Navy/>
    
    
     <Routes>
     <Route path='/' exact Component={Banner}/>
     <Route path='/rooms' exact Component={Homescreen}/>
    <Route path='/book/:roomid/:fromdate/:todate' exact Component={Steeve}/>
     <Route path='/contact' exact Component={Contact}/>
     <Route path='/login' exact Component={Loginscreen}/>
     <Route path='/register' exact Component={Register}/>
     <Route path='/home' exact Component={HomePage}/>
     <Route path='/profile' exact Component={Profiledcreen}/>
     <Route path='/admin' exact Component={Adminscreen}/>
     <Route path='/gallery' exact Component={Gallery}/>
     <Route path='/room' exact Component={AuthComponent}/>
     <Route path='/services' exact Component={ServicesComponent}/>
     <Route path='/about' exact Component={About}/>
     <Route path='/homely' exact Component={HomelyPage}/>
     </Routes>
     
     
      <Footer/>
     
    
     
    </div>
  );
}

export default App;
