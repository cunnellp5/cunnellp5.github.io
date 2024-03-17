<script lang="ts">
    import { base } from '$app/paths';
    import Toggle from './Toggle.svelte';
</script>
 
<nav>
    <a class="title" href="{base}/">
        <b>&lt;PC /&gt;</b>
    </a>
    
    <ul class="links">
        <li>
            <a href="{base}/about">About</a>
        </li>
        <!-- <li>
            <a href="{base}/contact">Contact</a>
        </li> -->
        <!-- <li>
            <a href="{base}/rss.xml" target="_blank">RSS</a>
        </li> -->
    </ul>
    
    <Toggle />
</nav>


<style>
    nav {
        padding-block: var(--size-7);
        /* background-image: var(--gradient-3), var(--noise-2);
        filter: var(--noise-filter-1);
        background-size: cover; */
    }

    .links {
        margin-block: var(--size-7);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (min-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }
</style>