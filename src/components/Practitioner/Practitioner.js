import React, { useState, useEffect } from "react";
import { getPractitioners } from "../../services";

import PractitionerCard from "../PractitionerCard/PractitionerCard";
import DateFormat from "../../utils/dateFormate";
const Practitioner = () => {
  const [practitioners, setPractitioners] = useState([]);

  useEffect(() => {
    getPractitioners().then((res) => {
      setPractitioners(flattenPractitionerObj(res));
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

  return (
    <div className="row">
      {practitioners.length > 0 ? (
        practitioners.map((practitioner) => (
          <PractitionerCard
            key={practitioner.id}
            src={practitioner.photo}
            name={practitioner.name}
            gender={practitioner.gender}
            dob={practitioner.dob ? DateFormat(practitioner.dob) : ""}
          />
        ))
      ) : (
        <PractitionerCard loading="Loading.." />
      )}
    </div>
  );
};

export default Practitioner;
