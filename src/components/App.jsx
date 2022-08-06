import { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default function App() {

  const savedContacts = () => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  }

  const [contacts, setContacts] = useState(savedContacts)
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  const formSubmitHandler = data => {

    const { name, number } = data;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    
    const nameExists = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (nameExists) {
      alert(`${name} is already in contacts.`)
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts])
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== contactId)))
  };

  return (
    <div
        style={{
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
      </div>
  )
}