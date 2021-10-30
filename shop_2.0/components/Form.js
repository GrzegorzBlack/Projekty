import { useProducts } from "../contexts/ProductsProvider";

export const Form = () => {
  const dispatchSnack = useProducts().dispatch;
  const stateSnack = useProducts().snacks;

  const dispatchDrink = useProducts().dispatch;
  const stateDrink = useProducts().drinks;

  const dispatchSpirit = useProducts().dispatch;
  const stateSpirit = useProducts().spirits;

  let name;
  let price;
  let category;

  function handleChangeName(e) {
    name = e.target.value;
  }

  function handleChangePrice(e) {
    price = e.target.value;
  }

  function handleSelect(e) {
    category = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (category === "Snacks") {
      const id = Math.max(...stateSnack.map((i) => i.id)) + 1;

      dispatchSnack({ id, category, name, price, type: "ADD_PRODUCT" });
    } else if (category === "Drinks") {
      const id = Math.max(...stateDrink.map((i) => i.id)) + 1;

      dispatchDrink({ id, category, name, price, type: "ADD_PRODUCT" });
    } else if (category === "Spirits") {
      const id = Math.max(...stateSpirit.map((i) => i.id)) + 1;

      dispatchSpirit({ id, category, name, price, type: "ADD_PRODUCT" });
    } else {
      console.log("coś nie działa");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="product name"
        type="text"
        placeholder="Enter product name"
        onChange={handleChangeName}
      />
      <input
        type="number"
        placeholder="Enter product price"
        onChange={handleChangePrice}
      />
      <select onChange={handleSelect}>
        <option>Wybierz rodzaj produktu</option>
        <option value="Snacks">Snacks</option>
        <option value="Drinks">Drinks</option>
        <option value="Spirits">Spirits</option>
      </select>
      <button type="submit">Dodaj produkt</button>
    </form>
  );
};
