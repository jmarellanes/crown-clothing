import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAkN5ikj9bvtX2U8F8afqNQbgGRyuDoAE4',
  authDomain: 'crown-db-2b090.firebaseapp.com',
  databaseURL: 'https://crown-db-2b090.firebaseio.com',
  projectId: 'crown-db-2b090',
  storageBucket: '',
  messagingSenderId: '296340228661',
  appId: '1:296340228661:web:eda80d94f9409364'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
