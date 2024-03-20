<script>
  import Links from '../lib/components/Links.svelte';
  import GlitchImage from '../lib/components/GlitchImage.svelte';
</script>

<article>
  <header>
    <h1>Phil</h1>
    <div style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"></div>
    <small style="font-weight: 800; font-size: 20px">Developer.</small>
    <GlitchImage url="/images/phil-mosh2.gif" />
  </header>

  <section>
    <Links></Links>
  </section>
</article>

<style>
  article {
    display: grid;
    place-items: center;
  }
  
  header {
    height: 100vh;
    padding-bottom: var(--size-12);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'system-ui', sans-serif;
  }

  section {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    header {
      padding-bottom: var(--size-15);
    }
  }
</style>