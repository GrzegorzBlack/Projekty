import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { useCart } from "../../contexts/CartProvider";
import styles from "../../styles/Home.module.css";

const FinalBuyPopup = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const dispatchCart = useCart().dispatch;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();

    dispatchCart({ type: "DELETE_CART" });
    console.log("Dispach unlogged zrobiony");
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.popup_wrapper}>
      <div className={styles.popup_div}>
        <div className={styles.popup_header}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <p>Dziękujemy za złożenie zamówienia w naszym sklepie!</p>
        <p>Czas oczekiwania na przesyłkę wynosi: Nie wiadomo.</p>
        <p>Zapraszamy na kolejne zakupy!</p>
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

export default FinalBuyPopup;
