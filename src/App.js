import React from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/components/Nav/Nav'

function App() {
  return (
    
    <div className="App">
     App
     <Nav />
     {routes}
    </div>
    
  );
}

export default App;
