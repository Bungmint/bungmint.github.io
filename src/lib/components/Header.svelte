<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ name: 'research', href: '/research' },
		{ name: 'projects', href: '/projects' },
		{ name: 'writing', href: '/writing' },
		{ name: 'resume', href: '/resume' }
	];

	$: currentPage = links.find((link) => $page.url.pathname.startsWith(link.href))?.name ?? '';
</script>

<header class="layout-md mb-14 flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
	<div class="flex items-center gap-2">
		<a href="/" class="text-xl font-semibold text-black" data-sveltekit-preload-code>
			Youngmin Park
		</a>
		{#if currentPage}
			<span class="hidden text-neutral-400 min-[580px]:inline">&mdash;</span>
			<span class="hidden font-light text-neutral-400 min-[580px]:inline">{currentPage}</span>
		{/if}
	</div>

	<nav class="flex gap-4 text-neutral-500" data-sveltekit-preload-code data-sveltekit-noscroll>
		{#each links as link}
			<a
				href={link.href}
				class="transition-colors hover:text-black {$page.url.pathname.startsWith(link.href)
					? 'text-black'
					: ''}"
			>
				{link.name}
			</a>
		{/each}
	</nav>
</header>
