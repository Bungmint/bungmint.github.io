<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';

	interface Post {
		title: string;
		href: string;
		date: string;
		description: string;
	}

	const posts: Post[] = [
		// Add your blog posts here
		// {
		// 	title: 'Post Title',
		// 	href: '/writing/post-slug',
		// 	date: '2024-01-01',
		// 	description: 'A brief description of the post.'
		// }
	];
</script>

<Seo title="Writing - Youngmin Park" description="Blog posts and writing by Youngmin Park." />

<article class="layout-md">
	<h1 class="mb-8 text-2xl font-semibold text-black">Writing</h1>

	{#if posts.length > 0}
		<div class="grid gap-6">
			{#each posts as post}
				<a href={post.href} class="group block">
					<span class="text-sm text-neutral-400">{post.date}</span>
					<h2 class="text-lg font-medium text-black group-hover:underline">{post.title}</h2>
					<p class="mt-1 text-neutral-600">{post.description}</p>
				</a>
			{/each}
		</div>
	{:else}
		<p class="text-neutral-500 italic">Coming soon...</p>
	{/if}
</article>
