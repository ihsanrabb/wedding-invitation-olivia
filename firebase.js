import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDXk-SVQLFuZPstIOJsV8JwkaNTqLEBTXs",
  authDomain: "wedding-invitation-1606e.firebaseapp.com",
  projectId: "wedding-invitation-1606e",
  storageBucket: "wedding-invitation-1606e.appspot.com",
  messagingSenderId: "332967824922",
  appId: "1:332967824922:web:cc95399236762161030ba3",
  measurementId: "G-N7J482LPEB"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const analytics = firebase.analytics