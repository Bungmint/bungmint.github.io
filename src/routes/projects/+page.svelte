<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	interface Project {
		name: string;
		href: string;
		description: string;
		tags?: string[];
	}

	const projects: Project[] = [
		// Add your projects here
		// {
		// 	name: 'Project Name',
		// 	href: 'https://github.com/Bungmint/project',
		// 	description: 'A description of what this project does.',
		// 	tags: ['Python', 'ML']
		// }
	];
</script>

<Seo title="Projects - Youngmin Park" description="Projects by Youngmin Park." />

<article class="layout-md">
	<h1 class="mb-8 text-2xl font-semibold text-black">Projects</h1>

	{#if projects.length > 0}
		<div class="grid gap-4">
			{#each projects as project}
				<a
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-start justify-between gap-4 rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
				>
					<div>
						<span class="font-medium text-black group-hover:underline">{project.name}</span>
						<p class="mt-1 text-neutral-600">{project.description}</p>
						{#if project.tags && project.tags.length > 0}
							<div class="mt-2 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span class="rounded bg-neutral-100 px-2 py-0.5 text-sm text-neutral-600"
										>{tag}</span
									>
								{/each}
							</div>
						{/if}
					</div>
					<ArrowUpRight class="mt-1 h-4 w-4 shrink-0 text-neutral-400" />
				</a>
			{/each}
		</div>
	{:else}
		<p class="text-neutral-500 italic">Coming soon...</p>
	{/if}
</article>
