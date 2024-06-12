<script>
	import About from '$lib/components/About.svelte';
	import GlitchImage from '$lib/components/GlitchImage.svelte';
</script>

<article>
	<GlitchImage url="/images/phil-moshed4.gif" />
	<section>
		<h1>History</h1>
	</section>

	<section>
		<About></About>
	</section>
</article>

<style>
	article {
		display: grid;
		place-content: center;
	}

	h1 {
		font-family: 'system-ui', sans;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-block: var(--size-7);
	}

	@media (max-width: 768px) {
		section {
			padding-block: var(--size-8);
		}
	}
</style>
