import React from "react";
import PropTypes from "prop-types";

function GenerateDetails(props) {
  if (props.isTrue) {
    return (
      <div>
        <img src={props.person.avatar} alt="" />
        <p>{props.person.address}</p>
        <p>{props.person.phone}</p>
        <p>{props.person.occupation}</p>
        <p>{props.person.state}</p>
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
