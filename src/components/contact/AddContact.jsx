import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

export default class AddContact extends Component {

    state = {
        nom: '',
        email: '',
        tel: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (dispatch, event) => {
        event.preventDefault();
        const newContact = {
            id: uuid(),
            nom: this.state.nom,
            email: this.state.email,
            tel: this.state.tel
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        this.setState({
            nom: '',
            email: '',
            tel: ''
        })

        this.props.history.push('/')
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Ajouter un Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom</label>
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        name="nom" 
                                        placeholder="Entrez un nom ..."
                                        value={this.state.nom}
                                        onChange={this.onChange}
                                        />
                                    </div>
            
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        name="email" 
                                        placeholder="Entrez un email ..."
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        />
                                    </div>
            
                                    <div className="form-group">
                                        <label htmlFor="tel">Téléphone</label>
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        name="tel" 
                                        placeholder="Téléphone ..."
                                        value={this.state.tel}
                                        onChange={this.onChange}
                                        />
                                    </div>
            
                                    <input 
                                    type="submit"
                                    value="Ajouter un Contact"
                                    className="btn btn-block btn-primary"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
