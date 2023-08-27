import React from "react";
import styles from "../styles/chat.module.css";
const Chat = () => {
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
          <input className={styles.inputMsg} />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
