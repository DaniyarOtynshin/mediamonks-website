import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Careers from '../Careers/Careers';
import Contact from '../Contact/Contact';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Table from '../Table/Table';

function App() {
    return (
        <div className="page__content">
            <Header />
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/careers">
                <Careers />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Table />
            <Footer />
        </div>
    );
}

export default App;
