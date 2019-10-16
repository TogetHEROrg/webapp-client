import React, { Fragment } from 'react';
import './styles.css';

// Firebase
import { providers, firebaseAppAuth } from '../../services/auth';
import withFirebaseAuth from 'react-with-firebase-auth';

// Assets
import speakerImage from '../../assets/megaphone_img.png';
import phoneImage from '../../assets/phone_img.png';

const Dashboard = ({ signOut }) => {
  const handleEmergency = () => {
    console.log('Press!');
  };

  const handleReport = () => {
    console.log('Press!');
  };

  const handleSignOut = () => {
    signOut()
      .then(() => window.localStorage.removeItem('access_token'))
      .then(() => window.location.replace('/login'))
      .catch(() => window.localStorage.removeItem('access_token'))
      .then(() => window.location.replace('/login'));
  };

  return (
    <Fragment>
      <nav>
        <div className="text">Together App</div>
      </nav>

      <div className="container">
        <button className="btn buttons-emergencia" onClick={handleEmergency}>
          <img src={phoneImage} alt="Emergencia" />
        </button>
        <br />
        <button className="btn buttons-denuncia" onClick={handleReport}>
          <img src={speakerImage} alt="Denuncia" />
        </button>
      </div>

      <div className="fixed-action-btn" onClick={handleSignOut}>
        <a className="btn-floating btn-large red">
          <i className="large material-icons">exit_to_app</i>
        </a>
      </div>
    </Fragment>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Dashboard);
