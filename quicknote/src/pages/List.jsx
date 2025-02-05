import React, { Component } from 'react';

import { NoteList } from '../components/NoteList';
export class List extends React.Component{
  constructor(props){
    super(props);
    this.clearAll = this.clearAll.bind(this);
  }
  clearAll = () => {
    this.props.clearAll();
  }

  render(){
    return (
        <>
          <div className='border-b text-gray-400 cursor-pointer text-end pr-5 text-sm' 
          onClick={this.clearAll}>
            {
              this.props.notes.length > 0 && 
              <span>X Clear All</span>
            }
          </div> 
          <NoteList 
            notes= {this.props.notes} 
            deleteNote = {this.props.deleteNote}
            editNote = {this.props.editNote}
          />
        </>
    )
  }
}