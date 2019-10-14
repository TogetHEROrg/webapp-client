import React from 'react'

import logo from  './Logo.jpeg'

import './styles.css'

import 'materialize-css/dist/css/materialize.min.css';

import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    emailProvider: new firebase.auth.EmailAuthProvider(),
};

const Login = ({handleChange, values, errors}) => {

        return(
            <div className="container">
            <div className="row">
                <div className="input-cart col s12 m12 l12 z-depth-2 grey lighten-5">
                    <div className="col s12 m6 centrar-imagen">
                        <img src={logo} alt="logo plurales"/>
                    </div>
                    <div className="col s12 m6 login z-depth-4 hoverable">
                        <h4 className="center">Usuario</h4>
                        <br />
                        <Form action="#" method="post" autoComplete="off">

                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input type="text" id="email" value={values.email} onChange={handleChange}/>
                                <label htmlFor="email">Email</label>
                                {
                                     errors.email && <span className="error">{errors.email}</span>
                                }
                            </div>

                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input type="password" id="password" value={values.email} onChange={handleChange}/> 
                                <label htmlFor="password">Contraseña</label>
                                {
                                    errors.password && <span className="error">{errors.password}</span>
                                }
                            </div>
                            <div className="center">
                                <button type="submit" name="submit" className="btn waves-effect waves-light color-boton">ACEPTAR
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
      
   
}

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Ingrese un email valido'),
    password: Yup.string('Debe ingresar un valor').max(10, 'Maximo 10 letras').min(5, 'Minimo 5 letras')
})

const loginFormComponent = withFormik({
    displayName: 'Login Form',
    mapPropsToValues: (props) => ({
        email: null,
        password: null,
    }),
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: loginSchema,
    handleSubmit: (values, { props }) => {
        const { email, password } = values;
        const { signInWithEmailAndPassword } = props;

        signInWithEmailAndPassword(email, password)
            .then(res => localStorage.setItem('access_token', res.user.uid))
            .then(_ => window.location.replace('/Buttons'))
            .catch(err => console.log(err))
    }
})(Login);

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(loginFormComponent);
