import React, { useState } from 'react';
import Footer from './AppFooter.js';
import Header from './AppHeader.js';
import ListUser from './AppListUsers.js';
import AppAddUser from './AppAddUser.js';
import Banner from './AppBanner.js';
import { BannerProvider } from '../contexts/BannerContext';

export default function AppContent() {
    const [users, setUsers] = useState([]);
    const [usersIndex, setUserIndex] = useState(0);
    
    return (
        <>
        <BannerProvider>
            <Header/>
            <div style={{ margin: '20px' }}>
                <Banner></Banner>
                <AppAddUser users={users} setUsers={setUsers} setUserIndex={setUserIndex} usersIndex={usersIndex} />
                <ListUser users={users} setUsers={setUsers} setUserIndex={setUserIndex} />
            </div>
            <Footer/>
        </BannerProvider>
        </>
    )
}