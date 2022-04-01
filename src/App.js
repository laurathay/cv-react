import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/competences" component={Knowledges} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </BrowserRouter>
    </div>
  );
};

export default App;
