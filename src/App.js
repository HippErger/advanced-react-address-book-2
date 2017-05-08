import React, {Component} from "react";
import "./App.css";
import FavoritesList from "./components/FavoritesList";
import ListOfUsers from "./components/ListOfUsers";
import PropTypes from "prop-types";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUsers: [],
      nonSelectedUsers: props.users,
      searchText: ""
    };
  }

  getFilteredUsers() {
    return this.props.users.filter((user) => {
      const fullName = user.firstName + user.lastName;
      return fullName.toLowerCase().indexOf(this.state.searchText) !== -1;
    });
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
                  const arr1 = this.state.selectedUsers;
                  const newArr = arr1.filter((person) => {
                    return person.id !== item.id;
                  });
                  this.setState({
                    selectedUsers: newArr,
                  });
                }} />
            </div>
            <div className="col-md-9">
              <h3>Search Users</h3>
              <SearchBar onChange={(value) => {
                this.setState({
                  searchText: value
                });
              }}
                filteredUsers={this.getFilteredUsers} />
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
