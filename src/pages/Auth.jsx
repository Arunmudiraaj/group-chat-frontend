import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import screenshot from "../assets/screenshot2.png";

const Auth = () => {
  const [auth, setAuth] = useState("login");
  const changeAuthState = () => {
    setAuth((pre) => {
      const newState = pre === "login" ? "signup" : "login";
      return newState;
    });
  };
  return (
    <>
      <h2 className={styles.heading}>Welcome to group chat</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src={screenshot} className={styles.screenshot} />
          <p className={styles.infoText}>
            Create add and chat in the group chat with friends family and your
            closed ones
          </p>
        </div>
        <div className={styles.action}>
          <form className={styles.form}>
            <div className={styles.formHeading}>
              {auth === "login" ? "Log in" : "Sign up"}
            </div>
            {auth === "signup" && (
              <input placeholder="Enter your name" className={styles.input} />
            )}
            <input
              placeholder="Enter your email"
              type="email"
              className={styles.input}
            />
            {auth === "signup" && (
              <input
                placeholder="Enter your phone"
                type="number"
                className={styles.input}
              />
            )}
            <input
              placeholder="Enter the password"
              type="password"
              className={styles.input}
            />
            {auth === "signup" && (
              <input
                placeholder="Confirm password"
                type="password"
                className={styles.input}
              />
            )}
            <button className={styles.submitBtn}>
              {auth === "signup" ? "Sign up" : "Login"}
            </button>
            <div className={styles.line} />
            <div className={styles.bottom}>
              {auth === "signup"
                ? "Already have an account? "
                : "Don't have an account? "}
              <span className={styles.bottomBtn} onClick={changeAuthState}>
                {auth === "signup" ? "Login" : "Sign up"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
