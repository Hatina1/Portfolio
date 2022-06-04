import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
const path = "/images/";

export default function Projets() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hata Coulibaly Portfolio</title>
				<meta name="description" content="Site développement web portfolio" />
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
							width={330}
							height={180}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Groupomania</h2>
							<p className={styles.card_desc}>
								Création d'une social app d'entreprise
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Kanap.png`}
							classname={styles.card_images}
							alt="Kanap"
							width={330}
							height={180}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Kanap</h2>
							<p className={styles.card_desc}>
								Création d'un site de e-commerce dynamique
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Oh-My-Food.png`}
							classname={styles.card_images}
							alt="Oh My Food"
							width={330}
							height={180}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Oh My Food</h2>
							<p className={styles.card_desc}>
								Dynamisation d'une page web avec des animations CSS
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Booki.png`}
							classname={styles.card_images}
							alt="Booki"
							width={330}
							height={180}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Booki</h2>
							<p className={styles.card_desc}>
								Transformation d'une maquette en site web
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}Hot-Takes.png`}
							classname={styles.card_images}
							alt="Hot Takes"
							width={330}
							height={180}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>Hot Takes</h2>
							<p className={styles.card_desc}>
								Construction d'une API sécurisée
							</p>
						</figcaption>
					</figure>
					<figure className={styles.card}>
						<Image
							src={`${path}La-Chouette.png`}
							classname={styles.card_images}
							alt="La chouette"
							width={330}
							height={180}
						/>
						<figcaption className={styles.card_text}>
							<h2 className={styles.card_title}>La Chouette</h2>
							<p className={styles.card_desc}>
								Optimisation d'un site web existant
							</p>
						</figcaption>
					</figure>
				</section>
			</main>
		</div>
	);
}
