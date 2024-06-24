'use client';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { Providers } from '@/redux/provider';
import './globals.css';

const RootLayout = ({ children }) => {
    // const email = useSelector((state) => state.user);
    // useEffect(() => {});

    return (
        <html lang="en">
            <head></head>
            <body className="min-h-screen flex bg-[#32323e]">
                <Providers store={store}>
                    {/* <Sidebar /> */}
                    <main className="flex-1">{children}</main>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
