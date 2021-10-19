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

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {});
  };

  //Email and password sign up
  const userSignUp = (email, password, confirmPassword, name) => {
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
        });
    } else {
      setError("Password Do not Match!");
    }
  };

  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
          setUser(auth.currentUser);
          setSignedIn(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const userLogIn = (email, password) => {
    if (password.length < 6) {
      setError("Incorrect password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setError("");
      })
      .catch((error) => {
        setError("Failed to Log In");
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  //observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [signedIn]);

  return {
    user,
    error,
    signInWithGoogle,
    logOut,
    userSignUp,
    userLogIn
  };
};

export default useFirebase;
