
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// initializeAuthentication

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
