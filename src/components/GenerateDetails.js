import React from "react";
import PropTypes from "prop-types";

function GenerateDetails(props) {
  if (props.isTrue) {
    return (
      <div className="panel-footer info">
        <img src={props.person.avatar} alt="" />
        <p>{props.person.address}</p>
        <p>{props.person.phone}</p>
        <p>{props.person.occupation}</p>
        <p>{props.person.state}</p>
        <p>Add to Favorites  -
          <span className="glyphicon glyphicon-star-empty" onClick={props.onSelect} />
        </p>
      </div>
    );
  } return (
    <div className="panel-footer info" />
  );
}
GenerateDetails.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
  person: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
    state: PropTypes.string
  })

};

export default GenerateDetails;
