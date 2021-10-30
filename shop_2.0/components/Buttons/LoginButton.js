import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

function UserButton({ to }) {
  return (
    <div className={styles.dropdown}>
      <Link href={to}>
        <a className={styles.header_button}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </a>
      </Link>
    </div>
  );
}
export default UserButton;
