<script>
    export let items = [];
</script>

<ul class="list-disc">
    {#each items as item }
        <li class="ml-10">{item}</li>
    {/each}
</ul>
