import React from 'react';

export class Note extends React.Component{
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete = () => {
    this.props.deleteNote(this.props.note);
  }
  edit = () => {
    this.props.editNote(this.props.note);
  }
  render(){
    return(
      <div key={this.props.note.id} className='bg-white p-5 mt-5 rounded-lg flex justify-between shadow-lg'>
        <div className="flex flex-col">
          <h3 className='font-bold'>{this.props.note.title}</h3>
          <p className='text-sm'>{this.props.note.content}</p>
        </div>
        <div className='flex flex-col my-auto gap-2'>
          <button type="button" 
          className='border rounded-xl p-1 cursor-pointer bg-gray-600 text-white px-4 hover:bg-gray-400 hover:scale-105 text-sm'
          onClick={this.delete}>
            Delete
          </button>
          <button 
          type="button" 
          className='border rounded-xl p-1 cursor-pointer bg-gray-600 text-white px-4 hover:bg-gray-400 hover:scale-105 text-sm'
          onClick={this.edit}>
            Edit
          </button>
        </div>
      </div>
    )
  }
}