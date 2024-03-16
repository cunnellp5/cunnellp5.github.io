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

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
</style>