<script>
	import { aboutData } from '$lib/const/aboutData';
</script>

<article class="bio">
	{#each aboutData as { yearSpan, descriptor, description, languages }}
		<div class="info">
			<h3>{yearSpan}</h3>
			<div class="data">
				<div class="margin-block">
					<p class="yellow">Description:</p>
					<p>
						{description}
					</p>
				</div>

				<p class="small-text">
					<span class="yellow2">Type:</span>
					{descriptor}
				</p>
				<!-- <p class="service">{descriptor}</p> -->
				{#if languages}
					<p class="languages bottomParts">Tech: {languages.join(' - ')}</p>
				{/if}
			</div>
		</div>
	{/each}
</article>

<style>
	h3 {
		margin-block: var(--size-4);
	}
	p {
		font-size: var(--font-size-1);
	}
	.margin-block {
		margin-block: var(--size-4);
	}
	.languages {
		color: var(--text-2);
		opacity: 0.5;
		font-size: var(--font-size-0);
	}

	.bio {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--size-4);
		text-align: left;
		/* flex-direction: column; */
	}
	.info {
		/* display: grid; */
		/* gap: var(--size-5); */
		margin-block-end: var(--size-7);
	}

	.bottomParts {
		display: grid;
		white-space: nowrap;
	}
	.yellow {
		margin-block-end: var(--size-2);
		font-size: var(--font-size-3);
		color: var(--yellow-3);
	}
	.yellow2 {
		color: var(--indigo-3);
	}
	.small-text {
		margin-block-end: var(--size-1);
		font-size: var(--font-size-0);
	}
</style>
