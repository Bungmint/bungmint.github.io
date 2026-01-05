<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Workplace from './Workplace.svelte';
</script>

<Seo title="Resume - Youngmin Park" description="Resume and CV of Youngmin Park." />

<article class="layout-md">
	<section class="mb-12">
		<h2 class="heading2">Professional Work</h2>
		<!-- Add work experience entries here -->
		<Workplace 
		title="Software Engineer Intern" 
		company="Jane Street" 
		url="https://www.janestreet.com/" 
		dates="May 2025 - Aug 2025" 
		location="New York, NY" 
		>
		<li>ML team</li>
		</Workplace>
		<Workplace 
		title="Software Engineer Intern" 
		company="Meta" 
		url="https://www.meta.com/" 
		dates="May 2024 - Aug 2024" 
		location="Menlo Park, CA" 
		>
		<li>GenAI team</li>
		</Workplace>
	</section>

	<section class="mb-12">
		<h2 class="heading2">Education</h2>
		<div class="mb-4">
			<p class="font-medium text-black">University of California, Berkeley</p>
			<p class="text-neutral-600">B.A. Computer Science and Mathematics</p>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="heading2">Teaching</h2>
		<div class="mb-4">
			<p class="font-medium text-black">CS 70: Discrete Mathematics and Probability Theory</p>
			<p class="text-neutral-600">Teaching Assistant - Su23, Sp24, Fa24</p>
		</div>
	</section>

	<section class="mb-12">
		<h2 class="heading2">Awards and Honors</h2>
		<!-- Add awards and honors entries here -->
		<div class="mb-4">
		<h3 class="font-medium mb-1">Computer Science:</h3>
		<ul>
		  <li>
			<b>International Collegiate Programming Contest (ICPC):</b> World Finalist (2024,
			2025)
		  </li>
		</ul>
	  </div>
	</section>

</article>

<style lang="postcss">
	@reference "tailwindcss";

	b {
	  @apply font-medium;
	}
  
	ul {
	  @apply list-disc pl-7 marker:text-neutral-400;
	}
  
	.byline {
	  @apply font-serif italic;
	}
  </style>