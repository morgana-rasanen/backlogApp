<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/Navbar.svelte";
	import Sidebar from "$lib/Sidebar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<div class="top-14 mt-14">
	<div class="flex overflow-hidden">
		<Sidebar />
		<div
			class="page-content -mb-14 ml-52 h-screen w-screen overflow-y-scroll bg-neutral-900 px-8 py-10"
		>
			{@render children?.()}
		</div>
	</div>
</div>
