import { useCart } from "../contexts/CartProvider";

import styles from "../styles/Home.module.css";

export const Product = ({ id, category, name, price, setShow }) => {
  const { dispatch } = useCart();

  // Ważna uwaga dot. działania kodu!!!
  // Przekazujemy setShow i tam jest funkcja playmodal i trzeba
  // wywołać setShow aby wywołać tą funkcję (ciągle się w tym myle)

  const handleCLick = () => {
    dispatch({ id, category, name, price, type: "ADD_PRODUCT" });
  };
  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <div>
        <button
          onClick={() => {
            handleCLick(), setShow(name);
          }}
          className={styles.buyButton}
        >
          Kup
        </button>
      </div>
    </div>
  );
};
