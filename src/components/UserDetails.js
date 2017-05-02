import React, {Component} from "react";
import PropTypes from "prop-types";
import GenerateDetails from "./GenerateDetails";


class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userWasChoosen: false,
    };
  }

  handleBtnClick() {
    this.setState( {
      userWasChoosen: !this.state.userWasChoosen
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBtnClick.bind(this)} > More </button>
        <h4>{this.props.personOne.firstName + " " + this.props.personOne.lastName}</h4>
        <GenerateDetails person={this.props.personOne} isTrue={this.state.userWasChoosen} />
      </div>
    );
  }
}

UserDetails.propTypes = {
  personOne: PropTypes.object.isRequired,

};

export default UserDetails;
