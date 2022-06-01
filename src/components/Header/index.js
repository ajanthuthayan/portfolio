import styles from "./Header.module.css";

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<h1 className="font-sans text-7xl xs:text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400">
					Ajanth Uthayan
				</h1>
				<h2 className="font-sans text-2xl font-bold color-white">
					Software Developer
				</h2>
				{/* <button
					type="button"
					className=" cursor-not-allowed text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
					disabled
				>
					View Resume
				</button> */}
			</header>
		</>
	);
}
