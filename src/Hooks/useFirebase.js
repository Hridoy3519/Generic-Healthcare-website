import { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
      setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
      
  };

  //Email and password sign up
  const userSignUp = (email, password, confirmPassword, name) => {
      setIsLoading(true);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long!");
      return;
    }
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateUserInfo(name);
          setUser(userCredential.user);
          setError("");
        })
        .catch((error) => {
          setError("Failed to Sign Up");
        })
        .finally(() => setIsLoading(false));
    } else {
      setError("Password Do not Match!");
    }
  };

  const updateUserInfo = (name) => {
      setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
          setUser(auth.currentUser);
          setSignedIn(true);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const userLogIn = (email, password) => {
      setIsLoading(true);
    if (password.length < 6) {
      setError("Incorrect password");
      return;
    }
    return signInWithEmailAndPassword(auth, email, password);
     
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  //observer
  useEffect(() => {
      setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }

      setIsLoading(false);
    });
  }, [signedIn]);

  return {
    user,
    error,
    signInWithGoogle,
    logOut,
    userSignUp,
    userLogIn,
    isLoading,setIsLoading
  };
};

export default useFirebase;
