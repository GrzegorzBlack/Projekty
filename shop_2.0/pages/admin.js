import { AdminProduct } from "../components/AdminProduct";

import { useProducts } from "../contexts/ProductsProvider";

import { Form } from "../components/Form";

import Popup from "../components/Modals/AdminPopup";

import { useState } from "react";

import styles from "../styles/Home.module.css";

const Admin = () => {
  const [showModal, setShowModal] = useState(true);

  const snacksState = useProducts().snacks;
  const dispatchSnacks = useProducts().dispatch;

  const drinksState = useProducts().drinks;
  const dispatchDrinks = useProducts().dispatch;

  const spiritsState = useProducts().spirits;
  const dispatchSpirits = useProducts().dispatch;

  const snacksProducts = snacksState.map((product) => (
    <AdminProduct
      key={product.id + product.category}
      dispatch={dispatchSnacks}
      {...product}
    />
  ));

  const drinksProducts = drinksState.map((product) => (
    <AdminProduct
      key={product.id + product.category}
      dispatch={dispatchDrinks}
      {...product}
    />
  ));

  const spiritsProducts = spiritsState.map((product) => (
    <AdminProduct
      key={product.id + product.category}
      dispatch={dispatchSpirits}
      {...product}
    />
  ));

  return (
    <>
      <div className={styles.adminPage}>
        <div className={styles.admin_products_wrapper}>
          <div className={styles.snacksPage_wrapper}>
            <div>{snacksProducts}</div>
          </div>
        </div>
        <div className={styles.admin_products_wrapper}>
          <div className={styles.snacksPage_wrapper}>
            <div>{drinksProducts}</div>
          </div>
        </div>
        <div className={styles.admin_products_wrapper}>
          <div className={styles.snacksPage_wrapper}>
            <div>{spiritsProducts}</div>
          </div>
        </div>
        <div className={styles.snacksPage}>
          <div className={styles.admin_form}>
            <Form />
          </div>
        </div>
      </div>
      <Popup onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
};

export default Admin;
