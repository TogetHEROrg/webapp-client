import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';

// Firebase
import { providers, firebaseAppAuth } from '../../services/auth';
import withFirebaseAuth from 'react-with-firebase-auth';

// Formik
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';

// Assets
import fundationLogo from '../../assets/fundation_logo.jpeg';

const Login = ({ handleChange, values, errors }) => (
  <div className="container">
    <div className="row">
      <div className="card-image">
        <img src={fundationLogo} />
      </div>
      <Form>
        <div className="card-content">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                type="text"
                id="email"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              <label htmlFor="password">Contraseña</label>
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
          </div>
        </div>
        <div className="card-action center">
          <button type="submit" className="btn btn-special waves-effect waves-light color-boton">
            Ingresar
          </button>
        </div>
      </Form>
    </div>
  </div>
);

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Ingrese un email valido'),
  password: Yup.string('Debe ingresar un valor')
    .max(10, 'Maximo 10 letras')
    .min(5, 'Minimo 5 letras'),
});

const loginFormComponent = withFormik({
  displayName: 'Login Form',
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: loginSchema,
  handleSubmit: (values, { props }) => {
    const { email, password } = values;
    const { signInWithEmailAndPassword } = props;

    signInWithEmailAndPassword(email, password)
      .then(res => window.localStorage.setItem('access_token', res.user.uid))
      .then(() => window.location.replace('/dashboard'))
      .catch(() => window.localStorage.removeItem('access_token'));
  },
})(Login);

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(loginFormComponent);
