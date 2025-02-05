import React from 'react';
import { NoteList } from '../components/NoteList';
    
export const List = ({ notes, deleteNote, editNote, clearAll, clearNote }) => {
  return (
    <>
      {notes.length > 0 && (
        <div 
          className='border-b text-gray-400 cursor-pointer text-end pr-5 text-sm' 
          onClick={clearAll}
        >
          <span>X Clear All</span>
        </div> 
      )}
      
      <NoteList 
        notes={notes} 
        deleteNote={deleteNote}
        editNote={editNote}
        clearNote={clearNote}
      />
    </>
  );
};
