import {
    collection,
    addDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore'
import { db } from '@/firebaseService/firebase.config'

export const userCollection = collection(db, 'User')

export const addUserData = async (data) => {
    try {
        const timestamp = serverTimestamp()
        const userDataWithTimestamp = {
            ...data,
            createdAt: timestamp,
            updatedAt: timestamp,
        }

        const docRef = await addDoc(userCollection, userDataWithTimestamp)

        await updateDoc(docRef, { id: docRef.id })
    } catch (error) {
        console.error('Error adding document: ', error)
    }
}
