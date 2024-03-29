import { NavLink } from "react-router-dom"


const Header = () => {

    const menuItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listed-book'>Listed Books</NavLink></li>
        <li><NavLink to='/pages-to-read'>Pages to Read</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-work-sans space-y-7">
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[#23BE0A] text-3xl font-bold font-work-sans">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-work-sans space-x-7">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end space-x-4 font-work-sans invisible lg:visible">
                <button className="bg-[#23BE0A] btn text-white hover:text-[#23BE0A]">Sign In</button>
                <button className="bg-[#59C6D2] btn text-white hover:text-[#59C6D2]">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;