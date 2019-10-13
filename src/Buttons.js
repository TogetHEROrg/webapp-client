import React from 'react'
import phone from './phone.png'
import speaker from './megaphone.png'

import "./Buttons.css"
import axios from 'axios';

class Button extends React.Component {
  
    handleDenuncia() {
        axios.post('http://localhost:3001/alert').then(res => console.log(res)).catch(err => console.log(err))
    }
    handleEmergencia() {
        axios.post('http://localhost:3001/alert').then(res => console.log(res)).catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <button className="buttons-out">
                    X
                </button>
                <br/>
                <button className="btn buttons-emergencia" onClick={this.handleEmergencia}>
                    <img src={phone} alt="Emergencia"/>
                </button>
                <br/>
                <button className="btn buttons-denuncia" onClick={this.handleDenuncia}>
                    <img src={speaker} alt="Denuncia"/>
                </button>

            </div>
        )
    }
}

export default Button