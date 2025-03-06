import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,
    getAuth, signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvCX2sxeg5597LCZ-WzvCIFtpiO1EF1BM",
  authDomain: "netflix-clone-9a0fa.firebaseapp.com",
  projectId: "netflix-clone-9a0fa",
  storageBucket: "netflix-clone-9a0fa.firebasestorage.app",
  messagingSenderId: "928927843589",
  appId: "1:928927843589:web:10d078b7138a844de4236c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        
        
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error("Signup Error:", error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Login Error:", error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout Error:", error);
        alert(error.message);
    }
};

export { auth, db, login, signup, logout };
