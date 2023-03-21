import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import StatePage from './components/StatePage';
import Goa from './components/Goa';
import AndhraPradesh from './components/AndhraPradesh';
import Kerala from './components/Kerala';
import ArunachalPradesh from './components/ArunachalPradesh';
import Assam from './components/Assam';
import Bihar from './components/Bihar';
import Chhattisgarh from './components/Chhattisgarh';
import Gujarat from './components/Gujarat';
import Haryana from './components/Haryana';
import HimachalPradesh from './components/HimachalPradeesh';
import Jharkhand from './components/Jharkhand';
import Karnataka from './components/Karnataka';
import MadhyaPradesh from './components/MadhyaPradesh';
import Maharashtra from './components/Maharashtra';
import Manipur from './components/Manipur';
import Maeghalaya from './components/Meghalaya';
import Mizoram from './components/Mizoram';
import Nagaland from './components/Nagaland';
import Odisha from './components/Odissa';
import Punjab from './components/Punjab';
import Rajasthan from './components/Rajasthan';
import Westbengal from './components/Westbengal';
import Uttarakhand from './components/uttharakhand';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
         <Route path="/login" element={<LoginPage />}></Route>
         <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/goa" element={<Goa />}></Route>
           <Route path="/AndhraPradesh" element={<AndhraPradesh />}></Route>
           <Route path="/Kerala" element={<Kerala />}></Route>
           <Route path="/ArunachalPradesh" element={<ArunachalPradesh />}></Route>
           <Route path="/Assam" element={<Assam />}></Route>
           <Route path="/Bihar" element={<Bihar />}></Route>
           <Route path="/Chhattisgarh" element={<Chhattisgarh />}></Route>
           <Route path="/Gujarat" element={<Gujarat />}></Route>
           <Route path="/Haryana" element={<Haryana />}></Route>
           <Route path="/HimachalPradesh" element={<HimachalPradesh />}></Route>
           <Route path="/Jharkhand" element={<Jharkhand />}></Route>
           <Route path="/Karnataka" element={<Karnataka />}></Route>
           <Route path="/Kerala" element={<Kerala />}></Route>
           <Route path="/MadhyaPradesh" element={<MadhyaPradesh />}></Route>
           <Route path="/Maharashtra" element={<Maharashtra />}></Route>
           <Route path="/Manipur" element={<Manipur />}></Route>
           <Route path="/Maeghalaya" element={<Maeghalaya />}></Route>
           <Route path="/Mizoram" element={<Mizoram />}></Route>
           <Route path="/Nagaland" element={<Nagaland />}></Route>
           <Route path="/Odisha" element={<Odisha />}></Route>
           <Route path="/Punjab" element={<Punjab />}></Route>
           <Route path="/Rajasthan" element={<Rajasthan />}></Route>
           <Route path="/Uttarakhand" element={<Uttarakhand />}></Route>
           <Route path="/Westbengal" element={<Westbengal />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
