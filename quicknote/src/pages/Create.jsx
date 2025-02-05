import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Create =({addNote, clearNote, note})=> {
  const {id: noteId, title, content} = note;
  const add = (e) => {
    e.preventDefault();
    // const navigate = useNavigate();

    const title = e.target.title.value;
    const content = e.target.content.value;
    if(title && content) {
      addNote({ title: title,  content: content });
      e.target.reset();
      // navigate("/create");
    }
  }
  const clear = (e) => {
    clearNote();
    e.currentTarget.form.reset();
  }
  return(
    <form className='mx-10' onSubmit={add} key={noteId ?? 0}>
      <div className='flex'>
        <label htmlFor="title" className='w-32'>Title :</label>
        <input type="text" name="title" id="title"
        className='bg-white w-full rounded-lg p-1 border border-gray-300' 
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
          + Add Note
        </button>
        <button type="button" onClick={clear}
        className='bg-white hover:scale-105 cursor-pointer shadow p-1 rounded-lg w-full border border-gray-300 text-sm'>
          Clear
        </button>
      </div>
    </form>
  )
}