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

  changeWord(what) {
    if (what) {
      return "Less";
    } return "More";
  }

//  <button type="button" class="list-group-item">Cras justo odio</button>
  render() {
    return (
      <button type="button" className="list-group-item list-group-item-info"
        onClick={this.handleBtnClick.bind(this)}>
        <div className="panel panel-info">
          <div className="panel-body">
            <h4>{this.props.personOne.firstName + " " + this.props.personOne.lastName}</h4>
          </div>
          <GenerateDetails person={this.props.personOne}
            isTrue={this.state.userWasChoosen}
            onSelect={this.props.onUserSelect} />
        </div>
      </button>
    );
  }
}

UserDetails.propTypes = {
  personOne: PropTypes.object.isRequired,
  onUserSelect: PropTypes.func

};

export default UserDetails;
