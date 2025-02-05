import React from 'react';
import { Note } from './Note';

export const NoteList = ({notes, dispatch}) => { 
  return(
    <div className='max-h-[30rem] overflow-scroll px-3'>
      {notes.map((note,index)=> (
        <Note 
          key={index} 
          note={note} 
          dispatch={ dispatch }
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