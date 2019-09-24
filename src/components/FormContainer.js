import React, { Component } from 'react'
import '../Login.css'
import axios from 'axios'
import FormComponent from './FormComponent.js'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            pass: ""

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        axios.post('url', {
            username: this.state.user,
            password: this.state.pass
        }).then(res => console.log("se envio")).catch(err => console.log("error"))
    }

    render() {
        return (
            <FormComponent 
            handleClick={this.handleClick}
            data = {this.state}
            />
        )
    }
}

export default Form
