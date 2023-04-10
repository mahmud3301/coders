import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-137px)]'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;