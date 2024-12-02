<script>
	import Links from '../lib/components/Links.svelte';
	const random = Math.floor(Math.random() * 4);
	const glitchImages = [
		'/images/phil-mosh2.gif',
		'/images/phil-mosh5.gif',
		'/images/phil-moshed4.gif',
		'/images/me.webp'
	];
</script>

<article>
	<header>
		<div class="clipper background">
			<img height="200px" width="200px" src={glitchImages[random]} alt="Philip Cunnell" />
		</div>

		<div class="title-text-wrapper">
			<h1>Phil</h1>
			<small style="font-weight: 600; font-size: 20px">Software Developer.</small>
		</div>
	</header>

	<section>
		<Links></Links>
	</section>
</article>

<style>
	article {
		display: grid;
		place-items: center;
	}

	header {
		margin-block: var(--size-10);
		display: flex;
		align-items: center;
		gap: var(--size-5);
		justify-content: center;
		font-family: 'system-ui', sans-serif;
	}
</style>
