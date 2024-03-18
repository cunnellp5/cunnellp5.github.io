<script>
  import Links from '../lib/components/Links.svelte';
  import GlitchImage from '../lib/components/GlitchImage.svelte';
</script>

<article>
  <header>
    <h1 class="header-text">I'm Phil</h1>
    <GlitchImage url="/images/phil-mosh2.gif" />
  </header>

  <main>
    <Links></Links>
  </main>
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

  main {
      display: grid;
      place-content: center;
  }

  @media (max-width: 768px) {
      h1 {
         display: none;
      }
      header {
        gap: unset;
      }
  }
</style>