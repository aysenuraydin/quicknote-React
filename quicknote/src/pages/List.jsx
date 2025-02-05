import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteList } from '../components/NoteList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft} from "@fortawesome/free-solid-svg-icons";

export const List = ({ notes, dispatch  }) => {
   const navigate = useNavigate();
  useEffect(() => {
    navigate("/"); 
  }, [notes]); 
  return (
    <>
      {notes.length > 0 && (
        <div 
          className='border-b text-gray-400 cursor-pointer text-end pr-7 text-sm' 
          onClick={()=> dispatch({ type: "CLEAR_NOTES" })}>
          <FontAwesomeIcon icon={faDeleteLeft} className='pr-2'/>
          Clear All
        </div> 
      )}
      
      <NoteList 
        notes={notes} 
        dispatch={ dispatch }
      />
    </>
  );
};
