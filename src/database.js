import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import config from './db_config.js';

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

const updateMarkedAsRead = async (email, inMarkedAsRead) => {
  try {
    console.log('update MarkedAsRead');
    await updateDoc(doc(db, 'users', email), {
      markedAsRead: inMarkedAsRead,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const updateFavorites = async (email, inFavorites) => {
  try {
    console.log('update Favorites');
    await updateDoc(doc(db, 'users', email), {
      favorites: inFavorites,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// name, addr, phone, email, password, inerest
const registerWithEmailAndPassword = async (name, addr, phone, email, password, interests) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const userData = {
      uid: user.uid,
      name,
      addr,
      phone,
      authProvider: 'local',
      email,
      markedAsRead: '',
      favorites: '',
      interests,
    };

    await setDoc(doc(db, 'users', email), userData);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  updateFavorites,
  updateMarkedAsRead,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

