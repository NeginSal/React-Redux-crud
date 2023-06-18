import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/create' element={< AddUser />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;