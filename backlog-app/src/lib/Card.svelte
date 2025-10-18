<script lang="ts">
	import type Game from "./models/Game";

	export let game: Game;
</script>

<div
	class="card h-76 flex w-60 flex-col justify-between rounded-2xl bg-slate-50 p-4 shadow-md transition-all ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-lg"
>
	<div class="group-1 flex flex-grow flex-col gap-2">
		<div class="title flex">{game.title}</div>
		<div class="content flex h-full flex-col">{game.description}</div>
	</div>
	<div class="footer flex">{game.releaseDate}</div>
</div>
