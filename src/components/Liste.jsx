import React, { Component } from 'react'
import Contact from './Contact';

export default class Liste extends Component {

    state = {
        contacts : [
            {
                id: 1,
                nom : 'John Doe',
                email : 'John@gmail.com',
                tel : '0615968435'
            },
            {
                id: 2,
                nom : 'John Doe',
                email : 'John@gmail.com',
                tel : '0615968435'
            },
            {
                id: 3,
                nom : 'John Doe',
                email : 'John@gmail.com',
                tel : '0615968435'
            }
        ]
    }

    supprime = (id) => {
        const newContacts = this.state.contacts.filter(contact =>
            contact.id !== id)

        this.setState({
            contacts: newContacts
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        supprimerClick={() => this.supprime(contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}
