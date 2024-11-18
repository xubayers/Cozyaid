/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const auth = getAuth(app);
const AuthContext = createContext();
// google provider
const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        setUser(currUser);
      }
    });

    return () => unSubs();
  }, []);

  // google signin
  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authMethods = {
    signWithGoogle,
  };
  return (
    <AuthContext.Provider value={authMethods}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
