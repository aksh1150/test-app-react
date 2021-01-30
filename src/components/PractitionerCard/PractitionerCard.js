import React from "react";
import PropTypes from "prop-types";
import "./PractitionerCard.css";

const PractitionerCard = ({
  src,
  name,
  gender,
  dob,
  loading,
  handleDelete,
}) => {
  return (
    <div className="column">
      <div className="card">
        {loading ? (
          loading
        ) : (
          <>
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
              <div className="btn-box">
                <button onClick={handleDelete} className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
PractitionerCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  gender: PropTypes.string,
  dob: PropTypes.string,
  loading: PropTypes.string,
};

export default PractitionerCard;
