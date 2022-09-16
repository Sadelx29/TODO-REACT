import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactoComponente from '../form/contacto'

const  ContactList = () => {

    const defaultContact = new Contact('example', 'apellido example', 'email@email.com', false)

  return (
    

    <div>

        <h1>
            Hola {defaultContact.nombre}!
        </h1>
        <div>
            <ContactoComponente contact={defaultContact}>

            </ContactoComponente>
        </div>
    </div>
  )
}

export default ContactList
