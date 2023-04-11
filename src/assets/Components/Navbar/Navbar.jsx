import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100 p-4">
                <div class="lg:hidden navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='pl-5 bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600'>Home</Link></li>
                            <li><Link to='/Statistics' className='pl-5 hover:text-purple-500 duration-500'>Statistics</Link></li>
                            <li ><Link to='/Jobs' className='pl-5 hover:text-purple-500 duration-500'>Applied Jobs</Link></li>
                            <li><Link to='/Blogs' className='pl-5 hover:text-purple-500 duration-500'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center justify-center lg:justify-start lg:navbar-start">
                    <Link class="p-5 font-bold text-xl mr-20" to="/">Coders</Link>
                </div>
                <div class="hidden lg:flex navbar-center">
                    <ul class="flex font-medium text-xl text-slate-500">
                        <li><Link to="/" class="pl-5 bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-purple-600">Home</Link></li>
                        <li><Link to="/Statistics" class="pl-5 hover:text-purple-500 duration-500">Statistics</Link></li>
                        <li><Link to="/Jobs" class="pl-5 hover:text-purple-500 duration-500">Applied Jobs</Link></li>
                        <li><Link to="/Blogs" class="pl-5 hover:text-purple-500 duration-500">Blog</Link></li>
                    </ul>
                </div>
                <div class="navbar-end sm:ml-8">
                    <button className="btn rounded-lg bg-gradient-to-r text bg-clip-btn from-indigo-500 to-purple-600 text-white">Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;