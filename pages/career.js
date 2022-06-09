import Head from "next/head";
import Image from "next/image";
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
						<figcaption className={styles.card_text}></figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines_short}></div>
						<span className={styles.card_span_right}>·</span>
						<figcaption className={styles.card_text}>
							2022 : Création de mon portfolio
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<figcaption className={styles.card_text}>
							2021 : Formation Développeur/se web - Openclassrooms Voir les
							projets réalisés.
						</figcaption>
						<div className={styles.card_lines_long}></div>
						<span className={styles.card_span_left}>·</span>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>

					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines_short}></div>
						<span className={styles.card_span_right}>·</span>
						<figcaption className={styles.card_text}>
							2018 : International souscirpteur senior - Allianz Partners
						</figcaption>
					</figure>

					<figure className={styles.card}>
						<figcaption className={styles.card_text}>
							2016: Actuaire Pricing - Société Générale Insurance
						</figcaption>
						<div className={styles.card_lines_short}></div>
						<span className={styles.card_span_left}>·</span>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>

					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines_long}></div>
						<span className={styles.card_span_right}>·</span>
						<figcaption className={styles.card_text}>
							2011: Actuaire reserving - BNP Paribas Cardif Italy
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<figcaption className={styles.card_text}>
							2010 : Master TIDE
						</figcaption>
						<div className={styles.card_lines_long}></div>
						<span className={styles.card_span_left}>·</span>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>

					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines_short}></div>
						<span className={styles.card_span_right}>·</span>
						<figcaption className={styles.card_text}>
							2007 : Licence en Économétrie
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<figcaption className={styles.card_text}>
							2005 : Baccalauréat Économiques et Sociales
						</figcaption>
						<div className={styles.card_lines_short}></div>
						<span className={styles.card_span_left}>·</span>
					</figure>
					<figure className={styles.card}>
						<div className={styles.card_lines}></div>
						<figcaption className={styles.card_text}></figcaption>
					</figure>
				</section>
			</main>
		</div>
	);
}
