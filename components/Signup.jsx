import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = field => ({ target }) => {
        this.setState({ [field]: target.value });
    }

    handleSubmit = e => {
        console.log('qqqqqq1', this.state);
        e.preventDefault();

        axios.put('/user', this.state )
            .then(req => {
                console.log('qqqqqq2', req.config.data);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="formStyle">
                    <h3>Введите данные для регестрации</h3>
                    <label className="labelStyle">
                        Логин: 
                        <input type='text' placeholder="UserName" onChange={this.handleChange('login')} />
                    </label>
                    <label className="labelStyle">
                        Пароль: 
                        <input type='text' placeholder="Password" onChange={this.handleChange('password')} />
                    </label>
                    <button className="battonStyle">Зарегестрироваться</button>
                    <h3>Для входа перейдите по ссылке</h3>
                    <Link to="/login">Войти</Link>
                </form>
            </div>
        );
    }
}

export default Signup;
