import React from "react";
import Numbers from "./Numbers";
import Graphs from "./Graphs";

//CSS

import "./Data.css"

const Data = (props) => {
  return (
    <div className="alldata">
      <Numbers indiacases={props.indiacases} />
      <Graphs indiacases={props.indiacases} />
    </div>
  );
};

export default Data;
