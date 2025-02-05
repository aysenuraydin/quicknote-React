import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return(
      <div className='text-center text-gray-600 py-14 hover:scale-105'>
        <h1 className='text-5xl font-bold'>
        <FontAwesomeIcon icon={faPenToSquare}  className='pr-4'/>
          Quick Note
        </h1>
      </div>
    )
}
export default Header;