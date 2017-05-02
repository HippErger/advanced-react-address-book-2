import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <ListOfUsers allUsers={props.users} />
    </div>
  );

}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
