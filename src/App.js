import React, {Component} from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import UserDetails from "./components/UserDetails";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUsers: [],

    };
  }

  render() {
    const mapFavorites = this.state.selectedUsers.map((item, index) => {
      return <UserDetails key={index} personOne={item} />;
    });

    return (
      <div className="App">
        <div>
          <h3>Favorites</h3>
          {mapFavorites}
          <p>*************************</p>
        </div>
        <ListOfUsers allUsers={this.props.users} faveUser={(item) => {
          console.log("now in app", item);
          this.setState({
            selectedUsers: [
              ...this.state.selectedUsers,
              item
            ]
          });
        }} />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
