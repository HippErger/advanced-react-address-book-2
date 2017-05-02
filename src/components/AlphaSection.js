import React from "react";
import UserDetails from "./UserDetails";
import PropTypes from "prop-types";

function AlphaSection(props) {
  const totalUsers = props.users;
  return (
    <ul>
      <li>{props.letter.toUpperCase()}</li>
      {totalUsers.map((item, index) => {
        return (
          <UserDetails key={index} personOne={item} />
        );
      // map through and create a userDetails for each user in the list.
      })}
    </ul>
  );

}

AlphaSection.propTypes = {
  letter: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default AlphaSection;
