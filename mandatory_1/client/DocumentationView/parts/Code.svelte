<script>
    export let codeLines = [];
</script>

{#each codeLines as codeLine}
    <pre class="block ml-5">{codeLine}</pre>
{/each}
