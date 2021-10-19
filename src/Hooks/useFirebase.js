
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut as logOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initFirebase from '../Configs/Firebase/firebase.config';
const useFirebase = () => {
    initFirebase();
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
        const unmount = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError(null);
            } else {
                setUser(null);
            }
        });
        return unmount;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const authContext = {
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