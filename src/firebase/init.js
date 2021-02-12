import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCFSDR7hRGGXmS3XY47e8ofTp3oow9m9k",
    authDomain: "huis-artsen-app.firebaseapp.com",
    databaseURL: "https://huis-artsen-app-default-rtdb.firebaseio.com",
    projectId: "huis-artsen-app",
    storageBucket: "huis-artsen-app.appspot.com",
    messagingSenderId: "96537937449",
    appId: "1:96537937449:web:01c69a1874ff49fc58be38"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()