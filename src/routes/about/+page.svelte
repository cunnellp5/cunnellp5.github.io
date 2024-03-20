<script>
    import About from '$lib/components/About.svelte';
    import GlitchImage from '$lib/components/GlitchImage.svelte';
</script>

<article>
        <GlitchImage url="/images/phil-moshed4.gif" />
    <section>
        <h1>History</h1>
        <div style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"></div>
        <small style="font-weight: 800; font-size: 20px">of code.</small>
    </section>

    <section>
        <About></About>
    </section>
</article>

<style>
    article {
        display: grid;
        place-content: center;
    }

    h1 {
        font-family: 'system-ui', sans;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding-bottom: var(--size-12);
    }

    @media (max-width: 768px) {
      section {
        padding-bottom: var(--size-15);
      }
    }
</style>