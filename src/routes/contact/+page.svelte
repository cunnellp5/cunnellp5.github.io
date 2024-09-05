<script lang="ts">
	import { onMount } from 'svelte';
	import { Download, Copy, CopyCheckIcon } from 'lucide-svelte';
	import GlitchImage from '$lib/components/GlitchImage.svelte';

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

	function handleKeyDown() {
		copy();
	}

	onMount(() => {
		emailButton.focus();
	});

	console.info('Sorry for overwriting keydown events');
	console.info('Click anywhere to unfocus');
</script>

<article>
	<GlitchImage url="/images/phil-mosh5.gif" />
	<section class="sectionText">
		<h2>Contact</h2>
		<div
			class="divider"
			style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"
		></div>
		<small style="font-weight: 800; font-size: 20px">
			<div class="email-group">
				<button bind:this={emailButton} on:click={copy} on:keydown|preventDefault={handleKeyDown}>
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

	<section class="sectionText">
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
	</section>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		margin: 0 auto;
		width: fit-content;
	}
	section {
		padding-block: var(--size-4);
	}

	.sectionText {
		display: flex;
		align-items: center;
		/* justify-content: center; */
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

	@media (max-width: 768px) {
		.divider {
			display: none;
		}

		.sectionText {
			flex-direction: column;
		}
	}
</style>
