import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-4">
                <div className="navbar-start">
                    <a className="btn btn-ghost font-bold text-xl">Coders</a>
                </div>
                <div className="navbar-center">
                    <div>
                        <ul className="flex font-medium text-xl text-slate-500">
                            <li><a className='pl-5 hover:text-purple-500 duration-500'>Statistics</a></li>
                            <li ><a className='pl-5 hover:text-purple-500 duration-500'>Applied Jobs</a></li>
                            <li><a className='pl-5 hover:text-purple-500 duration-500'>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-accent text-xl font-semibold">
                        Star Applying
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;