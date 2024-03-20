<script lang="ts">
    import { onMount } from 'svelte';
    import { Download, Copy, CopyCheckIcon } from 'lucide-svelte'

    let email = 'philip.cunnell@colorado.edu'
    let copied = false;
    let emailButton: HTMLButtonElement;

    function copy() {
        navigator.clipboard.writeText(email);
        copied = true;

        setTimeout(() => {
            copied = false;
        }, 1000)
    }

    function handleKeyDown() {
        copy();
    }

    onMount(() => {
        emailButton.focus();
    });

    console.log('Sorry for overwriting key down events');
    console.log('Click anywhere to unfocus');
</script>

<article>
    <section class="sectionText">
        <h1>Contact</h1>
        <div class="divider" style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"></div>
        <small style="font-weight: 800; font-size: 20px">
            <div class="email-group">
                <button
                    bind:this={emailButton}
                    on:click={copy} 
                    on:keydown|preventDefault={handleKeyDown}>
                    {#if copied}
                        Copied to clipboard <CopyCheckIcon />
                    {:else}
                        <p>
                            {email}
                        </p>
                    {/if}
                </button>
            </div>
        </small>
    </section>

    <section class="sectionText">
        <h1>Resume</h1>
        <div class="divider" style="margin-inline: 1rem; border-left: 1px solid rgb(207, 207, 207); height: 40px"></div>
        <small style="font-weight: 800; font-size: 20px">
            <button>
                <Download />
                <a href="/PhilipCunnellResume2.pdf" download="philip-cunnell-resume-{new Date().getFullYear()}">
                    Download Resume
                </a>
            </button>
        </small>
    </section>
</article>

<style>
    section {
        height: 100vh;
        padding-bottom: var(--size-12);
    }

    .sectionText {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'system-ui', sans-serif;
    }

    .email-group {
        display: flex;
        flex-direction: row;
    }

    p {
        color: var(--indigo-1);
        text-shadow: 0 0 10px var(--indigo-5), 0 0 25px var(--indigo-7);
    }

    p:hover {
        display: inline-block;
        color: var(--indigo-1);
        text-shadow: 0 0 10px var(--indigo-5), 0 0 25px var(--indigo-7);
        animation: var(--animation-blink);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .divider {
            display: none;
        }
        
        .sectionText {
            flex-direction: column;
        }
        
        section {
            padding-bottom: var(--size-15);
        }
    }
</style>