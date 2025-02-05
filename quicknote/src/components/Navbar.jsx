
import React from 'react';
import {  NavLink,Link } from 'react-router-dom';

export const Navbar = ({color, title, bgcolor}) =>{
  return(
    <nav style={{color: color, backgroundColor: bgcolor}}
    className='flex justify-between px-10 p-4 border'>
      <Link to="/" className='tracking-widest'>{title.toUpperCase()}</Link>
      <ul className='flex gap-x-5'>
        <li>
        <NavLink to="/"
          className={({ isActive }) => isActive ? "border-b-2 pb-2" : ""}>
          List</NavLink>
        </li>
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
// Navbar.defaultProps = {
//   color: "white",
//   bgcolor: "gray",
//   title: "Quick Notes"
// }