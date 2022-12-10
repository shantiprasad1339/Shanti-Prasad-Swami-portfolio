import logo from './logo.svg';
import './App.css';
import Boots from './Boots';
import Mainpage from './Portfolio/Mainpage';
import './Portfolio/Portfoliocss.css'
import {BrowserRouter} from 'react-router-dom';
import Technicalskills from './Portfolio/Technicalskills';
import Rcentprojects from './Portfolio/Rcentprojects';
import Aboutpage from './Portfolio/Aboutpage';
import Contacts from './Portfolio/Contacts';
import Navbar from './Portfolio/Navbar';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    {/* // <Boots /> */}
    <Mainpage />
    <Technicalskills />
    <Rcentprojects />
    <Aboutpage />
    <Contacts />
</BrowserRouter>
    </>
  );
}

export default App;
