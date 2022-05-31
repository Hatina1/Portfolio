import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hata Coulibaly Portfolio</title>
				<meta name="description" content="Site développement web portfolio" />
			</Head>

			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Contact</h1>
					<ul className={styles.contactlist}>
						<li>
							<h2 className={styles.contact}>
								GitHub :{" "}
								<Link
									href="https://github.com/Hatina1 "
									className={styles.links}
								>
									https://github.com/Hatina1
								</Link>
							</h2>
						</li>
						<li>
							<h2 className={styles.contact}>
								LinkedIn :{" "}
								<Link
									href="https://www.linkedin.com/in/hata-c-b15168a5/"
									className={styles.links}
								>
									https://www.linkedin.com/hata_coulibaly
								</Link>
							</h2>
						</li>
						<li>
							<h2 className={styles.contact}>
								E-mail :{" "}
								<Link href="hata.coulibaly@yahoo.fr" className={styles.links}>
									hata.coulibaly@yahoo.fr
								</Link>
							</h2>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
