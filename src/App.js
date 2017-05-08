import React, {Component} from "react";
import "./App.css";
import FavoritesList from "./components/FavoritesList";
import ListOfUsers from "./components/ListOfUsers";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUsers: [],
      nonSelectedUsers: props.users,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="lead"> Favorites </p>
              <FavoritesList allUsers={this.state.selectedUsers}
                removeUser={(item) => {
                  console.log("From removeUser in App item or person = ", item);
                  const arr1 = this.state.selectedUsers;
                  console.log("From removeUser in App arr1 = ", arr1);
                  const indexOfPerson = arr1.indexOf(item);
                  console.log("From removeUser in App indexOfPerson = ", indexOfPerson);
                  const newArr = arr1.filter((person) => {
                    return (
                      person.id !== item.id
                    );
                  });
                  console.log("From removeUser in App newArr = ", newArr);
                  this.setState({
                    selectedUsers: newArr,
                  });
                  console.log("From end of removeUser in App person = ", item);
                }} />
            </div>
            <div className="col-md-9">
              <ListOfUsers allUsers={this.state.nonSelectedUsers} faveUser={(item) => {
                this.setState({
                  selectedUsers: [
                    ...this.state.selectedUsers,
                    item
                  ]
                });
              }}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
