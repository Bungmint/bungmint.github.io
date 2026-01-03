<script lang="ts">
	import { page } from '$app/stores';
	import { Mail, Github, Linkedin } from 'lucide-svelte';
</script>

<header class="py-8 sm:py-12">
	<div class="container-main">
		<div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
			<!-- Profile Photo -->
			<div class="w-32 sm:w-40 md:w-48 flex-shrink-0">
				<img
					src="/images/circle_crop.png"
					alt="Youngmin Park"
					class="w-full rounded-full shadow-lg"
				/>
			</div>

			<!-- Bio -->
			<div class="text-center sm:text-left flex-1">
				<h1 class="text-3xl sm:text-4xl font-bold text-neutral-800 mb-3">Youngmin Park</h1>
				<p class="text-lg text-neutral-600 mb-4">
					I am an undergraduate student at UC Berkeley, studying Computer Science and Mathematics.
				</p>

				<!-- Social Links -->
				<div class="flex items-center justify-center sm:justify-start gap-4">
					<a
						href="https://mailhide.io/e/CLaC9N0p"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover transition-colors"
					>
						<Mail size={18} />
						<span>Email</span>
					</a>
					<span class="text-neutral-300">/</span>
					<a
						href="https://github.com/Bungmint"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover transition-colors"
					>
						<Github size={18} />
						<span>GitHub</span>
					</a>
					<span class="text-neutral-300">/</span>
					<a
						href="https://www.linkedin.com/in/youngminpark2"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover transition-colors"
					>
						<Linkedin size={18} />
						<span>LinkedIn</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>
