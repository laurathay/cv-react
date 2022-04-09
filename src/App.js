import React from 'react';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// fixing stuff 
const App = () => {
  return (
    <div>

      Hello
        <BrowserRouter>
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/competences" component={Knowledges} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
