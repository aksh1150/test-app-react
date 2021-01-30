import React, { useState, useEffect } from "react";
import { getPractitioners } from "../../services";
import PractitionerCard from "../PractitionerCard/PractitionerCard";
const Practitioner = () => {
  // state = {
  //   practitioners: [],
  // };

  const [practitioners, setPractitioners] = useState([]);

  // componentDidMount() {
  //   getPractitioners().then((res) => {
  //     this.setState({ practitioners: this.flattenPractitionerObj(res) });
  //   });
  // }

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
  const DateFormat = (date) => {
    date = new Date(date);

    var day = ("0" + (date.getDate() + 1)).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return year + "/" + month + "/" + day;
  };
  // render() {
  //   const { practitioners } = this.state;
  return (
    <div className="row">
      {practitioners.map((practitioner) => (
        <PractitionerCard
          key={practitioner.id}
          src={practitioner.photo}
          name={practitioner.name}
          gender={practitioner.gender}
          dob={DateFormat(practitioner.dob)}
        />
      ))}
    </div>
  );
};
// }

export default Practitioner;
