import React from 'react';
import './App.css';
import AdminDash from '../src/components/AdminDash/AdminDash'
import Booking from '../src/components/Booking/Booking'
import Contact from '../src/components/Contact/Contact'
import Login from '../src/components/Login/Login'
import Main from '../src/components/Main/Main'
import Nav from '../src/components/Nav/Nav'
import Register from '../src/components/Register/Register'
import SetupApp from '../src/components/SetupApp/SetupApp'
import UserDash from '../src/components/UserDash/UserDash'
import UserList from '../src/components/UserList/UserList'

function App() {
  return (
    <div className="App">
     App
     <AdminDash />
     <Booking />
     <Contact />
     <Login />
     <Main />
     <Nav />
     <Register />
     <SetupApp />
     <UserDash />
     <UserList />
    </div>
  );
}

export default App;
