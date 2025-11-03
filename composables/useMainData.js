import { useAsyncData } from '#app';
import { doc, getDoc } from 'firebase/firestore'

export const useMainData = () => {
    // useAsyncData handles data fetching during SSR and hydration.
    const { data: mainData, pending, error } = useAsyncData(
        // 1. Key for deduplication (to prevent re-fetching if used elsewhere)
        'firestore-main-data',

        // 2. Fetcher function
        async (db) => {
            let ref = doc(db, "public", "main");
            let docSnap = await getDoc(ref)
            if (docSnap.exists()) {
                // Return the document data, which will be serialized/hydrated by Nuxt
                return docSnap.data();
            } else {
                // Handle case where document doesn't exist
                return null;
            }
        }
    );

    return {
        mainData,
        pending,
        error
    };
};