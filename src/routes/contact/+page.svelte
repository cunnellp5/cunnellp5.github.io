<script lang="ts">
    import { Download, Copy, CopyCheckIcon } from 'lucide-svelte'

    let email = 'philip.cunnell@colorado.edu'
    let copied = false;

    function copy() {
        navigator.clipboard.writeText(email);
        copied = true;

        setTimeout(() => {
            copied = false;
        }, 2000)
    }
</script>

<article>
    <section>
        <h1>Contact</h1>
    </section>

    <section>
        <h2>Email</h2>
        <div class="email-group">
            <p>{email}</p>
            <button on:click={copy}>
                {#if copied}
                    <CopyCheckIcon />
                {:else}
                    <Copy />
                {/if}
            </button>
        </div>
    </section>

    <section>
        <h2>Resume</h2>
        <button><Download />
            <a href="/PhilipCunnellResume2.pdf" download="philip-cunnell-resume-{new Date().getFullYear()}">Download Resume</a>
        </button>
    </section>
</article>

<style>
    article {
        display: grid;
        place-content: center;
    }

    h1 {
        font-family: var(--font-serif);
    }
    
    h2 {
        padding-bottom: var(--size-7);
    }

    section {
        padding-bottom: var(--size-9);
    }

    .email-group {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
    }

    .email-group > p {
        margin-right: var(--size-4);
    }
</style>