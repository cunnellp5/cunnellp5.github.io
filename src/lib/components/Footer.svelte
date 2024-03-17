<script lang="ts">
    import { title } from '$lib/config';
</script>

<footer>
    <p>
        &copy; <span id="year">{new Date().getFullYear()}</span>
        {title}.
        <a target="_blank" rel="noopener" href="humans.txt" class="footer-link"
            >Created with love</a
        >
    </p>
</footer>

<style>
    footer {
        padding-block: var(--size-7);
        border-top: 1px solid var(--border);
        display: grid;
        place-content: center;
    }

    p {
        color: var(--text-2);
    }
</style>