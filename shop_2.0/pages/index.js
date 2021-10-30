import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage_wrapper}>
        <div className={styles.welcome_wrapper}>
          <div className={styles.mainPage_h1_wrapper}>
            <h1>Welcome to React Shop!</h1>
            <h2>Choose your buying options:</h2>
          </div>
        </div>
        <div className={styles.or_wrapper}>
          <div>
            <h1>OR</h1>
          </div>
        </div>
        <div className={styles.options_wrapper}>
          <div>
            <p>Log in if you already have an account</p>
            <Link href="/login">
              <button>Click</button>
            </Link>
            <p>If not click to Register</p>
            <Link href="/register">
              <button>Register</button>
            </Link>
          </div>
          <div>
            <p>Buy without logging </p>
            <Link href="/snacks">
              <button>Click</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
