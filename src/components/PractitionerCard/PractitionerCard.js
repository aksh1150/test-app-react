import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PractitionerCard.css";

/*


    FUNCTIONAL COMPONENT


*/
// const PractitionerCard = ({
//   src,
//   name,
//   gender,
//   dob,
//   handleDelete,
// }) => {
//   return (
//     <div className="column">
//       <div className="card">
//         {loading ? (
//           loading
//         ) : (
//           <>
//             <img
//               src={src}
//               alt="Avatar"
//               style={{ height: 50, width: 50, borderRadius: "50%" }}
//             />
//             <div className="left">
//               <div>
//                 <h3>Name: {name}</h3>
//               </div>
//               <div>
//                 <h5>Gender: </h5> <p>{gender}</p>
//               </div>
//               <div>
//                 <h5>DOB: </h5>
//                 <p>{dob}</p>
//               </div>
//               <div className="btn-box">
//                 <button onClick={handleDelete} className="btn-delete">
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

/*


    CLASS COMPONENT


*/
class PractitionerCard extends Component {
  render() {
    const { src, name, gender, dob, handleDelete } = this.props;
    return (
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
            <div className="btn-box">
              <button onClick={handleDelete} className="btn-delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PractitionerCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  dob: PropTypes.string,
};

export default PractitionerCard;
