<script lang="ts">
    export let url: string;
</script>

<div class="clipper">
    <img src={url} alt="Philip Cunnell">
</div>

<style>

  .clipper {
      width: var(--size-11);
      height: var(--size-11);
      border-radius: 50%;
      overflow: hidden;
  }
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
  }

</style>