import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAj_0Hro_UkeNEl754bHhfUxjvNKqEnEK8",
    authDomain: "fir-6ac86.firebaseapp.com",
    databaseURL: "https://fir-6ac86.firebaseio.com",
    projectId: "fir-6ac86",
    storageBucket: "fir-6ac86.appspot.com",
    messagingSenderId: "1038720155956",
    appId: "1:1038720155956:web:980a97094610b73599a561"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };