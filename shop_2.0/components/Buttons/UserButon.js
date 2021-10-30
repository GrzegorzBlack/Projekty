import Link from "next/link";
import { useCart } from "../../contexts/CartProvider";
import { useUser } from "../../contexts/UserProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

function UserLoggedButton({ to }) {
  const dispatchCart = useCart().dispatch;
  const dispatchIsLogged = useUser().dispatch;
  const stateOfUser = useUser().state;

  console.log(stateOfUser);

  const { userName } = stateOfUser;

  function handleCLick(e) {
    e.preventDefault();
    const payload = {
      isLogged: false,
      userName: userName,
    };
    dispatchCart({ type: "DELETE_CART" });
    dispatchIsLogged({ type: "UNLOGGED", payload });
    console.log("Dispach unlogged zrobiony");
  }
  return (
    <div className={styles.dropdown}>
      <Link href={to}>
        <a className={styles.header_button}>
          <FontAwesomeIcon icon={faUserTie} size="2x" />
        </a>
      </Link>
      <div className={styles.dropdown_content}>
        <div className={styles.dropdown_user}>
          <p>{userName}</p>
        </div>
        <div className={styles.dropdown_user}>
          <Link href={to}>
            <a onClick={handleCLick} className={styles.dropdown_user_logout}>
              Log out
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default UserLoggedButton;
