import React, { Component } from 'react';
import { Note } from './Note';

export const NoteList = ({notes,deleteNote, editNote, clearNote}) => { 
  return(
    <div className='max-h-[30rem] overflow-scroll px-3'>
      {notes.map(note => (
        <Note 
          key={note.id} 
          note={note} 
          deleteNote={deleteNote} 
          editNote={editNote} 
          clearNote={clearNote}
        />
      ))}
      {notes.length === 0 && 
        <div className='text-gray-400 text-center p-5 mt-5 bg-white rounded-lg shadow-lg'>
          No Notes Available !
        </div>
      }
    </div>
  )
}