<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container-main py-20 text-center">
	<h1 class="text-6xl font-bold text-neutral-300 mb-4">{$page.status}</h1>
	<p class="text-xl text-neutral-600 mb-8">{$page.error?.message || 'Page not found'}</p>
	<a
		href="/"
		class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
	>
		Go back home
	</a>
</div>
