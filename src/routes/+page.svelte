<script>
  import Links from '../lib/components/Links.svelte';
</script>

<article>
  <header>
    <img src="/images/phil-mosh.gif" alt="Philip Cunnell">
    <h1>I'm Phil</h1>
  </header>
  <main>
    <Links></Links>
  </main>
</article>

<style>
  header {
      display: grid;
      grid-template-columns: auto auto;;
      place-content: center;
      align-items: center;
      gap: var(--size-7);  
  }

  img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: var(--size-7);
  }

  main {
      display: grid;
      place-content: center;
  }
</style>