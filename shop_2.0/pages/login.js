import Link from "next/link";
import { LoginUser } from "../components/LoginUser";

import styles from "../styles/Home.module.css";

const Login = () => {
  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        <LoginUser />
        <div className={styles.login_form_div}>
          <p>You don't have an account?</p>
          <Link href="/register">
            <a
              style={{
                marginTop: "15px",
              }}
            >
              Sing up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
