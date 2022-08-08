import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles["footer"]}>
			<small>Created by Ajanth Uthayan</small>
			<small className={styles["copyright"]}>
				&copy; Copyright {currentYear}. All Rights Reserved.
			</small>
		</footer>
	);
}

export default Footer;
