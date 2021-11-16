import React from 'react';
import './App.css';
import NytSearch from './components/NytApp';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <NytSearch />
    </div>
  );
}

export default App;