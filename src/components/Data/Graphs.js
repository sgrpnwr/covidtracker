import React from "react";
import { Line } from "react-chartjs-2";
import "./Graphs.css"

const Graphs=(props)=>{

return <div class="graph">
<Line
  data={{
    labels: props.indiacases
      .map((indiacase) => {
        return indiacase.Date;
      })
      ,
    datasets: [
      {
        label: "# of Daily confirmed Cases",
        data: props.indiacases
          .map((indiacase) => {
            return indiacase["Daily Confirmed"];
          })
          ,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "# of Recovered Cases",
        data: props.indiacases
          .map((indiacase) => {
            return indiacase["Daily Recovered"];
          })
          ,
        backgroundColor: "rgb(99, 209, 95,0.2)",
        borderColor: "rgb(99, 209, 95)",
        borderWidth: 1,
      },
      
    ],
  }}
  
  options={{ maintainAspectRatio: false,elements: {
                    point:{
                        radius: 1.2
                    }
                }}}
/>
</div>



}

export default Graphs;