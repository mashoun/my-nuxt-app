import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from "firebase-admin/firestore";
import serviceAccount from "~/firebaseServiceAccount.json"
initializeApp({
    credential: cert(serviceAccount)
});

export default function getFirestore () {
    return {
        db: getFirestore()
    }
}