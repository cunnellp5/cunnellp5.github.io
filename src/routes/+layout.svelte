<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import PageTransition from '$lib/components/PageTransition.svelte';

    import 'open-props/style';
    import 'open-props/normalize';
    import 'open-props/buttons';
    
    import '$lib/styles/rainbowbar.css';
    import '$lib/styles/app.css';

    export let data
</script>
 
<div class="layout">
    <Header></Header>

    <main>
        <PageTransition url={data.url}>
            <slot></slot>
        </PageTransition>
    </main>
    
    <Footer></Footer>
</div>

<style>
    main {
        padding-block: var(--size-9);
    }
    
    .layout {
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