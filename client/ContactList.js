import React from 'react'
import ContactRow from "./ContactRow"
// export default ContactList

// const Color = (props) => {
//     const color = props.color
//     const selectColor = props.selectColor
    
//     return (
//       <div className = {color} onClick= {() => selectColor(color)} />
//     )
//   }

const ContactList = (props) => {
    const contacts = props.contacts
    console.log("props", props)
    
    return (
        <table>
          <tbody>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
            <ContactRow contact = {contacts}/>
        </tbody>
        </table>
    )

}

export default ContactList