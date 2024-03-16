<script lang="ts">
    import { base } from '$app/paths';
</script>
 
<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/about">About</a>
</nav>

<main>
    <h1>Philip Cunnell</h1>
    <h2>⚠️ Under Construction</h2>
    <slot></slot>
</main>

<footer>
    <p>
        &copy; <span id="year"></span>
        Philip Cunnell.
        <a target="_blank" rel="noopener" href="humans.txt" class="footer-link"
            >Created with love</a
        >
    </p>
</footer>

<style>
    /* TODO get Franklin 54 font working */
    :global(body) {
        font-family: 'Franklin 54', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
        height: 100vh; /* Set the height to 100% of the viewport height */
        margin: 0; /* Reset default margin */
        padding: 0; /* Reset default padding */
        display: flex; /* Make body a flex container */
        flex-direction: column; /* Arrange children vertically */
    }

    nav {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background-color: rgb(233, 221, 199);
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 2rem;
    }

    footer {
        display: flex;
        margin-top: auto;
        justify-content: center;
        padding: 9px 0;
        width: 100%;
        font-size: 90%;
    }
</style>