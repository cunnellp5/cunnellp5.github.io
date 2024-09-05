<script>
	import Links from '../lib/components/Links.svelte';
	import GlitchImage from '../lib/components/GlitchImage.svelte';
</script>

<article>
	<header>
		<h1>Phil</h1>
		<div style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"></div>
		<small style="font-weight: 600; font-size: 20px">Full-Stack JavaScript Developer.</small>
		<GlitchImage url="/images/phil-mosh2.gif" />
	</header>

	<section>
		<Links></Links>
	</section>
</article>

<style>
	article {
		display: grid;
		place-items: center;
		height: 80vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'system-ui', sans-serif;
	}
</style>
