import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredintial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await navigate("/login");
    console.log(userCredintial);
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("user loged out");
    }
  });
};

export const logOut = () => {
  signOut(auth);
};
