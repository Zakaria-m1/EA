import { getFirestore, collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

// Skapa nytt meddelande i chatten
export const sendMessage = async (chatId: string, message: string, senderId: string) => {
    try {
        const docRef = await addDoc(collection(db, 'chats', chatId, 'messages'), {
            message,
            senderId,
            timestamp: new Date(),
        });
        console.log('Meddelande skickat med ID: ', docRef.id);
    } catch (e) {
        console.error('Fel när meddelandet skickades: ', e);
    }
};

// Få alla meddelanden i en chatt i realtid
export const getMessages = (chatId: string, callback: (messages: any[]) => void) => {
    const q = query(collection(db, 'chats', chatId, 'messages'), where('timestamp', '!=', null));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const messages: any[] = [];
        snapshot.forEach((doc) => {
            messages.push({ id: doc.id, ...doc.data() });
        });
        callback(messages);
    });
    return unsubscribe;
};
