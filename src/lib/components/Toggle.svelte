<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun, MousePointer, Heart } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { mouse, toggleMouse } from '$lib/stores/mouse';
</script>

<div class="options">
	<button class="mouse" on:click={toggleMouse} aria-label="Toggle mouse">
		{#if $mouse === 'on'}
			<div in:fly={{ y: 10 }}>
				<MousePointer strokeWidth="1" />
			</div>
		{:else}
			<div in:fly={{ y: -10 }}>
				<Heart strokeWidth="1" />
			</div>
		{/if}
	</button>
	<button on:click={toggleTheme} aria-label="Toggle theme">
		{#if $theme === 'dark'}
			<div in:fly={{ y: 10 }}>
				<Sun strokeWidth="1" />
			</div>
		{:else}
			<div in:fly={{ y: -10 }}>
				<Moon strokeWidth="1" />
			</div>
		{/if}
	</button>
</div>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
		margin-inline: var(--size-1);
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}

	@media (max-width: 768px) {
		.mouse {
			display: none;
		}
	}
</style>
