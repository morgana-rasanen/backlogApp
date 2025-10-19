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
		<div class="page-content ml-52 h-[92vh] overflow-y-scroll bg-neutral-800 p-10">
			{@render children?.()}
		</div>
	</div>
</div>
