<script>
	import About from '$lib/components/About.svelte';
</script>

<article>
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
