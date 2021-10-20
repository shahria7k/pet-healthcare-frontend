
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut as logOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseConfig from '../Config/Firebase/firebase.config';
const useFirebase = () => {
    initializeApp(firebaseConfig);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth();
    const signUpUsingPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUsingPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);

    };
    const signOut = () => {
        logOut(auth)
            .then(() => {
                //state updated with Auth state watcher
            })
            .catch(error => {
                const newError = {};
                newError.errorCode = error.code;
                newError.errorMessage = error.message;
                setError(newError);
            });
    };
    useEffect(() => {
        setIsLoading(true);
        const unmount = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError(null);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return unmount;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const authContext = {
        setIsLoading,
        isLoading,
        error,
        setError,
        user,
        signUpUsingPassword,
        signInUsingPassword,
        signInUsingGoogle,
        signOut
    };
    return {
        authContext
    };
};
export default useFirebase;