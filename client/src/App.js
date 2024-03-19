import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {unstable_HistoryRouter as Router, Routes, Route} from 'react-router-dom';
import UserContext from './contexts/UserContext';
 import history from './history';
 import MyComponent from './MyComponent'

import './reset.css';
import { getUserData } from './api';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {

  //   if (!user) {
  //     // ідемо за юзером.
  //     // якщо отримуємо її - кладемо у стейт    
  //     console.log('getUserData')
  //     getUserData().then(({data: {data}}) => {
  //       setUser(data)
  //     })
  //   }   
  // }, []);


  return (
    <MyComponent />
    // <Router history={history}>
    //   <UserContext.Provider value={user}>
    //   <Routes>
    //     <Route path='/' exact element={<Home setUser={setUser}/>} />
    //     <Route path='/messenger' element={<Dashboard />} />
    //   </Routes>
    //   </UserContext.Provider>
    // </Router>
  );
}

export default App;

