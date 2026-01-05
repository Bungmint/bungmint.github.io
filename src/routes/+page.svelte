<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	interface Project {
		name: string;
		href: string;
		description: string;
		aside?: string;
	}

	const featuredProjects: Project[] = [
		// Add your projects here
		// {
		// 	name: 'Project Name',
		// 	href: 'https://github.com/Bungmint/project',
		// 	description: 'A brief description of what this project does.',
		// 	aside: 'Optional additional info like stars or downloads'
		// }
	];
</script>

<Seo />

<article class="layout-md text-lg">
	<div class="mb-12 flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-12">
		<div class="flex-1">
			<p class="mb-4">
				I am an undergraduate student at UC Berkeley, studying Computer Science and Mathematics.
			</p>
			<p class="text-neutral-500">
				I'm broadly interested in reinforcement learning and alignment. I'm currently working on
				scalable oversight with debate.
			</p>
		</div>
		<div class="shrink-0">
			<img
				src="/images/circle_crop.png"
				alt="Youngmin Park"
				class="h-40 w-40 rounded-full object-cover"
			/>
		</div>
	</div>

	{#if featuredProjects.length > 0}
		<section class="mb-12">
			<h2 class="heading2">Featured Projects</h2>
			<div class="grid gap-4">
				{#each featuredProjects as project}
					<a
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-baseline justify-between gap-4 rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
					>
						<div>
							<span class="font-medium text-black group-hover:underline">{project.name}</span>
							<span class="text-neutral-500"> &mdash; {project.description}</span>
							{#if project.aside}
								<span class="text-sm text-neutral-400"> ({project.aside})</span>
							{/if}
						</div>
						<ArrowUpRight class="h-4 w-4 shrink-0 text-neutral-400" />
					</a>
				{/each}
			</div>
		</section>
	{/if}
</article>
