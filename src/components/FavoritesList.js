import React from "react";
import PropTypes from "prop-types";
import FaveDetails from "./FaveDetails";

function FavoritesList(props) {
  return (
    <div className="list-group">
      {props.allUsers.map((item, index) => {
        return (
          <FaveDetails key={index}
            personOne={item}
            toRemove={() => {
              props.removeUser(item);
            }}
            />
        );
      })
      }
    </div>

  );
}

FavoritesList.propTypes = {
  allUsers: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired,

};

export default FavoritesList;
