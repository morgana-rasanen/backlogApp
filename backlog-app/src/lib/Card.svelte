<script lang="ts">
	import type Game from "./models/Game";

	export let game: Game;
</script>

<div
	class="card h-76 mb-2 flex w-60 flex-col justify-between rounded-2xl bg-neutral-700 p-4 shadow-md transition-all duration-200 ease-in-out hover:-translate-y-4 hover:scale-110 hover:cursor-pointer hover:shadow-lg"
>
	<div class="group-1 flex flex-grow flex-col gap-2">
		<div class="title flex">{game.title}</div>
		<div class="content flex h-full flex-col">{game.description}</div>
	</div>
	<div class="footer flex">{game.releaseDate}</div>
</div>
