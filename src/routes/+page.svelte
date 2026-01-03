<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo />

<div class="container-main">
	<!-- Research Section -->
	<section class="section">
		<h2>Research</h2>
		<p class="text-neutral-600 leading-relaxed">
			I'm broadly interested in reinforcement learning and alignment. I'm currently working on
			scalable oversight with debate.
		</p>
	</section>

	<!-- Teaching Section -->
	<section class="section">
		<h2 id="teaching">Teaching</h2>
		<p class="text-neutral-600 mb-6">Instructors of each course are listed in parentheses.</p>

		<div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
			<div class="flex-shrink-0">
				<img src="/images/cs70.png" alt="CS 70" class="w-44 h-auto" />
			</div>
			<div class="flex-1">
				<h3 class="text-lg font-semibold text-neutral-800 mb-2">
					CS 70: Discrete Mathematics and Probability Theory
				</h3>
				<p class="text-neutral-600">
					Teaching Assistant,
					<a
						href="https://www.su23.eecs70.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="link">Su23</a
					>,
					<a
						href="https://www.sp24.eecs70.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="link">Sp24</a
					>
					(<a
						href="https://www2.eecs.berkeley.edu/Faculty/Homepages/sinclair.html"
						target="_blank"
						rel="noopener noreferrer"
						class="link">Alistair Sinclair</a
					>,
					<a
						href="https://www2.eecs.berkeley.edu/Faculty/Homepages/seshia.html"
						target="_blank"
						rel="noopener noreferrer"
						class="link">Sanjit Seshia</a
					>),
					<a
						href="https://www.fa24.eecs70.org/"
						target="_blank"
						rel="noopener noreferrer"
						class="link">Fa24</a
					>
					(<a
						href="https://www2.eecs.berkeley.edu/Faculty/Homepages/rao.html"
						target="_blank"
						rel="noopener noreferrer"
						class="link">Satish Rao</a
					>)
				</p>
			</div>
		</div>
	</section>
</div>
