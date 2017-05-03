import React from "react";
import UserDetails from "./UserDetails";
import PropTypes from "prop-types";

function AlphaSection(props) {
  const totalUsers = props.users;
  const filteredUsers = totalUsers.filter((person) => {
    return (
      person.lastName.charAt(0) === props.letter
    );
  });
  if (filteredUsers.length === 0) {
    return (
      <div>
        <div className="list-group">
          <h3>{props.letter.toUpperCase()}</h3>
          <button className="list-group-item list-group-item-warning">
            <div className="panel panel-info">
              <h6>No Entries</h6>
            </div>
          </button>
        </div>
      </div>
    );
  } return (
    <div>
      <div className="list-group">
        <h3>{props.letter.toUpperCase()}</h3>
        {filteredUsers.map((item, index) => {
          return (
            <UserDetails key={index}
              personOne={item}
              onUserSelect={() => {
                console.log("user was selected in AlphaSection", item);
                props.selected(item);
              }}
              />
          );
        })
        }
      </div>
    </div>
  );
}

AlphaSection.propTypes = {
  letter: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  selected: PropTypes.func.isRequired

};

export default AlphaSection;
