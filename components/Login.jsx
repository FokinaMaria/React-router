import React, { Component } from 'react';
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            isLoggin: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.exitLogin = this.exitLogin.bind(this);
    }

    handleChange = field => ({ target }) => {
        this.setState({ [field]: target.value });
    }

    handleSubmit = e => {
        console.log('pppppppppppppp', this.state);
        e.preventDefault();

        axios.post('/user', this.state)
            .then(req => {
                if (req.data !== 'error') {
                    this.setState({ isLoggin: true })
                    window.localStorage.setItem('rr_login', 'login')
                } else {
                    this.setState({ isLoggin: false })
                }
                console.log('pppppppppppppp2', req);
                console.log('pppppppppppppp3', req.data);
                console.log('pppppppppppppp4', this.state.isLoggin);
            });

    }
    exitLogin(e) {
        window.localStorage.clear();
    }

    render() {
        const isLoggin = this.state.isLoggin;

        return (
            < div >
                <form onSubmit={this.handleSubmit} className="formStyle">
                    <h3>Введите данные:</h3>
                    <label className="labelStyle">
                        Login:
                    <input type='text' placeholder='login' onChange={this.handleChange('login')} />
                    </label>
                    <label className="labelStyle">
                        Пароль:
                        <input type='text' placeholder="Password" onChange={this.handleChange('password')} />
                    </label>
                    <button className="battonStyle">Войти</button>
                    <button className="battonStyle" onClick={this.exitLogin}>Выйти</button>
                    <Link to="/signup">Зарегестироваться</Link>

                    {isLoggin == true &&
                        <Redirect push to="/secret" />
                    }
                </form>
            </div >
        );
    }
}

export default Login;
