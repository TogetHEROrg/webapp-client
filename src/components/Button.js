import React from 'react'
import phoneCall from
    "/Users/matiasflores/hackaton/webapp-client/src/Images/phone-call.png"
import speaker from "/Users/matiasflores/hackaton/webapp-client/src/Images/speaker.png"
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
                <div onClick={this.handleDenuncia}>
                    <img src={speaker} />
                </div>

            </div>
        )
    }
}

export default Button