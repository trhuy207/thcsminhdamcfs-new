import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Admin from '../Admin/Admin';

class Page extends Component {
    render() {
        return (
            <>
                <Router>   
                    <NavBar />
                        <Routes>
                            <Route path='/' exact element={<Home />}></Route>
                            <Route path='/contact' exact element={<Contact />}></Route>
                            <Route path='/admin' exact element={<Admin />}></Route>
                        </Routes>
                    <Footer />
                </Router>
            </>
        );
    }
}

export default Page;