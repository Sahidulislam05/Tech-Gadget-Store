"use client";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { setCookie, deleteCookie } from "cookies-next"; // ⬅ ADD THIS

import AuthContext from "./AuthContext";
import { app } from "@/firebase/firebase.init";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------- CREATE USER ----------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ---------- LOGIN USER ----------
  const loginUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);

    // STEP–1: save token in cookie
    const token = await result.user.getIdToken();
    setCookie("firebaseToken", token, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return result;
  };

  // ---------- GOOGLE LOGIN ----------
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);

    // STEP–1: save token in cookie
    const token = await result.user.getIdToken();
    setCookie("firebaseToken", token, {
      maxAge: 60 * 60 * 24 * 7,
    });

    return result;
  };

  // ---------- UPDATE USER ----------
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // ---------- LOGOUT ----------
  const logOut = async () => {
    await signOut(auth);

    // STEP–3: Delete cookie
    deleteCookie("firebaseToken");
  };

  // ---------- ON AUTH STATE CHANGE ----------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // ---------- FORGET PASSWORD ----------
  const ForgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // ---------- CONTEXT DATA ----------
  const authData = {
    createUser,
    loginUser,
    updateUser,
    logOut,
    googleLogin,
    ForgetPassword,
    user,
    setUser,
    email,
    setEmail,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
