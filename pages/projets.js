import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
import favicon from "../public/images/favicon.ico";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Projets() {
	const path = "/images/";
	return (
		<div className={styles.container}>
			<Head>
				<title>Hata Coulibaly Portfolio</title>
				<meta name="description" content="Site développement web portfolio" />
				<link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
			</Head>

			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Projets</h1>
				</section>
				<section className={styles.main_container}>
					<figure className={styles.card}>
						<Image
							src={`${path}Groupomania.png`}
							classname={styles.card_images}
							alt="groupomania"
							width={310}
							height={250}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Groupomania</h2>
							<p className={styles.card_desc}>
								Création d'une social app d'entreprise
							</p>
							<p className={styles.card_tools_desc}>
								NodeJS, Express, Sequelize, MySQL, ReactJS, Bootstrap, Giphy API
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Kanap.png`}
							classname={styles.card_images}
							alt="Kanap"
							width={310}
							height={250}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Kanap</h2>
							<p className={styles.card_desc}>
								Création d'un site de e-commerce dynamique
							</p>
							<p className={styles.card_tools_desc}>HTML, CSS, Javascript</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Oh-My-Food.png`}
							classname={styles.card_images}
							alt="Oh My Food"
							width={310}
							height={250}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Oh My Food</h2>
							<p className={styles.card_desc}>
								Dynamisation d'une page web avec des animations CSS
							</p>
							<p className={styles.card_tools_desc}>HTML, CSS, SASS</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Booki.png`}
							classname={styles.card_images}
							alt="Booki"
							width={310}
							height={250}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Booki</h2>
							<p className={styles.card_desc}>
								Transformation d'une maquette en site web
							</p>
							<p className={styles.card_tools_desc}>HTML, CSS</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Hot-Takes.png`}
							classname={styles.card_images}
							alt="Hot Takes"
							width={310}
							height={250}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Hot Takes</h2>
							<p className={styles.card_desc}>
								Construction d'une API sécurisée
							</p>
							<p className={styles.card_tools_desc}>
								MongoDB, NodeJS, Express, Javascript
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}La-Chouette.png`}
							classname={styles.card_images}
							alt="La chouette"
							width={310}
							height={250}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>La Chouette</h2>
							<p className={styles.card_desc}>
								Optimisation d'un site web existant
							</p>
							<p className={styles.card_tools_desc}>HTML, CSS, SEO</p>
						</figcaption>
					</figure>
				</section>
			</main>
		</div>
	);
}
