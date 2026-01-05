<script lang="ts">
	const contacts = [
		{ label: 'Twitter', href: 'https://twitter.com/Bungmint_', display: '@Bungmint_' },
		{ label: 'GitHub', href: 'https://github.com/Bungmint', display: '@Bungmint' },
		{ label: 'Email', href: 'mailto:youngminpark@berkeley.edu', display: 'youngminpark@berkeley.edu' }
	];
</script>

<footer class="layout-md mt-16 text-sm">
	{#each contacts as contact}
		<div class="flex items-center gap-2 py-1">
			<span class="text-neutral-500">{contact.label}</span>
			<hr class="flex-1 border-t border-dotted border-neutral-300" />
			<a href={contact.href} class="link" target="_blank" rel="noopener noreferrer">
				{contact.display}
			</a>
		</div>
	{/each}
	<p class="mt-8 text-center text-neutral-400">
		Design and source code from <a href="https://www.ekzhang.com/" class="link" target="_blank" rel="noopener noreferrer">Eric Zhang</a>
	</p>
</footer>
