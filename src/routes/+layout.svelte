<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import 'open-props/style';
    import 'open-props/normalize';
    import 'open-props/buttons';
    
    import '$lib/styles/app.css';

    import { AlertTriangle } from 'lucide-svelte';
</script>
 
<div class="layout">
    <Header></Header>

    <main class="construction">
        <AlertTriangle />
        <h3>Under Construction</h3>
    </main>

    <main>
        <slot></slot>
    </main>
    

    <Footer></Footer>
</div>

<style>
    main {
        padding-block: var(--size-9);
    }

    .construction {
        display: grid;
        grid-template-columns: auto auto; /* This will create two columns of equal width */
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    .layout {
        height: 100%;
        max-inline-size: var(--size-xl);
        display: grid;
        grid-template-rows: auto auto 1fr auto; /* rm second auto when removing construcction */
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>