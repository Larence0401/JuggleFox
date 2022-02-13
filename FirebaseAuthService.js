import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import {app} from './FirebaseConfig'

const auth = getAuth(app)

const signupUser = (email,password) => createUserWithEmailAndPassword(auth,email,password)

const loginUser = (email,password) => signInWithEmailAndPassword(auth,email,password)

const logoutUser = () => signOut(auth)

const sendPasswordResetMail = email => sendPasswordResetEmail(auth,email)

const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider).then(res => console.log(res))
}

const subscribeToAuthChanges = handleAuthChange => onAuthStateChanged(auth, user => handleAuthChange(user))

const FirebaseAuthService = {
    signupUser,
    loginUser,
    logoutUser,
    sendPasswordResetMail,
    loginWithGoogle,
    subscribeToAuthChanges
}

export default FirebaseAuthService
