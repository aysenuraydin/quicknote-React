import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Note = ({ note, deleteNote, editNote, clearNote }) => {
  const { id, title, content } = note;
  const [value, setValue] = useState(false);
  const navigate = useNavigate();

  const edit = () => {
    editNote(note); 
    setValue(!value); 
  };

  useEffect(() => {
    if (value) {
      navigate("/create"); 
    }
  }, [value]); 

  useEffect(() => {
    clearNote();
  }, []); 
  
  return(
    <div key={id} className='bg-white p-5 mt-5 rounded-lg flex justify-between shadow-lg'>
      <div className="flex flex-col w-full mr-5">
        <h3 className='font-bold'>{title}</h3>
        <p className='text-sm w-full'>{content}</p>
      </div>
      <div className='flex flex-col my-auto gap-2'>
        <button type="button" 
        className='border rounded-xl p-1 cursor-pointer bg-gray-600 text-white px-4 hover:bg-gray-400 hover:scale-105 text-sm'
        onClick={()=> deleteNote(note)}>
          Delete
        </button>
        <button 
        type="button" 
        className='border rounded-xl p-1 cursor-pointer bg-gray-600 text-white px-4 hover:bg-gray-400 hover:scale-105 text-sm'
        onClick={edit}>
          Edit
        </button>
      </div>
    </div>
  )
}
