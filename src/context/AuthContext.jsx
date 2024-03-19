import { createContext, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");

  const signIn = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const uid = res.user.uid;
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const userData = userDoc;
        setCurrentUser(userData);
        setError("");
        alert("Registration Success");
      } else {
        setError("User document not found for UID: " + uid);
      }
    } catch (error) {
      setError("Error signing in: " + error.message);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null); // Clear currentUser on sign out
    } catch (error) {
      setError("Error signing out: " + error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
