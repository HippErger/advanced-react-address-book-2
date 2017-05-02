import React from "react";


function UserDetails({personOne}) {
  return (
    <div>
      <img src={personOne.avatar} alt="" />
      <h4>{personOne.firstName}</h4>
      <h4>{personOne.lastName}</h4>
      <h3>{personOne.address}</h3>
      <h3>{personOne.phone}</h3>
      <h3>{personOne.occupation}</h3>
      <h3>{personOne.state}</h3>
    </div>
  );

}

export default UserDetails;
