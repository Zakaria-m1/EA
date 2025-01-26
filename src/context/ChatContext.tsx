// context/ChatContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "./AuthContext";

interface ChatContextProps {
  messages: any[];
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextProps | null>(null);

export const useChat = () => useContext(ChatContext);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<any[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const q = query(collection(db, "chats"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messages);
    });

    return unsubscribe;
  }, [currentUser]);

  const sendMessage = async (text: string) => {
    if (!currentUser) return;

    await addDoc(collection(db, "chats"), {
      text,
      uid: currentUser.uid,
      timestamp: serverTimestamp(),
    });
  };

  const value = {
    messages,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
