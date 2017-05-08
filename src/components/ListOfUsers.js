import React from "react";
import AlphaSection from "./AlphaSection";
import PropTypes from "prop-types";

function ListOfUsers(props) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  const everyUser = props.allUsers;

  return (
    <div>
      {alphabet.map((letter, index) => {
        return (
          <AlphaSection key={index}
            letter={alphabet[index]}
            users={everyUser}
            selected={(item) => {
              props.faveUser(item);
            }}
            remove={(item) => {
              props.removeUser(item);
            }} />
        );
      })
      }
    </div>
  );
}

ListOfUsers.propTypes = {
  allUsers: PropTypes.array.isRequired
};

export default ListOfUsers;
