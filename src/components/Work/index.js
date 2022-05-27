import styles from "./Work.module.css";
import ProjectCard from "../ProjectCard";
export default function Work() {
	return (
		<>
			<header id="work" className={styles.header}>
				<h3>My Work</h3>
				<h1 className="font-sans mb-10 text-5xl p-0.5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
					Some of my latest projects.
				</h1>
				<div className="flex flex-col xl:flex-row gap-20 xl:gap-10 items-center justify-center">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</header>
		</>
	);
}
