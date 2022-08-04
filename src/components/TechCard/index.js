export default function TechCard(props) {
	const { text, icon, image } = props;
	return (
		<div className="text-zinc-700 flex justify-start gap-1 p-3 rounded-lg bg-neutral-900 shadow-md hover:bg-neutral-900 h-max">
			<span className="w-2/5 flex justify-center">
				<ion-icon size="medium" name={icon} src={image}></ion-icon>
			</span>
			<h5 class="text-lg sm:text-xl font-bold tracking-tight text-zinc-700">
				{text}
			</h5>
		</div>
	);
}
