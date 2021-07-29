import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import States from "./Data/States";
import Header from "./Header";
import Data from "./Data/Data";
import "./Home.css";

const Home = (props) => {
  
  if (props.indiacases.length>0) { 
    
    
    return (
      <div className="main">
        <Header />
        <Data indiacases={props.indiacases} />
        <States statecases={props.statecases} />
      </div>
    );
  } else {
    return <Header />;            
  }
};
export default Home;
