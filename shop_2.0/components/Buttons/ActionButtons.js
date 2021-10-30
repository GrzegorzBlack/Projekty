import { useCart } from "../../contexts/CartProvider";
import styles from "../../styles/Home.module.css";

function ActionButtons({ product }) {
  const { dispatch } = useCart();

  const handleAddOne = () => {
    dispatch({ product, type: "ADD_QUANTITY" });
  };

  const handleSubstractOne = () => {
    dispatch({ product, type: "SUBSTRACT_QUANTITY" });
  };

  const handleDelete = () => {
    dispatch({ product, type: "DELETE_PRODUCT" });
  };

  return (
    <div className={styles.actionButtonsWrapper}>
      <button onClick={handleAddOne}>+</button>
      <button onClick={handleSubstractOne}>-</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ActionButtons;
