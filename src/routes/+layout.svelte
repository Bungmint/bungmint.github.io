<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser, dev } from '$app/environment';

	let { children } = $props();

	// Google Analytics
	if (browser && !dev) {
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-E00L9PT3V9';
		document.head.appendChild(script);

		(window as any).dataLayer = (window as any).dataLayer || [];
		function gtag(...args: any[]) {
			(window as any).dataLayer.push(args);
		}
		gtag('js', new Date());
		gtag('config', 'G-E00L9PT3V9');
	}
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />
