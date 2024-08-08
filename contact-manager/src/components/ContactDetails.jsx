import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';
import "./ContactDetails.css";

const ContactDetails = () => {
    const { id } = useParams();
    const { contacts, selectedContact, setSelectedContact } = useContext(ContactContext);

    useEffect(() => {
        const contact = contacts.find((contact) => contact.id === parseInt(id));
        setSelectedContact(contact);
    }, [id, contacts, setSelectedContact]);

    if (!selectedContact) {
        return <p>Loading contact details...</p>;
    }

    return (
      <div className="container mt-4 contact-details-container">
        <h2 className="contact-details-title">Contact Details</h2>
        <p className="contact-detail"><strong>Name:</strong> {selectedContact.name}</p>
        <p className="contact-detail"><strong>Phone:</strong> {selectedContact.phone}</p>  
      </div>
    );
};

export default ContactDetails;