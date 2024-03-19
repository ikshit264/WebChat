import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import { UniqueId } from './UniqueID';
import Message from './Message';

const Chats = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'LiveChat', UniqueId), (doc) => {
            if (doc.exists()) {
                setMessages(doc.data().messages);
            } else {
                console.log('No such document!');
            }
        }, (error) => {
            console.error('Error fetching document: ', error);
        });
        return () => {
            unSub();
        };
    }, []);

    return (
        <div className="w-full">
            <div className="overflow-y-scroll scroll-smooth bg-scroll "
                 style={{
                     height: 'calc(100% - 115px)',
                     scrollbarWidth: 'thin',
                     scrollbarColor: '#888 #f1f1f1',
                 }}>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>
        </div>
    );
};

export default Chats;
