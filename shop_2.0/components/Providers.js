import CartProvider from "../contexts/CartProvider";
import ProductsProvider from "../contexts/ProductsProvider";
import AdminProvider from "../contexts/AdminProvider";
import UserProvider from "../contexts/UserProvider";

const Providers = (props) => {
  return (
    <AdminProvider>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>{props.children}</CartProvider>
        </ProductsProvider>
      </UserProvider>
    </AdminProvider>
  );
};

export default Providers;
