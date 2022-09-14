import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';
import Comments from './components/Comments';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import User from './components/User';
import Videos from './components/Videos';
import Login from './components/Login';
import Video from './components/Video';
import Posts from './components/Post';

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Videos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<SignIn/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/video/:id' element={<Video/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/comments' element={<Comments/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
