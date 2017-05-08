import React, {Component} from "react";
import PropTypes from "prop-types";
import GenerateDetails from "./GenerateDetails";


class GenerateFavorite extends Component {
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

  removeUser() {
    console.log("Remove was clicked");
  }

//  <button type="button" class="list-group-item">Cras justo odio</button>
  render() {
    console.log(this.props.personOne + "at top");
    // Not working, this.props.personOne is undefined
    return (
      <button type="button" className="list-group-item list-group-item-info"
        onClick={this.handleBtnClick.bind(this)}>
        <div className="panel panel-info">
          <div className="panel-body">
            <h4>{this.props.personOne.firstName + " " + this.props.personOne.lastName}</h4>
            <a className="btn-danger"> Remove
            </a>
          </div>
          <GenerateDetails person={this.props.personOne}
            isTrue={this.state.userWasChoosen}
            onSelect={this.props.onUserSelect} />
        </div>
      </button>
    );
  }
}

GenerateFavorite.propTypes = {
  personOne: PropTypes.object.isRequired,
  onUserSelect: PropTypes.func

};
