<script>
    import { aboutData } from '$lib/const/aboutData';
</script>

<article class="bio">
    {#each aboutData as { icon, yearSpan, descriptor, description, languages }}
        <div class="lifeChunks">
            <p>
                <span class="bio-icon">{icon}</span>
                <small class="service">
                    &nbsp;{yearSpan}
                    <span> - {descriptor}</span>
                </small>
            </p>
            <div class="bottomParts">
                <p class="describe">
                    {description}
                </p>
                {#if languages}
                    <small class="languages">{languages.join(' - ')}</small>
                {/if}
            </div>
        </div>
    {/each}
</article>

<style>
    .describe, .languages {
        margin-inline: var(--size-7);
    }

    .languages {
        color: var(--text-2);
        opacity: .5;
    }

    .bio {
        display: grid;
        gap: var(--size-4);
        padding: var(--size-7);
        text-align: left;
    }

    small{
        font-family: var(--font-mono);
        font-size: 70%;
    }

    .service {
        color: var(--text-2);
    }

    .lifeChunks {
        line-height: 1.3;
        /* display: grid; */
    }

    .bottomParts {
        display: grid;
        gap: var(--size-2);
        white-space: nowrap;;
    }
</style>