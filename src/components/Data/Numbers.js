import React, { useState } from "react";
import "./Numbers.css";
import $ from "jquery";
const Numbers=(props)=>{
    const date = props.indiacases[props.indiacases.length-1].Date_YMD;
    const index = props.indiacases.findIndex((obj) => obj.Date_YMD === date);
    var day = new Date(date);
    var today = new Date(day);
    today.setDate(day.getDate() + 1);
    const current_day=today.toString().slice(4,15);
     

    //Animating Running Numbers
    setTimeout(()=>{
    const counters = document.querySelectorAll('.counter');
    const speed = 550; // The higher the slower
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
    
        // Lower inc to slow and higher to slow
        const inc = Math.trunc(target / speed);
    
        // console.log(inc);
        // console.log(count);
    
        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = count + inc;
          // Call function every ms
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
    
      updateCount();
    });
    },10);
    
  
    
return <div className="cases">
      
      <h1 className=" typing-demo cases_date">{current_day}</h1>
      <div className="cases_title confirmed data">
        <h1>Confirmed <span class="counter" data-target={props.indiacases[index]["Total Confirmed"]}></span></h1>
        
        <div id="confirmed_change" className="change">+<span class="counter" data-target={props.indiacases[index]["Daily Confirmed"]}></span></div>
      </div>

      <div className="cases_title recovered data">
        <h1>Recovered <span class="counter" data-target={props.indiacases[index]["Total Recovered"]}></span></h1>
        <p id="recovered_change" className="change count">+<span class="counter" data-target={props.indiacases[index]["Daily Recovered"]}></span></p>

      </div>
      
      <div className="cases_title deceased data">
        <h1>Deceased <span class="counter" data-target={props.indiacases[index]["Total Deceased\r"]}></span></h1>
        <p id="deceased_change" className="change">+<span class="counter" data-target={props.indiacases[index]["Daily Deceased"]}></span></p>

      </div>
    </div>



}

export default Numbers;