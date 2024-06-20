import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
            <span className='text-green-500'>&lt;</span>
             Pass
            <span className='text-green-500'>Op/&gt;</span>
        </div>
      {/* <ul>
        <li className='flex gap-4'> 
        <a className ='hover:font-bold' href=''>Home</a>
         <a className ='hover:font-bold' href=''>About</a> 
         <a className ='hover:font-bold' href=''>Contact Us</a> 
         </li>
      </ul> */}
      <div>
        <a className="flex gap-2 justify-between" href="https://github.com/sr-calidad/react-password-manager" target="_blank">

        <img className="invert w-8 " src="icons/github.png"  />
        <span className='font-bold py-1' >Github</span>
        </a>
      </div>
        </div>
    </nav>
  );
}

export default Navbar;
