import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Career.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Career() {
	const path = "../public/assets/";
	return (
		<div className={styles.container}>
			<Head>
				<title>Hata Coulibaly Portfolio</title>
				<meta name="description" content="Site développement web portfolio" />
			</Head>

			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Parcours</h1>
				</section>
				<p className={styles.section}>
					Mon CV est à télécharger{" "}
					<a
						className={styles.link}
						target="_blank"
						href="https://drive.google.com/file/d/1c1N5DejjM7n8bMZAMA8w3kuCTKIomNpl/view?usp=sharing"
						download="CV Hata Coulibaly"
					>
						ici
					</a>
					.
				</p>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={faCircleChevronUp} />
				</div>
				<section className={styles.main_container}>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_left}`}
						>
							2022 : Création de mon portfolio
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_right}`}
						>
							2021 : Formation Développement web - Openclassrooms. Voir les{" "}
							<Link href="/projets" className={styles.links}>
								projets
							</Link>
							.
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_left}`}
						>
							2018 : International souscirpteur senior - Allianz Partners
						</figcaption>
					</figure>

					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_right}`}
						>
							2016: Actuaire Pricing - Société Générale Insurance
						</figcaption>
					</figure>

					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_left}`}
						>
							2011: Actuaire reserving - BNP Paribas Cardif Italy
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_right}`}
						>
							2010 : Master TIDE
						</figcaption>
					</figure>

					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_left}`}
						>
							2007 : Licence en Économétrie
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>

						<figcaption
							className={`${styles.card_text} ${styles.card_text_right}`}
						>
							2005 : Baccalauréat Sciences Économiques et Sociales
						</figcaption>
					</figure>
				</section>
			</main>
		</div>
	);
}
