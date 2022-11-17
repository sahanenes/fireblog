import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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

export const createUser = async (email, password) => {
  try {
    let userCredintial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredintial);
  } catch (error) {
    console.log(error);
  }
};
