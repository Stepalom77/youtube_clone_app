import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Video from './components/Video';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Video/>
    </div>
  );
}

export default App;
