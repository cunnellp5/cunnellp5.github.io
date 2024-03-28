<script lang="ts">
	import { title } from '$lib/config';
	import { SkullIcon } from 'lucide-svelte';
</script>

<footer>
	<p>
		<span class="copyText">
			&copy; <span id="year">{new Date().getFullYear()}</span>
		</span>
		<a target="_blank" rel="noopener" href="humans.txt" class="footer-link">
			Created with extreme danger&nbsp;
			<SkullIcon size="12" />
		</a>
	</p>
	<span class="title">
		{title}
	</span>
</footer>

<style>
	footer {
		padding-block: var(--size-3);
		border-top: 1px solid var(--border);
		display: grid;
		place-content: center;
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
		letter-spacing: var(--size-2);
	}

	.copyText {
		color: var(--text-2);
	}
</style>
