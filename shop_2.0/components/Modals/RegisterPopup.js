import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const RegisterPopup = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    router.push("/login");
  };

  const modalContent = show ? (
    <div className={styles.popup_wrapper}>
      <div className={styles.popup_div}>
        <div className={styles.popup_header}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <p>Hello</p>
        <p>Your account has been created. You can can log in now.</p>
        <div className={styles.popup_body}>{children}</div>
        <button onClick={handleCloseClick}>OK</button>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default RegisterPopup;
