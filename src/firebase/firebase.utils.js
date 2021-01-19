import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBEVNZOuTSZMTKwFQVCSyWBi2JpxbkaYcM',
  authDomain: 'crwn-db-89038.firebaseapp.com',
  projectId: 'crwn-db-89038',
  storageBucket: 'crwn-db-89038.appspot.com',
  messagingSenderId: '467632826886',
  appId: '1:467632826886:web:e78aba8f6aa51e05193187',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
