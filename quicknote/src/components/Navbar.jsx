import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

export const Navbar = (props) =>{
      return(
        <nav 
        style={{color: props.color, backgroundColor: props.bgcolor}}
        className='bg-gray-500 flex justify-between px-10 p-4'>
          <h1>{props.title}</h1>
          <ul className='flex gap-x-5'>
            <li><NavLink to="/"
              className={({ isActive }) => isActive ? "border-b-2 pb-2" : ""}>List</NavLink></li>
            <li><NavLink to="/create"  
            className={({ isActive }) => isActive ? "border-b-2 pb-2" : ""}
            >Create</NavLink></li>
          </ul>
        </nav>
      );
}
// Navbar.propTypes = {
//   color: PropTypes.string,
//   title: PropTypes.string,
//   // color: PropTypes.string.isRequired
// }
