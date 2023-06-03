import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "../src/assets/css/aos.css"
import "../src/assets/css/style.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/gdpr-cookie.css"
// import "../src/assets/css/gdpr-cookie.css"
// import "../src/assets/css/responsive.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "../src/components/Home";
import Details from "../src/components/Details";
import Banks from './components/Banks';
import Banksdetails from './components/Bankdetails';
import About from './components/About';
import Services from './components/Services';
import Realestatedetils from './components/Realestatedetils';
import Testing from './components/Testing';
import Insurance from './components/Insurance';

function App() {

  return (
    <div >
     <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}>
        <Route path="details" element={<Details />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/loans/:name" element={<Banks />} />
        <Route path="/bankdetails" element={<Banksdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realestatedetils/:title" element={<Realestatedetils />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/insurance/:name" element={<Insurance />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
