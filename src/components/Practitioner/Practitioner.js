import React, { useState, useEffect } from "react";
import { getPractitioners } from "../../services";
import PractitionerCard from "../PractitionerCard/PractitionerCard";
import DateFormat from "../../utils/dateFormate";
import "./Practitioner.css";

const Practitioner = () => {
  const [practitioners, setPractitioners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    getPractitioners().then((res) => {
      setPractitioners(flattenPractitionerObj(res));
      setLoading(false);
    });
  }, []);

  const flattenPractitionerObj = (response) => {
    return (response.data.entry || []).map((item) => {
      const name = item.resource.name || [];
      return {
        id: item.resource.id,
        name: `${((name[0] || {}).given || []).join(" ")} ${
          (name[0] || {}).family
        }`,
        gender: item.resource.gender,
        dob: item.resource.birthDate,
        photo:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      };
    });
  };

  const deletePractitioners = async (id) => {
    // console.log("practitioners", practitioners);
    setDeleteId(id);
    setIsConfirmDialogOpen(true);
  };

  const confirmDelete = async () => {
    const newPractitionerObject = await practitioners.filter(
      (e) => e.id !== deleteId
    );
    await setPractitioners(newPractitionerObject);
    await setIsConfirmDialogOpen(false);
    await setDeleteId(null);
    // console.log("delete practitioners", practitioners);
  };

  const notDelete = () => {
    setIsConfirmDialogOpen(false);
    setDeleteId(null);
  };

  return (
    <>
      <div
        className={
          isConfirmDialogOpen ? "confirmBakground show" : "confirmBakground"
        }
      >
        <div className="confirmModel">
          <h3>Are you sure, you want to delete this record?</h3>
          <button onClick={confirmDelete} className="btn-delete">
            Yes
          </button>
          <button className="btn-no" onClick={notDelete}>
            No
          </button>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <PractitionerCard loading="Loading..." />
        ) : (
          practitioners.map((practitioner) => (
            <PractitionerCard
              key={practitioner.id}
              src={practitioner.photo}
              name={
                practitioner.name.includes("undefined")
                  ? "N/A"
                  : practitioner.name
              }
              gender={practitioner.gender}
              dob={practitioner.dob ? DateFormat(practitioner.dob) : ""}
              handleDelete={() => deletePractitioners(practitioner.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Practitioner;
