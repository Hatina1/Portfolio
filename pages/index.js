import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hata Coulibaly Portfolio</title>
				<meta name="description" content="Site développement web portfolio" />
			</Head>

			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Bonjour, je suis Hata !</h1>
					<h2 className={styles.subtitle}>Développeuse web</h2>
					<p className={styles.description}>
						Vous pourrez découvrir ici mon{" "}
						<Link href="/parcours" className={styles.links}>
							parcours
						</Link>{" "}
						et les{" "}
						<Link href="/projets" className={styles.links}>
							projets
						</Link>{" "}
						réalisés.
					</p>
				</section>
			</main>
		</div>
	);
}