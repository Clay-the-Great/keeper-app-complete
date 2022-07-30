import React, { useState } from "react";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isClicked, setTextarea] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setTextarea(false);
    event.preventDefault();
  }

  function handleTextareaClick() {
    setTextarea(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          hidden={isClicked ? false : true}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={handleTextareaClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
        />
        <Zoom in={isClicked ? true : false}>
          <Fab onClick={submitNote}>
            <AddToQueueIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
