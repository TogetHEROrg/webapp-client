import React, { Component } from 'react';
import '../Login.css';
import axios from 'axios';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            pass: ""

        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {

    }

    handleClick() {
        axios.post('url', {
            username: this.state.user,
            password: this.state.pass
        }).then(res => console.log("se envio")).catch(err => console.log("error"))
    }

    render() {
        return (
            <form className="form">
                <input 
                    type="text"
                    className="form-input"
                    value={this.state.user}
                    name="user"
                    placeholder="Usuario"
                />
                <br/>
                <input
                    type="text"
                    className="form-input"
                    value={this.state.pass}
                    name="pass"
                    placeholder="Contraseña"

                />
                <br/>
                <button onClick={this.handleClick} className="form-button">
                    ENTRAR
                </button>
            </form>
        )
    }
}

export default Login;
