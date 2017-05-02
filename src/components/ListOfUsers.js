import React, {Component} from "react";
import UserDetails from "./UserDetails";

function ListOfUsers(props) {
  return (
    <ul>
      {props.list.map((item, index) => {
        return (
          <UserDetails key={index} personOne={item} />
      )
      // map through and create a userDetails for each user in the list.
    })}

    </ul>
  );

}

export default ListOfUsers;
