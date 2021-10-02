import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";



function Note(props) {

  function deleteNote() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <IconButton onClick={deleteNote} aria-label="delete" className="deletebutton">
        <DeleteIcon color="primary" fontSize="small" className="deleteicon" />
      </IconButton>
    </div>
  );
}

export default Note;
