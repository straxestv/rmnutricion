import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class AdmUser extends Component {

    state = {
        email: '',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('/api/adm/users');
        this.setState({
            users: res.data
        });
    }



/*
    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }
*/
    render() {
        return (
            <div className="row">
                
                <h1>Usuarios</h1>
                <div className="col-md-8 my-5 ms-5">
                    <ul className="list-group ">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item blanco AmdUser list-group-item" >
                                    
                                    <p>Nombre:{user.name}---------Boleta:{user.email} </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
