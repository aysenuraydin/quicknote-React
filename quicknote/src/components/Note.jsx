import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Note = ({ note, dispatch }) => {
  const { id = 0, title, content } = note;
  const [value, setValue] = useState(false);
  const navigate = useNavigate();

  const edit = () => {
    dispatch({ 
      type: "GET_NOTE", 
      payload: note 
    })
    setValue(!value); 
  };

  useEffect(() => {
    if (value) {
      navigate("/create"); 
    }
  }, [value]); 

  useEffect(() => {
    dispatch({type: "CLEAR_NOTE"});
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
        onClick={()=> {
          dispatch({ 
            type: "DELETE_NOTE", 
            payload: note 
          })
        }}>
          Delete <FontAwesomeIcon icon={faTrash} className='ml-2'/>
        </button>
        <button 
        type="button" 
        className='border rounded-xl p-1 cursor-pointer bg-gray-600 text-white px-4 hover:bg-gray-400 hover:scale-105 text-sm'
        onClick={edit}>
          Edit <FontAwesomeIcon icon={faPenToSquare} className='ml-2'/>
        </button>
      </div>
    </div>
  )
}
