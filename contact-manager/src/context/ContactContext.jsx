import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts] = useState([
    { id: 1, name: 'John Doe', phone: '1234567890' },
    { id: 2, name: 'Jane Doe', phone: '0987654321' }, 
    { id: 3, name: 'John Smith', phone: '1234567890' },
    { id: 4, name: 'Jane Smith', phone: '0987654321' },

  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContactContext, ContactProvider };