import React from 'react';
import './App.css';
import Comments from './components/Comments';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import User from './components/User';
import Info from './components/UserInfo';
import Video from './components/Video';
import Videos from './components/Videos';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Video/>
    </div>
  );
}

export default App;
