import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import iconProject from '../assets/icon.png'

const Navbar = () => {
   
  const {user,logout} = useContext(AuthContext)

  const links = <>
  <NavLink><li className="mr-6">Home</li></NavLink>
  <NavLink><li  className="mr-6">About</li></NavLink>
  <NavLink><li>jobs</li></NavLink>
 </>

  const handleLogout = e => {
    e.preventDefault();
    logout()
    .then(() => {
      
      alert('log out successfully')
    })
    .catch(error => {
      console.log(error.message)
    })
  }



  return (
    <div className="navbar bg-purple-400 p-6 sticky backdrop:blur-lg z-50  ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {links}
        </ul>
      </div>
     <img src={iconProject} alt="" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>
    <div className="navbar-end">

     {
      user? <> <button onClick={handleLogout} className="btn btn-primary">Log Out</button></> : <>
       <Link to='/register' className="btn btn-primary mr-3">Register</Link>
       <Link to='/login' className="btn btn-primary mr-3">Log In</Link>
      
      </>
     }
      
    </div>
  </div>
  );
};

export default Navbar;