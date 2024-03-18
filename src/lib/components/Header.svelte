<script lang="ts">
    import { base } from '$app/paths';
    import Toggle from './Toggle.svelte';
</script>
 
<nav>
    <a href="{base}/">
        <b>&lt;Phil Cunnell /&gt;</b>
    </a>

    <ul class="links">
        <li>
            <a href="{base}/about">About</a>
        </li>
        <li>
            <a href="{base}/contact">Contact</a>
        </li>
    </ul>
    
    <Toggle />
</nav>


<style>
    nav {
        padding-block: var(--size-7);
        border-bottom: 1px solid var(--border);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .links {
        margin-block: var(--size-7);
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