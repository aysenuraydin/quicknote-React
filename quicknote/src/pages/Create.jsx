import React, { Component } from 'react';

export class Create extends React.Component{
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
  }
  add = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    if(title && content) {
      this.props.addNote({ title: title,  content: content });
      e.target.reset();
    }
  }
  clear = (e) => {
    this.props.clearNote();
    e.currentTarget.form.reset();
  }
  render(){
    return(
      <form className='mx-10' onSubmit={this.add}>
        {/* {this.props.note && (this.props.note.id + ' ' + this.props.note.title + ' ' + this.props.note.content)} */}

        <div className='flex'>
          <label htmlFor="title" className='w-32'>Title :</label>
          <input type="text" name="title" id="title"
          className='bg-white w-full rounded-lg p-1 border border-gray-300' 
          defaultValue={this.props.note.title}/>
        </div>
        <div className='flex mt-3'>
          <label htmlFor="content" className='w-32'>Content :</label>
          <textarea name="content" id="content" 
          defaultValue={this.props.note.content}
          className='bg-white w-full rounded-lg p-1 border border-gray-300'/>
        </div>
        <div className="flex ml-[6.3rem] mt-3 gap-x-3">
          <button type="submit" 
          className='bg-white hover:scale-105 cursor-pointer shadow p-1 rounded-lg w-full border border-gray-300 text-sm'>
            + Add Note
          </button>
          <button type="button" onClick={this.clear}
          className='bg-white hover:scale-105 cursor-pointer shadow p-1 rounded-lg w-full border border-gray-300 text-sm'>
            Clear
          </button>
        </div>
      </form>
    )
  }
}