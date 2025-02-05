import React, { Component } from 'react';
import { Note } from './Note';
export class NoteList extends React.Component{
  render(){
    return(
      <div className='max-h-[30rem] overflow-scroll px-3'>
        {this.props.notes.map(note => (
          <Note 
            key={note.id} 
            note={note} 
            deleteNote={this.props.deleteNote}
            editNote={this.props.editNote}
          />
        ))}
        {this.props.notes.length === 0 && 
          <div className='text-gray-400 text-center p-5 mt-5 bg-white rounded-lg shadow-lg'>
            No Notes Available !
          </div>
        }
      </div>
    )
  }
}