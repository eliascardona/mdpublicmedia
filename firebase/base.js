import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

export const firebaseApp = initializeApp({
	apiKey: "AIzaSyBjviR4fWOQ7jOqENcWXIjAhAzZ61IMo10",
	authDomain: "redsocialmd.firebaseapp.com",
	databaseURL: "https://redsocialmd-default-rtdb.firebaseio.com",
	projectId: "redsocialmd",
	storageBucket: "redsocialmd.appspot.com",
	messagingSenderId: "466052938114",
	appId: "1:466052938114:web:bd4e4623c71dc4faf4f79b",
})

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const firebaseFunctions = getFunctions(firebaseApp);
