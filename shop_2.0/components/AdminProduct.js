import styles from "../styles/Home.module.css";

export const AdminProduct = ({ id, dispatch, name, price }) => {
  const handleCLick = () => {
    dispatch({ id, type: "DELETE_PRODUCT" });
  };
  return (
    <div className={styles.adminProductsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <button onClick={handleCLick}>Usuń produkt</button>
    </div>
  );
};
