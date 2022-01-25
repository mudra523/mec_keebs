import { initializeApp } from "firebase/app"
import "firebase/auth"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyCM3ENAcQGLePN--r_rXfAwIkKLosQOWRY",
    authDomain: "meckeebs-ca164.firebaseapp.com",
    projectId: "meckeebs-ca164",
    storageBucket: "meckeebs-ca164.appspot.com",
    messagingSenderId: "944947661435",
    appId: "1:944947661435:web:de133c009e7e2806f5b0de",
    measurementId: "G-B52LGSDGR7"
};

const app = initializeApp(firebaseConfig)

// export const auth = app.auth()
export default app