import { CartProduct } from "../components/CartProduct";
import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
import FinalBuyPopup from "../components/Modals/FinalBuyPopup";

import styles from "../styles/Home.module.css";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const cartState = useCart();

  const allProducts = Object.entries(cartState.state);

  console.log(allProducts);

  const newProducts = allProducts.map((product) => (
    <CartProduct key={product[0]} {...product[1]} />
  ));

  const totalValue = allProducts.reduce(
    (prev, next) => prev + next[1].price * next[1].quantity,
    0
  );

  function finalModal() {
    setShowModal(true);
  }

  return (
    <div className={styles.cartPage}>
      <main className={styles.mainWrapper}>
        <div className={styles.cart_header}>
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Actions</div>
          <div>Total Price</div>
        </div>
        <div className={styles.cartProducts_Wrapper}>
          <div>{newProducts}</div>
        </div>
        <div className={styles.total_value_wrapper}>
          <div>
            <p>Total Cart Value</p>
            <p>{totalValue} PLN</p>
          </div>
        </div>
        <div className={styles.final_buy_wrapper}>
          <div className={styles.final_buy_button_div}>
            <button onClick={finalModal}>Złóż zamówienie</button>
          </div>
        </div>
      </main>
      <FinalBuyPopup onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
};

export default Cart;
