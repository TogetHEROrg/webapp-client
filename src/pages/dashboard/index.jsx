import React, { Fragment, useRef } from 'react';
import './styles.css';

// Firebase
import firebase from 'firebase';
import { providers, firebaseAppAuth } from '../../services/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import M from 'materialize-css';

// Assets
import speakerImage from '../../assets/megaphone_img.png';
import phoneImage from '../../assets/phone_img.png';

const Dashboard = ({ signOut }) => {
  const aEl = useRef(null);
  const db = firebase.firestore();

  db.settings({
    timestampsInSnapshots: true,
  });

  const handleEmergency = () => {
    db.collection('reclamos')
      .add({
        date: new Date(),
        description: 'Contaminación Ambiental',
        tipo: 'contaminacion_ambiental',
      })
      .then(() => {
        M.toast({
          html:
            '<span>Reclamo enviado!</span><button class="btn-flat toast-action">👍</button>',
        });
      })
      .catch(() => {
        M.toast({
          html:
            '<span>Algo salio mal...</span><button class="btn-flat toast-action">👎</button>',
        });
      });
  };

  const handleReport = () => {
    aEl.current.click();
    db.collection('reclamos')
      .add({
        date: new Date(),
        description: 'Violencia de Genero',
        tipo: 'violencia_genero',
      })
      .then(() => {
        M.toast({
          html:
            '<span>La ayuda va en camino!</span><button class="btn-flat toast-action">👮‍</button>',
        });
      })
      .catch(() => {
        M.toast({
          html:
            '<span>Algo salio mal...</span><button class="btn-flat toast-action">👎</button>',
        });
      });
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

      <a href="tel:144" className="phone" ref={aEl} />

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
