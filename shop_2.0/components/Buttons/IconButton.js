import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

function IconButton({ to }) {
  return (
    <Link href={to}>
      <a className={styles.header_button}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="2x"
          //   className={styles.header_cart_icon}
        />
      </a>
    </Link>
  );
}
export default IconButton;
