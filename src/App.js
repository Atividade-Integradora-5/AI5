import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Dicas from "./pages/Dicas/Dicas";
import About from "./pages/About-us/About";

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/AI5" element={<Home />} />
         <Route path="/dicas" element={<Dicas />} />
         <Route path="/about-us" element={<About />} />
         {/* Define other routes that you need*/}
       </Routes>
     </main>
   </Router>
 );
};

export default App;