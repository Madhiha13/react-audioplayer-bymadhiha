import React from 'react';
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import View from './routes/View'; 
import Home from "./routes/Home";

import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<View />} /> 
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
