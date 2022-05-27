import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles["footer"]}>
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
			<small>Created by Ajanth Uthayan</small>
			<small className={styles["copyright"]}>
				&copy; Copyright {currentYear}. All Rights Reserved.
			</small>
		</footer>
	);
}

export default Footer;
