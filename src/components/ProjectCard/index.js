import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
	const { title, liveLink, githubRepo, image } = props;
	return (
		<>
			<div className={styles.card}>
				<img src={image} alt={`${title} project card`} />
				<div className={styles.info}>
					<h5>{title}</h5>
					<div className="flex flex-row gap-2 justify-center items-center">
						{liveLink !== "" ? (
							<a
								className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit"
								href={liveLink}
								target="_blank"
								rel="noreferrer"
							>
								Live
							</a>
						) : (
							<button
								disabled
								className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit cursor-not-allowed"
							>
								Live
							</button>
						)}
						{githubRepo !== "" ? (
							<a
								className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit"
								href={githubRepo !== "" ? githubRepo : ""}
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						) : (
							<button
								disabled
								className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit cursor-not-allowed"
							>
								Code
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
