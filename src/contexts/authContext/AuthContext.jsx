/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const auth = getAuth(app);
const AuthContext = createContext();
// google provider
const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setIsLoading(false);
      if (currUser) {
        setUser(currUser);
      }
    });

    return () => unSubs();
  }, []);

  // google signin
  const signWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // email and passwird singin
  const singInEmailPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // (sing Up) / (crate new) user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // signout user
  const signoutUser = () => {
    return signOut(auth);
  };

  // reset password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authMethods = {
    signWithGoogle,
    user,
    isLoading,
    singInEmailPass,
    createNewUser,
    updateUserProfile,
    signoutUser,
    setUser,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={authMethods}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
