<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	{#if !dev}
		<!-- Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-E00L9PT3V9"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-E00L9PT3V9');
		</script>
	{/if}
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
