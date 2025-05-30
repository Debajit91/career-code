import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;