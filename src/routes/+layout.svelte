<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import 'open-props/style';
    import 'open-props/normalize';
    import 'open-props/buttons';
    
    import '$lib/styles/app.css';
</script>
 
<div class="layout">
    <Header></Header>
    <main>
        <slot></slot>
    </main>
    <h3>⚠️ Under Construction ⚠️</h3>
    
    <Footer></Footer>
</div>

<style>
    /* TODO get Franklin 54 font working */
    /* :global(body) { */
        /* font-family: 'Franklin 54', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif; */
        /* height: 100vh; */
        /* margin: 0; */
        /* padding: 0; */
        /* display: flex; */
        /* flex-direction: column; */
    /* } */

    main {
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 2rem; */
        padding-block: var(--size-9);
    }
    
    .layout {
        /* background-image: var(--gradient-1); */
        height: 100%;
        max-inline-size: var(--size-xl);
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>