import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDDXgOzAINmQTGAtqtLI8uvQfJveNe3qNw",
  authDomain: "reminders-macos.firebaseapp.com",
  databaseURL: "https://reminders-macos.firebaseio.com",
  projectId: "reminders-macos",
  storageBucket: "reminders-macos.appspot.com",
  messagingSenderId: "546275226361",
  appId: "1:546275226361:web:8a4d0a6bcda8a82639e828"
});

export const db = firebase.database();
