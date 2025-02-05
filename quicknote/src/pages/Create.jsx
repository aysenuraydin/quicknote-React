import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Create =({dispatch, note})=> {
  const {id: noteId, title, content} = note;
  const navigate = useNavigate();
  const titleInput = useRef(null);

  const add = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;
    if(title && content) {
      if(noteId){
        dispatch({ 
          type: "EDIT_NOTE",
          payload: {id: noteId, title: title,  content: content } 
        });
      }else{
        dispatch({ 
          type: "ADD_NOTE",
          payload: { title: title,  content: content } 
        });
      }
      e.target.reset();
      navigate("/");
    }
  }
  const clear = (e) => {
    if(noteId){
      dispatch({type: "CLEAR_NOTE"});
      navigate("/");
    }
    e.currentTarget.form.reset();
  }
  useEffect(() => {  titleInput.current.focus() },[])

  return(
    <form className='mx-10' onSubmit={add} key={note?.id ?? 0}>
      <div className='flex'>
        <label htmlFor="title" className='w-32'>Title :</label>
        <input type="text" name="title" id="title"
        className='bg-white w-full rounded-lg p-1 border border-gray-300' 
        ref={titleInput}
        defaultValue={title}/>
      </div>
      <div className='flex mt-3'>
        <label htmlFor="content" className='w-32'>Content :</label>
        <textarea name="content" id="content" 
        defaultValue={content}
        className='bg-white w-full rounded-lg p-1 border border-gray-300'/>
      </div>
      <div className="flex ml-[6.3rem] mt-3 gap-x-3">
        <button type="submit" 
        className='bg-white hover:scale-105 cursor-pointer shadow p-1 rounded-lg w-full border border-gray-300 text-sm'>
          {
            (noteId)? 'Edit Note': '+ Add Note'
          }
        </button>
        <button type="button" onClick={clear}
        className='bg-white hover:scale-105 cursor-pointer shadow p-1 rounded-lg w-full border border-gray-300 text-sm'>
          Clear
        </button>
      </div>
    </form>
  )
}