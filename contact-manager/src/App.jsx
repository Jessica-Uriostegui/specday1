import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ContactProvider } from './context/ContactContext';
import AppRouter from './components/Router';
import './App.css';

function App() {
  return (
    <ContactProvider>
      <div className='App'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>Contact Manager</Navbar.Brand>
          </Container>
        </Navbar>
        <AppRouter />
      </div>
    </ContactProvider>
  );
}

export default App;
