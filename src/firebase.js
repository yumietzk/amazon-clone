import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD35oqr8mrJAFENbgMHPhaBT07xXEeKqCs',
  authDomain: 'clone-172a2.firebaseapp.com',
  projectId: 'clone-172a2',
  storageBucket: 'clone-172a2.appspot.com',
  messagingSenderId: '279228718480',
  appId: '1:279228718480:web:bc158bb808430d418b6715',
  measurementId: 'G-Z5BQMJ7FPK',
});

const auth = firebase.auth();

export { auth };
