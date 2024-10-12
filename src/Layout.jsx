import React from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout(){
    
    return (
        <> 
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
    
   
}

export default Layout
//outlet:::////
// -- the purpose of using outlet is that, it will this layout file as the base and
//whatever file or component i am rendering from here, it will keep the layout same,
// as if i call one component as header at the place of header, then outlet will place
//header component as header. and so on for other positioning components

//also because of using outlet we have one more advantage that is, we can 
//do nesting inside of router, or inside of any element.