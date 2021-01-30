import React, { useState, useEffect } from "react";
import { getPractitioners } from "../services";

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
      setPractitioners({ practitioners: flattenPractitionerObj(res) });
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

  // render() {
  //   const { practitioners } = this.state;
  return (
    <table>
      <thead>
        <tr>
          <th>Profile Image</th>
          <th>Full Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {practitioners.map((practitioner) => (
          <tr key={practitioner.id}>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};
// }

export default Practitioner;
