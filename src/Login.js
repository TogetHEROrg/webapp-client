import React from 'react'

import logo from  './Logo.jpeg'

import './styles.css'

import 'materialize-css/dist/css/materialize.min.css';

const Login = (props) => {

        return(
            <div className="container">
            <div className="row">
                <div className="input-cart col s12 m12 l12 z-depth-2 grey lighten-5">
                    <div className="col s12 m6 centrar-imagen">
                        <img src={logo} alt="logo plurales"/>
                    </div>
                    <div className="col s12 m6 login z-depth-4 hoverable">
                        <h4 className="center">Ingresar</h4>
                        <br />
                        <form action="#" method="post" autoComplete="off">

                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input type="email" id="email" name="useremail"
                                className="validate" required="required" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input type="password" id="pass" name="password"
                                className="validate" required="required" />
                                <label htmlFor="pass">Contraseña</label>
                            </div>
                            <div className="center">
                                <button type="submit" name="submit" className="btn waves-effect waves-light color-boton">ACEPTAR
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
      
   
}

export default Login