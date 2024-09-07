"use client";

import { useState } from "react";
import styles from "./SignUp.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "../module/Loader";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      toast.error("رمز و تکرار آن برابر نیست ");
    }
    setLoading(true);
    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    console.log(data);
    setLoading(false);
    if (res.status === 201) {
      router.push("/sign-in");
    } else {
      toast.error(data.error);
      setEmail("");
      setPassword("");
      setRepassword("");
    }
  };
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label>ایمیل :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>تکرار رمز عبور :</label>
        <input
          type="password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام{" "}
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید ؟<Link href={"/sign-in"}>ورود</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
