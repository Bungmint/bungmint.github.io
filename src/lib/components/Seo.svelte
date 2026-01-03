<script lang="ts">
	export let title = 'Youngmin Park';
	export let description = 'Undergraduate student at UC Berkeley studying Computer Science and Mathematics';
	export let url = 'https://youngminpark.com';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Youngmin Park" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:creator" content="@Bungmint_" />

	<link rel="canonical" href={url} />
</svelte:head>
