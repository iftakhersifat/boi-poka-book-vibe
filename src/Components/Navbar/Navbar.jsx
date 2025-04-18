import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link className='hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A]' to={'/'}>Home</Link>
        <Link className='hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A]' to={'/home'}>About</Link>
        <Link to={'/listedBooks'}>Listed Books</Link>
        <Link to={'/read'}>Pages to Read</Link>
        
      </ul>
    </div>
    <h1 className="text-[28px] font-bold">Book Vibe</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link className='hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A] hover:rounded-lg hover:p-3 p-3' to={'/'}>Home</Link>
    <Link className='hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A] hover:rounded-lg hover:p-3 p-3' to={'/about'}>About</Link>
    <Link className='hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A] hover:rounded-lg hover:p-3 p-3' to={'/listedBooks'}>Listed Books</Link>
    <Link className='hover:border-2 hover:border-[#23BE0A] hover:text-[#23BE0A] hover:rounded-lg hover:p-3 p-3' to={'/read'}>Pages to Read</Link>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn bg-[#23BE0A] text-white rounded-lg">Sign in</a>
    <a className="btn bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;