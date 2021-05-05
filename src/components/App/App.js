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
            <Route exact path="/">
                <Header />
                <Main />
                <Table />
                <Footer />
            </Route>
            <Route path="/about">
                <Header />
                <About />
                <Table />
                <Footer />
            </Route>
            <Route path="/careers">
                <Header />
                <Careers />
                <Table />
                <Footer />
            </Route>
            <Route path="/contact">
                <Header />
                <Contact />
                <Footer />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
        </div>
    );
}

export default App;
