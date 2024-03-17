<script>
  import { linkData } from '$lib/const/linkData';
</script>

<article>
  <ul>
    {#each linkData as { icon, description, url, display }}
      <li>
        <span>{icon} {description}</span>
        <a
          target="_blank"
          rel="noopener"
          href={url}>
          {display}
        </a>
      </li>
    {/each}
  </ul>
</article>

<style>
    ul {
      padding: unset;
    }

    li {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: var(--size-2);
    }

    a {
        text-decoration: none;
        color: (--var-indigo-1);
    }

    a:hover {
        display: inline-block;
        transform: scale(1.1);
        color: var(--indigo-1);
        text-shadow: 0 0 10px var(--indigo-5), 0 0 25px var(--indigo-7);
    }
  
    span {
        margin-inline: var(--size-7);
    }
</style>