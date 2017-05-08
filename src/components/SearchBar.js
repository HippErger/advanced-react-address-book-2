import React from "react";
import PropTypes from "prop-types";

function SearchBar(props) {
  return (
    <form>
      <input type="text" name="query" onChange={(event) => {
        props.onChange(event.target.value);
      }} />
      <div>
        <ul>
          {props.filteredUsers}
        </ul>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,

};

export default SearchBar;
