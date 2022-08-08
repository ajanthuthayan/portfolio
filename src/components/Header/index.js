import styles from "./Header.module.css";
import portrait from "./portrait.png";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles["col1"]}>
				<img src={portrait} alt="Ajanth Uthayan" />
			</div>
			<div className={styles["col2"]}>
				<h1 className="font-sans text-7xl xs:text-8xl sm:text-9xl lg:text-9xl xl:text-10xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400">
					Ajanth Uthayan
				</h1>
				<h2 className="font-sans text-2xl font-bold color-white">
					Software Developer
				</h2>
				<div className={styles["links-container"]}>
					<a
						href="https://www.github.com/uajanth"
						target="_blank"
						rel="noreferrer"
					>
						<ion-icon name="logo-github"></ion-icon>
					</a>
					<a
						href="https://www.linkedin.com/in/ajanthuthayan"
						target="_blank"
						rel="noreferrer"
					>
						<ion-icon name="logo-linkedin"></ion-icon>
					</a>
				</div>
			</div>
		</header>
	);
}
