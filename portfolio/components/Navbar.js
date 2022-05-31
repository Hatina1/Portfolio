import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.name}>Hata COULIBALY </div>
			<div className={styles.links}>
				<a href="/">
					<FontAwesomeIcon icon={faHome} className={styles.icon} />
				</a>{" "}
				<Link href="/projets">Projets</Link>
				<Link href="/parcours">Parcours</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
