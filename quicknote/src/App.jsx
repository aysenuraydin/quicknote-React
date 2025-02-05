

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


import React, { Component }  from 'react';
import { AppRouter } from './routers/AppRouter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { MainLayout } from './layouts/MainLayout';
import { Create } from './pages/Create';
import { List } from './pages/List';

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    notes: [
      {id:1, title: 'Note 1', content: 'Content 1'},
      {id:2, title: 'Note 2', content: 'Content 2'},
      {id:3, title: 'Note 3', content: 'Content 3'}
    ],
    note:{}
  }
  this.addNote = this.addNote.bind(this);
  this.editNote = this.editNote.bind(this);
  this.deleteNote = this.deleteNote.bind(this);
}
clearAll = () => {
  this.setState({notes: []})
}
clearNote = () => {
  this.setState({note: {id:'', title: '', content: ''}})
}
addNote = (note) => {
  this.setState((prevState) => {
    if (prevState.note?.id) {
      return {
        notes: prevState.notes.map(n => 
          n.id === prevState.note.id 
          ? { ...note, id: prevState.note.id } 
          : n
        ),
        note: {id:'', title: '', content: ''} 
      };
    } 
    
    return {
      notes: [
        ...prevState.notes, 
        { id: prevState.notes.length + 1, ...note }
      ],
      note: {id:'', title: '', content: ''}
    };
  });
};
deleteNote = (note) => {
  this.setState((prevState) => (
    { notes: prevState.notes.filter(n => n.id !== note.id) }
  ));
  console.log("App delete :", note);
}
editNote = (note) => {
  this.setState({note: note});
  console.log("App  edit :", note);
}
componentDidMount() {
  console.log('componentDidMount');

  const json_obj = localStorage.getItem("notes");
  const items = JSON.parse(json_obj);

  if(items) {
      this.setState({
          notes: items
      })
  }
}
componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate');

    if(prevState.notes.length !== this.state.notes.length) {
      const json_str = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", json_str);
    }
}
render() {
  return (
    <AppRouter
      notes={this.state.notes}
      deleteNote={this.deleteNote}
      clearAll={this.clearAll}
      editNote={this.editNote}
      addNote={this.addNote}
      clearNote={this.clearNote}
      note={this.state.note}
    />
  );
  }
}
export default App;

// render(){
//   return (
//     // <RouterProvider router= { router } /> 
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" 
//           element={<List 
//           notes={this.state.notes} 
//           deleteNote={this.deleteNote} 
//           clearAll={this.clearAll} 
//           editNote={this.editNote} />} />
//           <Route path="/list" 
//           element={<List 
//           notes={this.state.notes} 
//           deleteNote={this.deleteNote} 
//           clearAll={this.clearAll} 
//           editNote={this.editNote} />} />
//           <Route path="/create" 
//           element={<Create 
//           addNote={this.addNote} 
//           clearNote={this.clearNote} 
//           note={this.state.note} />} />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }
