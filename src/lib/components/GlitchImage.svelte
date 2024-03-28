<script lang="ts">
	export let url: string;
</script>

<div class="clipper background">
	<img src={url} alt="Philip Cunnell" />
</div>

<style>
	.background {
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		opacity: 0.1;
		z-index: -1;
	}

	img {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		position: relative;
	}
</style>
