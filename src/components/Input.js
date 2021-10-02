import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function Input(props) {
  const [isDisplayed, setDisplay] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
    completed: "false",
  });

  function handleClick() {
    setDisplay(!isDisplayed);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote() {
    props.onAdd(note);
    setNote({
      title: "",
      description: "",
      completed: "false",
    });
  }

  const classes = useStyles();

  return (
    <div>
      <form
        className={(classes.root, "noteInput")}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="title"
          onClick={handleClick}
          onChange={handleChange}
          id="outlined-basic"
          variant="outlined"
          value={note.title}
          label="Note Title"
          color="primary"
        />

        {isDisplayed && (
          <TextField
            name="description"
            onChange={handleChange}
            id="outlined-multiline-static"
            variant="outlined"
            value={note.description}
            multiline={true}
            minRows={4}
            label="Description (optional)"
            color="primary"
          />
        )}
        {isDisplayed && (
          <Zoom in={isDisplayed}>
            <Fab
              className="addbutton"
              size="small"
              aria-label="add"
              color="primary"
            >
              <AddIcon className="addbutton" onClick={submitNote} />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default Input;