import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyAJS3WMdqeUnC5lcmIoZujY_kjBAL9ZjfE',
    authDomain: 'gohere-24b3c.firebaseapp.com',
    databaseURL: 'https://gohere-24b3c.firebaseio.com',
    projectId: 'gohere-24b3c',
    storageBucket: 'gohere-24b3c.appspot.com',
    messagingSenderId: '177586513107',
    appId: '1:177586513107:web:ac76b9d590ef07ea'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();