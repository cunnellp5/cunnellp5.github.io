<script>
  import Links from '../lib/components/Links.svelte';
</script>

<article>
  <header>
    <div class="clipper">
      <img src="/images/phil-mosh.gif" alt="Philip Cunnell">
    </div>
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

  .clipper {
      clip-path: polygon(0% 35%, 100% 35%, 100% 65%, 0% 65%);
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
  }

  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      top: 10px; /* Adjust this value to shift the image more or less */
  }

  main {
      display: grid;
      place-content: center;
  }
</style>