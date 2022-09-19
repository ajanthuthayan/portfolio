import styles from "./Work.module.css";
import ProjectCard from "../ProjectCard";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

export default function Work() {
	const projects = [
		{
			id: 1,
			title: "NFT Calculator",
			liveLink: "https://magicedencalculator.vercel.app/",
			githubRepo: "https://github.com/uajanth/magicedencalculator",
			image: project1,
		},
		{
			id: 2,
			title: "Chingu Collaborate",
			liveLink: "https://chingu-collaborate.vercel.app/",
			githubRepo: "https://github.com/uajanth/chingu-collaborate",
			image: project2,
		},
		{
			id: 3,
			title: "Cinema Management System",
			liveLink: "https://cms-uajanth.vercel.app/",
			githubRepo: "https://github.com/uajanth/cinema-management-website",
			image: project3,
		},
	];
	return (
		<section
			id="work"
			className="w-full flex flex-col items-center justify-center pt-16 pb-32"
		>
			<header className={styles.header}>
				<h3>My Work</h3>
				<h1 className="font-sans text-5xl p-0.5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
					Some of my latest projects.
				</h1>
			</header>

			<main className={styles.container}>
				<div className="flex flex-col xl:flex-row gap-20 xl:gap-10 items-center justify-center">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							image={project.image}
							liveLink={project.liveLink}
							githubRepo={project.githubRepo}
						/>
					))}
				</div>
			</main>
		</section>
	);
}
