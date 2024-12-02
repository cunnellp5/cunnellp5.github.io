<script lang="ts">
	import { onMount } from 'svelte';
	import {
		// Download,
		Copy,
		CopyCheckIcon
	} from 'lucide-svelte';

	let email = 'philip.cunnell@colorado.edu';
	let copied = false;
	let emailButton: HTMLButtonElement;

	function copy() {
		navigator.clipboard.writeText(email);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 1000);
	}

	onMount(() => {
		emailButton.focus();
	});
</script>

<article>
	<section class="sectionText">
		<h2>Contact</h2>
		<small style="font-weight: 800; font-size: 20px">
			<div class="email-group">
				<button bind:this={emailButton} on:click={copy}>
					{#if copied}
						<CopyCheckIcon />
						<p>Copied to clipboard</p>
					{:else}
						<Copy />
						<p>
							{email}
						</p>
					{/if}
				</button>
			</div>
		</small>
	</section>

	<!-- <section class="sectionText">
		<h2>Resume</h2>
		<div
			class="divider"
			style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"
		></div>
		<small style="font-weight: 800; font-size: 20px">
			<button>
				<Download />
				<a
					href="/PhilipCunnellResume.pdf"
					download="philip-cunnell-resume-{new Date().getFullYear()}"
				>
					Download
				</a>
			</button>
		</small>
	</section> -->
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		/* width: fit-content; */
	}
	section {
		padding-block: var(--size-4);
	}

	.sectionText {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);
		font-family: 'system-ui', sans-serif;
	}

	.email-group {
		display: flex;
		flex-direction: row;
	}

	p {
		display: inline-block;
		color: var(--indigo-1);
		text-shadow:
			0 0 10px var(--indigo-5),
			0 0 25px var(--indigo-7);
	}

	p:hover {
		display: inline-block;
		color: var(--indigo-1);
		text-shadow:
			0 0 10px var(--indigo-5),
			0 0 25px var(--indigo-7);
		animation: var(--animation-blink);
		cursor: pointer;
	}
</style>
