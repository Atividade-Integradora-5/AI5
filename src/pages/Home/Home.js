import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Home.css";
import Carrosel from "./Carrousel";

const Home = () => {
  return (
    <div className="container">
      <div className="top" style={{marginBottom:"20px"}}>
        <h1>Bem Vindos ao Alimentação Infantil</h1>
      </div>

      <div className="objetivo">     
        <h2 style={{textAlign: 'center'}}>Objetivos do Site</h2>
        
      </div>
      <div style={{height:"100%"}}>
      <Carrosel />
      </div>
      
    



    </div>
  );
};

export default Home;
