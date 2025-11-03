import { FirebaseApp } from 'firebase/app'
import { Firestore } from 'firebase/firestore'

declare module '#app' {
    interface NuxtApp {
        $firebase: FirebaseApp
        $db: Firestore
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $firebase: FirebaseApp
        $db: Firestore
    }
}
