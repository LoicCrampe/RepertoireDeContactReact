import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT' :
        return {
            contacts: state.contacts.filter(contact =>
                contact.id !== action.payload)
        };
        default :
        return state;
    }
}

export class Provider extends Component {
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;