
import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteList } from '../components/NoteList';
    
export const List = ({ notes, dispatch  }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/"); 
  }, [notes]); 
  return (
    <>
      {notes.length > 0 && (
        <div 
          className='border-b text-gray-400 cursor-pointer text-end pr-5 text-sm' 
          onClick={()=> dispatch({ type: "CLEAR_NOTES" })}
        >
          <span>X Clear All</span>
        </div> 
      )}
      
      <NoteList 
        notes={notes} 
        dispatch={ dispatch }
      />
    </>
  );
};
