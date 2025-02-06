import React from 'react';
import {  NavLink,Link } from 'react-router-dom';

export const Navbar = ({color, title, bgcolor}) =>{
  return(
    <nav style={{color: color, backgroundColor: bgcolor}}
    className='flex justify-between px-10 p-4 border'>
      <Link to="/" className='tracking-widest'>
      <svg className='w-6 inline mr-2' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" clip-path="url(#a)"> <path d="M55 139.591 61.173 171l26.432-17.816L136 35.594 103.394 22 55 139.591ZM22 42h72m40 0h36M22 78h57m41 0h50M22 114h41m41 0h66M22 150h34m34 0h32"></path> </g> <defs> <clipPath id="a"> <path fill="#ffffff" d="M0 0h192v192H0z"></path> </clipPath> </defs> </g>
      </svg>
        {title.toUpperCase()}
      </Link>









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