<script lang="ts">
	import { title } from '$lib/config';
</script>

<footer>
	<p>
		<span class="copyText">
			&copy; <span id="year">{new Date().getFullYear()}</span>
		</span>
		<a target="_blank" rel="noopener" href="humans.txt" class="footer-link"> humans.txt </a>
	</p>
	<span class="title">
		{title}
	</span>
</footer>

<style>
	footer {
		margin: 0 auto;
		place-items: center;
		padding-block: var(--size-3);
	}

	p {
		color: var(--text-2);
		font-size: 12px;
	}

	a {
		display: inline-flex;
	}

	.title {
		color: var(--text-1);
		margin-inline: var(--size-1);
		/* letter-spacing: var(--size-2); */
	}

	.copyText {
		color: var(--text-2);
	}

	@media (min-width: 768px) {
		footer {
			width: var(--size-md);
			margin: 0 auto;
			place-items: center;
			padding-block: var(--size-3);
			border-top: 1px solid var(--border);
		}
	}
</style>
