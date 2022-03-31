import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: "netflix-f38b2.firebaseapp.com",
	projectId: "netflix-f38b2",
	storageBucket: "netflix-f38b2.appspot.com",
	messagingSenderId: "264133979257",
	appId: "1:264133979257:web:af46276f8be1fd3aa878a8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
