import React from 'react';

const Header = () => {
    return(
      <div className='text-center text-gray-600 py-14 hover:scale-105'>
        <h1 className='text-5xl font-bold'>
        <svg className='w-14 inline mr-3' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g stroke="#434d5b" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" clip-path="url(#a)"> <path d="M55 139.591 61.173 171l26.432-17.816L136 35.594 103.394 22 55 139.591ZM22 42h72m40 0h36M22 78h57m41 0h50M22 114h41m41 0h66M22 150h34m34 0h32"></path> </g> <defs> <clipPath id="a"> <path fill="#434d5b" d="M0 0h192v192H0z"></path> </clipPath> </defs> </g>
        </svg>
          Quick Note
        </h1>
      </div>
    )
}
export default Header;