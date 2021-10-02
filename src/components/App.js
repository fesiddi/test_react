import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import Login from "./Login";
import Input from "./Input";
import axios from "axios"
;

// let isLoggedIn = true;

// const currentTime = new Date().getHours();

function App() {
  const [allNotes, setNotes] = useState([]);

  async function getNotes() {
    try {
      const response = await axios.get('/todolist/todo/')
      const { data } = response
      setNotes(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])

  async function addNote(newNote) {
    try {
      console.log(newNote)
      await axios.post("/todolist/todo/", newNote)
      getNotes()
    } catch (err) {
      console.log(err)
    }
    // setNotes((prevValue) => {
    //   return [...prevValue, newNote];
    // });
  }

  async function deleteNote(id) {
    try {
      await axios.delete(`/todolist/todo/${id}/`)
      getNotes()
    } catch(err){
      console.log(err)
    }
    // setNotes((prevNotes) => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
  }

  return (
    <div>
      <Header />
      <Input placeholder="" type="text" onAdd={addNote} />
      {allNotes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            description={noteItem.description}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;