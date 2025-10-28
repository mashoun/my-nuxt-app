import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import firebaseConfig from "../.env/firebaseConfig.json"

export default defineNuxtPlugin(() => {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      db,
    },
  }
})
