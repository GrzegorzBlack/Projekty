import Link from "next/link";

import { useAdmin } from "../../contexts/AdminProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

function AdminButton({ to, toAdmin }) {
  const dispatchIsLogged = useAdmin().dispatch;

  function handleCLick() {
    dispatchIsLogged({ type: "UNLOGGED" });
  }
  return (
    <div className={styles.dropdown}>
      <Link href={to}>
        <a className={styles.header_button}>
          <FontAwesomeIcon icon={faUserCog} size="2x" />
        </a>
      </Link>
      <div className={styles.dropdown_content}>
        <Link href={toAdmin}>
          <a>Admin</a>
        </Link>
        <Link href={to}>
          <a onClick={handleCLick}>Log out</a>
        </Link>
      </div>
    </div>
  );
}
export default AdminButton;
