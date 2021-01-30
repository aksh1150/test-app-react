import React from "react";
import "./PractitionerCard.css";

const PractitionerCard = ({ data }) => {
  return (
    <div className="row">
      {data.map((practitioner) => (
        <div className="column" key={practitioner.id}>
          <div className="card">
            <img
              src={practitioner.photo}
              alt="Avatar"
              style={{ height: 50, width: 50, borderRadius: "50%" }}
            />
            <div>
              <h3>Name: </h3>
              <h5>{practitioner.name}</h5>
            </div>
            <div>
              <h5>Gender: </h5>
              <p>{practitioner.gender}</p>
            </div>
            <div>
              <h5>DOB: </h5> <p>{practitioner.dob}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PractitionerCard;
