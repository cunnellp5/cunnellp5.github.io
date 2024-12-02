<script>
	import { linkData } from '$lib/const/linkData';
	import { linkDataProj } from '$lib/const/linkDataProj';
</script>

<article>
	<div>
		<h6>Freelanced:</h6>
		<ul>
			<li>
				<a class="description" target="_blank" rel="noopener" href="https://theriversings.com">
					TheRiverSings.com
				</a>
			</li>
		</ul>
	</div>

	<div>
		<h6>Projects:</h6>
		<ul class="links">
			{#each linkDataProj as { description, url }}
				<li>
					<a class="description" target="_blank" rel="noopener" href={url}>
						{description}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div>
		<h6>Other:</h6>
		<ul class="links">
			{#each linkData as { description, url }}
				<li>
					<a class="description" target="_blank" rel="noopener" href={url}>
						{description}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</article>

<style>
	div {
		margin-block: var(--size-11);
	}
	li {
		margin: var(--size-3);
		background: var(--surface-3);
		padding-inline: var(--size-7);
		padding-block: var(--size-3);
		border-radius: var(--radius-3);
		text-align: center;
	}

	h6 {
		opacity: 0.3;
		font-weight: var(--font-weight-1);
	}

	a {
		text-decoration: none;
		color: (--var-indigo-1);
	}

	.links {
		display: flex;
		flex-flow: row wrap;
	}

	a:hover {
		display: inline-block;
		transform: scale(1.1);
		color: var(--indigo-1);
		text-shadow:
			0 0 10px var(--indigo-5),
			0 0 25px var(--indigo-7);
		animation: var(--animation-blink);
	}

	.description {
		font-variant: small-caps;
		letter-spacing: 2px;
	}

	@media (max-width: 768px) {
		li {
			justify-content: unset;
		}
	}
</style>
