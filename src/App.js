import React, { useEffect, useState } from "react";
import Home from "./components/Home"

function App() {
  setTimeout(()=>{},2000)

  
  const [indiacases,setIndiaCases]=useState([]);
  const [statecases,setStateCases]=useState();
  async function getCovidData() {
    const response = await fetch(
      "https://api.covid19india.org/csv/latest/case_time_series.csv"
    );
    const data = await response.text();
    const jsonData = await convertCSVToJSON(data);
    setTimeout(()=>{setIndiaCases(jsonData);},2000)
  }
  
  useEffect(()=>{
    getCovidData();
    getStatesData();
  },[])
  async function getStatesData() {
    const response = await fetch(
      "https://api.covid19india.org/v4/min/timeseries.min.json"
    );
    const data = await response.json();
    setStateCases(data);
  }
  
    // console.log(statecases.HR.dates);
  
  
  
  
  //Convert CSV to JSON


  function convertCSVToJSON(str, delimiter = ",") {
    const titles = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    return rows.map((row) => {
      // Convert to 2D array
      const values = row.split(delimiter);
      // Convert array to object
      return titles.reduce((object, curr, i) => {
        object[curr] = values[i];
        return object;
      }, {});
    });
  }

  return <Home statecases={statecases} indiacases={indiacases}/>;
}

export default App;
