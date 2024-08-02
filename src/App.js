import {  Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/home';
import Bygenre from './pages/bygenre';

import './app.css';

function App() {
     const location = useLocation()

 

  return (
    <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route  path="/" element={<Home />} />
            <Route path="/bygenre" element={<Bygenre />} />
            </Routes>
            </AnimatePresence>
    );
}

export default App;
