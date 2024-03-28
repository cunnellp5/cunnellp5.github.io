<script lang="ts">
	import { base } from '$app/paths';
	import Toggle from './Toggle.svelte';
</script>

<nav>
	<ul class="links">
		<li>
			<a href="{base}/"> &lt;P.C.&gt; </a>
		</li>
	</ul>

	<ul class="links">
		<li class="about">
			<a href="{base}/about"> About </a>
		</li>
		<li>
			<a href="{base}/contact"> Contact </a>
		</li>
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-top: var(--size-4);
		padding-bottom: calc(var(--size-4) - 1.5px);
		display: grid;
		gap: var(--size-4);
	}

	.about {
		padding-bottom: var(--size-4);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		display: inline-block;
		transform: scale(1.1);
		color: var(--indigo-1);
		text-shadow:
			0 0 10px var(--indigo-5),
			0 0 25px var(--indigo-7);
		/* animation: var(--animation-blink); */
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: var(--size-md);
			margin-inline: auto;
			border-bottom: 1px solid var(--border);
		}

		.links {
			gap: var(--size-7);
			display: flex;
			margin-block: 0;
		}

		.about {
			padding-bottom: unset;
		}
	}
</style>
