import React from "react";
import PropTypes from "prop-types";

function GenerateDetails(props) {
  if (props.isTrue) {
    return (
      <div>
        <img src={props.person.avatar} alt="" />
        <h3>{props.person.address}</h3>
        <h3>{props.person.phone}</h3>
        <h3>{props.person.occupation}</h3>
        <h3>{props.person.state}</h3>
      </div>
    );
  } return (
    <div />
  );


}


GenerateDetails.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  person: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })

};

export default GenerateDetails;
