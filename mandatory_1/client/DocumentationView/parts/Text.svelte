<script>
    export let lines = [];
</script>


<div class="mt-3">
    {#each lines as line}
        <p>
            {line}
        </p>
    {/each}
</div>
