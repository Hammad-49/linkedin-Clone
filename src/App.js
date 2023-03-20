import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {

    const user= useSelector(selectUser);

  return ( 
    <div className="app">
    {/* Header */}
    <Header />
    {!user ? (

    <Login />
    ):(
         // {/* App Body*/}
    <div className='app__body'>
      {/* Sidebar*/ }
      <Sidebar />
      {/* Feed*/}
      <Feed />
    {/* Widgets*/ }
    </div>
    )}

    
    </div>
  );
}

export default App;
