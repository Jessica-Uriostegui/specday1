import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<ContactList />} />
          <Route path='/contacts/:id' element={<ContactDetails />} />
        </Routes>
      </Router>
    );
};

export default AppRouter;