import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const router = useRouter();

	return (
		<div className={`${styles.navbar}`}>
			<div className={`${styles.name}`}>Hata COULIBALY </div>
			<div className={styles.links}>
				<a href="/">
					<FontAwesomeIcon icon={faHome} className={styles.icon} />
				</a>{" "}
				<Link href="/projets" passHref>
					<a
						className={
							router.pathname == "/projets" ? styles.active : styles.category
						}
					>
						Projets
					</a>
				</Link>
				<Link href="/career" passHref>
					<a
						className={
							router.pathname == "/career" ? styles.active : styles.category
						}
					>
						Parcours
					</a>
				</Link>
				<Link href="/contact" passHref>
					<a
						className={
							router.pathname == "/contact" ? styles.active : styles.category
						}
					>
						Contact
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
