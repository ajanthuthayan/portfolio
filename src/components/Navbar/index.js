import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<ul className="sm:justify-start">
				<li>
					<Link to="about" spy={true} smooth={true} offset={50} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="work" spy={true} smooth={true} offset={50} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
