export default function TechCard(props) {
	const { text, icon, image } = props;
	return (
		<div className="text-zinc-700 flex justify-center gap-2 p-3 rounded-lg bg-neutral-900 shadow-md hover:bg-neutral-900 h-max">
			<span>
				<ion-icon size="medium" name={icon} src={image}></ion-icon>
			</span>
			<h5 class="text-xl font-bold tracking-tight text-zinc-700">{text}</h5>
		</div>
	);
}
