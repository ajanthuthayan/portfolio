import styles from "./About.module.css";
import TechCard from "../TechCard";
import expressLogo from "./expressjs-icon.svg";
import postgresqlLogo from "./postgresql-icon.svg";
import mongodbLogo from "./mongodb-icon.svg";

export default function About() {
	return (
		<>
			<section
				id="about"
				className="flex flex-col lg:flex-row items-center pt-5"
			>
				<main className={styles.main}>
					<h3>About Me</h3>
					<h1 className="font-sans text-5xl p-0.5 mb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
						Who am I?
					</h1>
					<p className={styles["about-subheading"]}>
						I’m a software developer who currently creates web applications with{" "}
						<span>
							<a
								href="https://www.google.ca"
								className={styles["content-underline"]}
								target="_blank"
								rel="noreferrer"
							>
								Team Aerexx
							</a>
						</span>
						.
					</p>
					<p className={styles["about-body"]}>
						After graduating university, I've dedicated the last year learning
						the fundamentals of programming to make a career shift into the tech
						industry. I'd like to join an organization where I will be able to
						continously learn and make impactful contributions.
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
						<TechCard text="ReactJS" icon="logo-react" />
						<TechCard text="NodeJS" icon="logo-nodejs" />
						<TechCard text="ExpressJS" image={expressLogo} />
						<TechCard text="PostgreSQL" image={postgresqlLogo} />
						<TechCard text="MongoDB" image={mongodbLogo} />
					</main>
				</aside>
			</section>
		</>
	);
}
