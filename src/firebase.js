import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";






const appFirebase = initializeApp(firebaseConfig);

export const authFirebase = getAuth()

export const dbFirebase  = getFirestore(appFirebase);


export default appFirebase