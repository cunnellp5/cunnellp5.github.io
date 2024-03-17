<script>
  import Links from '../lib/components/Links.svelte';
</script>

<article>
  <header>
    <h1 class="header-text">I'm Phil</h1>
    <div class="clipper">
      <img src="/images/phil-mosh2.gif" alt="Philip Cunnell">
    </div>
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

  @media (max-width: 768px) {
      h1 {
         display: none;
      }
  }
</style>