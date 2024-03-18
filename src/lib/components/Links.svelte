<script>
  import { linkData } from '$lib/const/linkData';
</script>

<article>
  <ul class="desktop">
    {#each linkData as { icon, description, url, display }}
      <li>
        <span>
          <span class="icon">{icon}</span> {description}
        </span>
        <a
          target="_blank"
          rel="noopener"
          href={url}>
          {display}
        </a>
      </li>
    {/each}
  </ul>
  <ul class="mobile">
    {#each linkData as { icon, description, url, display }}
      <li >
        <span class="icon">{icon}</span>
        <a
          target="_blank"
          rel="noopener"
          href={url}>
          {description}
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
        margin-block: var(--size-2);
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
        animation: var(--animation-blink);
    }
  
    span {
      margin-right: var(--size-7);
    }

    .icon {
      margin-right: var(--size-2);
      font-size: var(--size-3);
    }

    .mobile {
      display: none;
    }

    @media (max-width: 768px) {
      li {
        justify-content: unset;
      }

      span {
        margin-inline: var(--size-2);
      }

      .desktop {
        display: none;
      }

      .mobile {
        display: block;
      }
    }
</style>