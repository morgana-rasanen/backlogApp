<script>
	import ProfileBanner from "./ProfileBanner.svelte";
</script>

<div
	class=" fixed left-0 top-0 z-50 flex h-14 w-full flex-row justify-between bg-neutral-900 px-5 align-middle shadow-md"
>
	<div class="text-shadow-violet-400 text-shadow-sm flex w-1/3 items-center gap-4">
		<span class="material-icons scale-150">videogame_asset</span>
		<span class="text-2xl"> Continue!?</span>
	</div>
	<div class="middle flex w-1/3 items-center justify-center">
		<div
			class="flex items-center rounded-md border-neutral-600 bg-neutral-800 pl-3 pr-5 text-white placeholder-neutral-400 focus-within:border focus-within:border-neutral-400 hover:border hover:border-neutral-500"
		>
			<span class="material-icons">search</span>

			<input
				type="text"
				placeholder="Search..."
				autocomplete="off"
				class=" w-120 rounded-md bg-neutral-800 p-2 placeholder-neutral-400 focus:outline-none"
			/>
			<div class="rounded-xl bg-neutral-600 px-2 py-1 text-[0.6rem]">Ctrl + K</div>
		</div>
	</div>
	<div class="flex w-1/3 items-center justify-end">
		<ProfileBanner />
	</div>
</div>
