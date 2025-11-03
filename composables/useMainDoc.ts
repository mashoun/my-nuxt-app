import { ref, onMounted } from 'vue'
import { doc, getDoc } from 'firebase/firestore'

export const useMainDoc = () => {
    const { $db } = useNuxtApp()

    const data = ref<Record<string, any> | null>(null)
    const loading = ref(true)
    const error = ref<string | null>(null)

    const fetchMainDoc = async () => {
        try {
            const docRef = doc($db, 'public', 'main')
            const snapshot = await getDoc(docRef)
            data.value = snapshot.exists() ? snapshot.data() : null
        } catch (err: any) {
            console.error('Error fetching main doc:', err)
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    onMounted(fetchMainDoc)

    return { data, loading, error, reload: fetchMainDoc }
}