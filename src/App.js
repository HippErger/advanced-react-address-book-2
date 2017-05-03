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
// added in container and row as classnames, 7:22
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="lead"> Favorites </p>
              {mapFavorites}
            </div>
          </div>
          <div className="md-col-6">
            <ListOfUsers allUsers={this.props.users} faveUser={(item) => {
              this.setState({
                selectedUsers: [
                  ...this.state.selectedUsers,
                  item
                ]
              });
            }} />
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
