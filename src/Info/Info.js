import React from "react";
import "./Info.css";

function Info(){
    return(
        <div className="info">
        <div className='inside-blocks'>
          <div className="inside">
            <h1>1,700+</h1>
            <p>Over than 1700 companies using Brand India</p>
          </div>
          <div className="inside">
            <h1>$1.4+ billion</h1>
            <p>Helped clients generate over $1.4B funding </p>
          </div>
          <div className="inside">
            <h1>40+ years</h1>
            <p>With over 40 years of global business experience</p>
          </div>
        </div>
      </div>

    );
};

export default Info;