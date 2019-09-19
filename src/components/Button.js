import React from 'react'
import phoneCall from '../Images/phone.png'

import speaker from '../Images/megaphone.png'

import "../Button.css"
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
            <div className="buttons-alarm">
                <div onClick={this.handleEmergencia}>
                    <img src={phoneCall} />
                </div>
                <br/>
                <div onClick={this.handleDenuncia}>
                    <img src={speaker} />
                </div>

            </div>
        )
    }
}

export default Button