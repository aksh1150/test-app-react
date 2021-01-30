import React, { useState, useEffect } from "react";
import "./PractitionerCard.css";

const PractitionerCard = ({ src, name, gender, dob }) => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img
            src={src}
            alt="Avatar"
            style={{ height: 50, width: 50, borderRadius: "50%" }}
          />
          <div className="left">
            <div>
              <h3>Name: {name}</h3>
            </div>
            <div>
              <h5>Gender: </h5> <p>{gender}</p>
            </div>
            <div>
              <h5>DOB: </h5>
              <p>{dob}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PractitionerCard;
