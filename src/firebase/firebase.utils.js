import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAIJixvy4YFx8ls2eQRkGq4ZNYI_ff7u2Y",
    authDomain: "crwn-db-1117d.firebaseapp.com",
    databaseURL: "https://crwn-db-1117d.firebaseio.com",
    projectId: "crwn-db-1117d",
    storageBucket: "crwn-db-1117d.appspot.com",
    messagingSenderId: "135070285084",
    appId: "1:135070285084:web:253af83dad0451835b4ed9",
    measurementId: "G-C1W3V98FJV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;