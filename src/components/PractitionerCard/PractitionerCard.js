import React, { useState, useEffect } from "react";
import "./PractitionerCard.css";

const PractitionerCard = ({ data }) => {
  return (
    <div className="row">
      {data.map((practitioner) => (
        <div className="column" key={practitioner.id}>
          <div className="card">
            <td>
              <img
                src={practitioner.photo}
                alt="Avatar"
                style={{ height: 50, width: 50, borderRadius: "50%" }}
              />
            </td>
            <td>{practitioner.name}</td>
            <td>{practitioner.gender}</td>
            <td>{practitioner.dob}</td>
          </div>
        </div>
      ))}
      <div className="column">
        <div className="card">
          <h2>title</h2>
          <p>content</p>
        </div>
      </div>
    </div>
  );
};

export default PractitionerCard;
