import React from 'react';

export function ContactList ({contacts}) {
    console.log(contacts);
    return (
        <div>
            {
                contacts.map((contact) => (
                    <div key={contact.phoneNumber}>
                        <p>{contact.name}</p>
                        <p>{contact.title}</p>
                        <p>{contact.text}</p>
                        <p>{contact.image}</p>
                        <p>{contact.tags}</p>
                    </div>
                )
               
                )
            }
        </div>
       
    )
}
