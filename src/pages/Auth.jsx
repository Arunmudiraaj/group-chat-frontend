import React, { useRef, useState } from "react";
import styles from "../styles/auth.module.css";
import screenshot from "../assets/people-communicate-in-a-group-chat.png";
import api from "../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [auth, setAuth] = useState("login");
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const changeAuthState = () => {
    setAuth((pre) => {
      const newState = pre === "login" ? "signup" : "login";
      return newState;
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      toast.error("Please enter all the fields");
      return;
    }
    if (auth === "signup") {
      const name = nameRef.current.value;
      const phone = phoneRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;
      if (!name || !phone || !confirmPassword) {
        toast.error("Please enter all the fields");
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Confirm password does not match!!");
        return;
      }
      const body = {
        email,
        password,
        name,
        phone,
      };
      try {
        const res = await api.post("/user/signup", body);
        console.log(res);
        toast.success("account created successfully");
        setAuth("login");
      } catch (e) {
        console.log(e);
        if (e.response.data && e.response.data.message) {
          toast.error(e.response.data.message);
          return;
        }
        toast.error("Something went wrong!");
      }
    } else {
      const body = {
        email,
        password,
      };
      try {
        const res = await api.post("/user/login", body);
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/chat");
      } catch (e) {
        console.log(e);
      }
    }
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
              <input
                placeholder="Enter your name"
                className={styles.input}
                ref={nameRef}
                required
              />
            )}
            <input
              placeholder="Enter your email"
              type="email"
              className={styles.input}
              ref={emailRef}
              required
            />
            {auth === "signup" && (
              <input
                placeholder="Enter your phone"
                type="number"
                className={styles.input}
                ref={phoneRef}
                required
              />
            )}
            <input
              placeholder="Enter the password"
              type="password"
              className={styles.input}
              ref={passwordRef}
              required
            />
            {auth === "signup" && (
              <input
                placeholder="Confirm password"
                type="password"
                className={styles.input}
                ref={confirmPasswordRef}
              />
            )}
            <button onClick={submitHandler} className={styles.submitBtn}>
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
