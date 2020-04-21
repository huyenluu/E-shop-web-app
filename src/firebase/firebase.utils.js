import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFkWg0uCeBdQtSYdlQT0IY20xCMxNyQvU",
    authDomain: "eshop-4e9d8.firebaseapp.com",
    databaseURL: "https://eshop-4e9d8.firebaseio.com",
    projectId: "eshop-4e9d8",
    storageBucket: "eshop-4e9d8.appspot.com",
    messagingSenderId: "1011658881873",
    appId: "1:1011658881873:web:ee8bec8294804f0d093170",
    measurementId: "G-0VZZET0M7W"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        console.log(additionalData)
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;