<script lang="ts">
	import { page } from '$app/stores';
</script>

<article class="layout-md text-center">
	<h1 class="mb-4 text-4xl font-semibold text-black">{$page.status}</h1>
	<p class="mb-8 text-lg text-neutral-600">{$page.error?.message || 'Page not found'}</p>
	<a href="/" class="link">Go back home</a>
</article>
