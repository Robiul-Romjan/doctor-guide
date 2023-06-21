import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../../assets/images/Vector.png"



const navOptions = <>
    <NavLink className="me-4" to="/"> <li className="flex items-center"> HOME <FaChevronDown className="ms-1" /> </li> </NavLink>
    <NavLink className="me-4" to="/"> <li className="flex items-center"> FEATURES <FaChevronDown className="ms-1" /> </li> </NavLink>
    <NavLink className="me-4" to="/"> <li className="flex items-center"> DEPARTMENT <FaChevronDown className="ms-1" /> </li> </NavLink>
    <NavLink className="me-4" to="/"> <li className="flex items-center"> EVENT <FaChevronDown className="ms-1" /> </li> </NavLink>
    <NavLink className="me-4" to="/"> <li className="flex items-center"> CONTACT US <FaChevronDown className="ms-1" /> </li> </NavLink>
    
</>;


const Navbar = () => {
    return (
        <div className=" bg-[#273240]">
            <div className="navbar my-container py-4 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white z-50">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="text-[#FF8B42] text-[18px] ms-2 md:text-[28px] font-semibold flex items-center">
                        <img className="w-[28px]" src={logo} alt="" />
                        <span>Doctor Guide</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn me-5">LOGIN</button>
                    <button className="btn">SIGNUP</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;