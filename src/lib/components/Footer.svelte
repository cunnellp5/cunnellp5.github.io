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
    /* a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    } */

    /* footer {
        display: flex;
        margin-top: auto;
        justify-content: center;
        padding: 9px 0;
        width: 100%;
        font-size: 90%;
    } */
    footer {
        padding-block: var(--size-7);
        border-top: 1px solid var(--border);
    }

    p {
        color: var(--text-2);
    }
</style>