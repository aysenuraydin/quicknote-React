import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    {id:1, title: 'Note 1', content: 'Content 1'},
    {id:2, title: 'Note 2', content: 'Content 2'},
    {id:3, title: 'Note 3', content: 'Content 3'}
  ]);
  const [note, setNote] = useState({});

  const clearAll = () =>  setNotes([]);
  const clearNote = () => setNote({id:'', title: '', content: ''});
  const addNote = (note) => {
    if (note?.id) {
      setNotes((prevNotes) =>
        prevNotes.map((n) =>
          n.id === note.id ? { ...note, id: note.id } : n
        )
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        { id: prevNotes[prevNotes.length - 1]?.id + 1, ...note },
      ]);
    }
    setNote({ id: "", title: "", content: "" });
  };
  const deleteNote = (note) =>   setNotes(notes?.filter(n => n.id !== note.id));
  const editNote = (note) => setNote(note);

  useEffect(() => {
    const json_obj = localStorage.getItem("notes");
    const items = JSON.parse(json_obj);

    if (items && JSON.stringify(items) !== JSON.stringify(notes)) {
      setNotes(items);
    }
  }, []);
  useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <AppRouter
      notes={ notes }
      deleteNote={ deleteNote }
      clearAll={ clearAll }
      editNote={ editNote }
      addNote={ addNote }
      clearNote={ clearNote }
      note={ note }
    />
  );
}
export default App;

// setTimeout(() => {
//   fetch("https://api.github.com/search/users?q=" + keyword)
//     .then(response => response.json())
//     .then(data => this.setState({ users: data.items, loading: false }));
// }, 1000);

//! yapılacaklar
//todo aşağıdaki gibi kendin tekrar yaz
//todo döndüştürebildikleri func a çevir mantığını biliyorsun. state bind life cycle olmayanları yani
//todo tasarım yap
//todo parçalara ayır. route göre yap.

//!!sonra!
//hepsini func çevir hooks ve useefect ile use state
//useref
//usereduce
//usecontext