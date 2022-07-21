import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import favicon from "../public/images/favicon.ico";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hata Coulibaly Portfolio</title>
				<meta name="description" content="Site développement web portfolio" />
				<link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
			</Head>

			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Bonjour, je suis Hata !</h1>
					<h2 className={styles.subtitle}>Développeuse web</h2>
					<p className={styles.description}>
						Vous pourrez découvrir ici mon{" "}
						<Link href="/parcours">parcours</Link> et les{" "}
						<Link href="/projets">projets</Link> réalisés.
					</p>
				</section>
			</main>
		</div>
	);
}
