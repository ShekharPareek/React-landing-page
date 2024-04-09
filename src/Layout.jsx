import React from 'react'
import Header from './assets/components/Header'
import Footer from './assets/components/footer'
import {Outlet} from 'react-router-dom'
function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>   
        <Footer/>
        </>
    )
}

export default Layout
