export default function ProjectCard(props) {
	const { title, live, repo, image } = props;
	return (
		<div className="max-w-lg min-w-300px w-full rounded-md overflow-hidden shadow-lg">
			<img
				className="w-full"
				src="https://v1.tailwindcss.com/img/card-top.jpg"
				alt="Sunset in the mountains"
			/>
			{/* <div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					<ion-icon name="link-outline"></ion-icon>
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					<ion-icon name="logo-github"></ion-icon>
				</span>
			</div> */}
		</div>
	);
}
