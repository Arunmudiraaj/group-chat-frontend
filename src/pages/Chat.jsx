import React, { useEffect, useState } from "react";
import styles from "../styles/chat.module.css";
import api from "../axios";
import axios from "axios";
const Chat = () => {
  const [messageInput, setMessageInput] = useState("");
  const messageInputHandler = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessageHandler = async () => {
    const headers = { Authorization: localStorage.getItem("token") };
    try {
      const res = await api.post(
        "/message/sendmessage",
        { message: messageInput },
        { headers }
      );

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const getAllMsg = async () => {
      const headers = { Authorization: localStorage.getItem("token") };
      try {
        const data = await api.get("/message/getall", { headers });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getAllMsg();
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Chat App</h2>
      <div className={styles.allMessages}>
        <div className={styles.message}>You joined</div>
        <div className={styles.message}>Vaibhav joined</div>
        <div className={styles.message}>Vaibhav: Hello</div>
        <div className={styles.message}>You: Hai</div>
        <div className={styles.message}>Vaibhav: supp?</div>
        <div className={styles.message}>You: hmm</div>
      </div>
      <div className={styles.sendMessage}>
        <div>
          <input
            className={styles.inputMsg}
            value={messageInput}
            onChange={messageInputHandler}
          />
          <button onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
