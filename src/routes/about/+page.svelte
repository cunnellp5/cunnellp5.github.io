<script>
    import About from '$lib/components/About.svelte';
    import GlitchImage from '$lib/components/GlitchImage.svelte';
</script>

<article>
    <header>
        <h1 class="header-text">About</h1>
        <GlitchImage url="/images/phil-moshed4.gif" />
    </header>

    <section>
        <h2>Coding</h2>
        <About></About>
    </section>

    <!-- <section>
        <h2>something else</h2>
        <About></About>
    </section> -->
</article>

<style>
    article {
        display: grid;
        place-content: center;
    }

    .header-text {
        font-family: var(--font-serif);
    }

    header {
        display: grid;
        grid-template-columns: auto auto;
        /* place-content: center; */
        align-items: center;
        padding-bottom: var(--size-9);
        gap: var(--size-8);
    }

    h1 {
        font-family: var(--font-mono);
    }
    
    h2 {
        padding-bottom: var(--size-7);
    }
    
    section {
        padding-bottom: var(--size-9);
    }

    @media (max-width: 768px) {
      h1 {
         display: none;
      }
      header {
        gap: unset;
        place-content: center;
      }
  }
</style>