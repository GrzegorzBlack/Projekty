import ActionButtons from "./Buttons/ActionButtons";

import styles from "../styles/Home.module.css";

export const CartProduct = ({ id, category, name, price, quantity }) => {
  const keyName = id + category;

  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <p>{quantity}</p>
      <ActionButtons product={keyName} />
      <p>{`${quantity * price} zł`}</p>
    </div>
  );
};
