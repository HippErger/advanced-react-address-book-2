import React, {Component} from "react";
import PropTypes from "prop-types";
import GenFaveDetails from "./GenerateDetails";


class FaveDetails extends Component {
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

  render() {
    return (
      <div type="button" className="list-group-item list-group-item-info">
        <div className="panel panel-info">
          <div className="panel-body">
            <a onClick={this.handleBtnClick.bind(this)}>
              {this.props.personOne.firstName + " " + this.props.personOne.lastName}</a>
          </div>
          <GenFaveDetails person={this.props.personOne}
            isTrue={this.state.userWasChoosen}
            onRemove={this.props.toRemove} />
        </div>
      </div>
    );
  }
}

FaveDetails.propTypes = {
  personOne: PropTypes.object.isRequired,
  onUserSelect: PropTypes.func,
  toRemove: PropTypes.func.isRequired,

};

// export default UserDetails;
