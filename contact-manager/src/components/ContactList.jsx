import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import{ ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import"./ContactList.css";

const ContactList = () => {
    const { contacts, setSelectedContact } = useContext(ContactContext);

    return (
        <div className="container mt-4 contact-list-container">
          <h2>Contact List</h2>
          <ListGroup className="contact-list-group">
            {contacts.map((contact) => (
              <ListGroup.Item
                key={contact.id}
                action
                onClick={() => setSelectedContact(contact)}
                className="contact-list-item"
              >
                <Link to={`/contacts/${contact.id}`} className="contact-link">
                {contact.name}
                </Link>
              </ListGroup.Item>
            ))}
           </ListGroup>
        </div>
    );
};

export default ContactList;