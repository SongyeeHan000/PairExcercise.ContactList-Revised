import React from 'react'
import ContactList from './ContactList'

const ContactRow = (props) => {
    console.log("contactRow", props.contact)
    const contacts = props.contact
    return(
        contacts.map(({id, name, phone, email})=> {
        return (
            <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
        </tr>
        )
        })
    )
}

export default ContactRow