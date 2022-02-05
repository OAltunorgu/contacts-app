import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './styles.css';

function Contacts() {
  const [contacts, setContact] = useState([
    {
      fullName: "Oğulcan Altunörgü",
      phoneNumber: "05338500240"
    },
    {
      fullName: "Ahmet Altunörgü",
      phoneNumber: "05338888888"
    },
    {
      fullName: "Vildan Altunörgü",
      phoneNumber: "05338888887"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContact} contacts={contacts} />
    </div>
  );
}

export default Contacts;