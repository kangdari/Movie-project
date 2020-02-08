import React from 'react';
import { HashRouter, Route } from 'react-router-dom'; 
import Home from './routes/Home';
import Detail from './routes/Detail';
import Search from './routes/Search';

function App() {
  return (
    <HashRouter>
      <Route path='/' component={Home} exact />
      <Route path='/movie/:id' component={Detail} />
      <Route path='/search' component={Search} />
    </HashRouter>
    );
}

export default App;
