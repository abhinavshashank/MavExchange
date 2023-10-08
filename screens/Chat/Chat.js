import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import { getDatabase, ref, push, onChildAdded, off } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const chatRef = ref(database, 'chat'); // Replace 'chat' with your Firebase database reference

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // Function to send a new message
    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            const message = {
                text: newMessage,
                sender: "You",
            };

            push(chatRef, message); // Push the new message to Firebase
            setNewMessage("");
        }
    };

    useEffect(() => {
        // Listen for new messages from Firebase
        const unsubscribe = onChildAdded(chatRef, (snapshot) => {
            const receivedMessage = snapshot.val();
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        });

        return () => {
            off(unsubscribe); // Unsubscribe from Firebase updates when the component unmounts
        };
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{item.text}</Text>
                        <Text style={styles.senderText}>{item.sender}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    messageContainer: {
        backgroundColor: "#e5e5e5",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: "70%",
        alignSelf: "flex-start",
    },
    messageText: {
        fontSize: 16,
    },
    senderText: {
        fontSize: 12,
        marginTop: 4,
        color: "#555",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 30,
        marginRight: 8,
    },
    sendButton: {
        backgroundColor: "#007bff",
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    sendButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Chat;
