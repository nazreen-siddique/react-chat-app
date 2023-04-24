import firebase from "firebase/compat/app"
import "firebase/compat/auth"


export const auth = firebase.initializeApp({ apiKey:process.env.REACT_APP_API_KEY ,
  authDomain: "chat-app-7bf67.firebaseapp.com",
  projectId: "chat-app-7bf67",
  storageBucket: "chat-app-7bf67.appspot.com",
  messagingSenderId:process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APPID}).auth()