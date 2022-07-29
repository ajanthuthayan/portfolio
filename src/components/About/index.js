import styles from "./About.module.css";
import { Link } from "react-scroll";
import TechCard from "../TechCard";
import expressLogo from "./expressjs-icon.svg";
import nextjs from "./nextjs-icon.svg";
import mongodbLogo from "./mongodb-icon.svg";

export default function About() {
	return (
		<>
			<section
				id="about"
				className="flex flex-col lg:flex-row items-center pt-5 pb-16"
			>
				<main className={styles.main}>
					<h3>About Me</h3>
					<h1 className="font-sans text-5xl p-0.5 mb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
						Who am I?
					</h1>
					<p className={styles["about-subheading"]}>
						I combined my background in business with programming to help people
						save time and money
						{/* <span>
							<a
								href="/"
								className={styles["content-underline"]}
								rel="noreferrer"
							>
Link							</a>
						</span> */}
						.
					</p>
					<p className={styles["about-body"]}>
						I enjoy programming most when I'm challenged and see how my work
						helps others. I'm always open to hearing about opportunities where I
						can learn and make impactful contributions.{" "}
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<a
								href="/"
								className={styles["content-underline"]}
								rel="noreferrer"
							>
								Want to chat?
							</a>
						</Link>
					</p>

					<p className={styles["about-body"]}>
						When I'm not coding, you can find me playing with my dog Titan,
						walking through scenic trails, or glued to self improvement books.
					</p>
				</main>
				<aside className="flex flex-col justify-center items-center">
					<header className="text-center lg:text-left mb-5">
						<h4>Tech Stack</h4>
						<h2 className="font-sans text-3xl p-0.5 mb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
							Technologies I work with.
						</h2>
					</header>
					<main className={styles["tech-stack-grid"]}>
						<TechCard text="HTML" icon="logo-html5" />
						<TechCard text="CSS" icon="logo-css3" />
						<TechCard text="JavaScript" icon="logo-javascript" />
						<TechCard text="React.js" icon="logo-react" />
						<TechCard text="Node.js" icon="logo-nodejs" />
						<TechCard text="Next.js" image={nextjs} />
						<TechCard text="Express.js" image={expressLogo} />
						<TechCard text="MongoDB" image={mongodbLogo} />
					</main>
				</aside>
			</section>
		</>
	);
}
