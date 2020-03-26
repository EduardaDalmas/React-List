import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function PersonItem({ person, onDelete }) {
  return (
    <li key={person}>
      <span>{person}</span>
      <IconButton onClick={onDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

PersonItem.defaultProps = {
  person: "without person.",
};

PersonItem.propTypes = {
  person: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default PersonItem;
