<script>
    import About from '$lib/components/About.svelte';
</script>

<article>
    <h1>Coding history</h1>
    <About></About>
</article>

<style>
    article {
        display: grid;
        place-content: center;
    }

    h1 {
        font-family: var(--font-mono);
    }
</style>