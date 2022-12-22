import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyAyxkFIvJQZ4hACCoqt8_Zo58lXrKht4P8',
    authDomain: '',
    projectId: 'tiktoktakeover',  
})

const db = firebase.firestore();

console.log(typeof db)