<script>
    export let sections = [];

</script>


<div class="flex justify-center">
    {#if sections.length > 0}
        <div class="w-11/12 grid grid-cols-1 divide-y-8 divide-gray-300">
            {#each sections as section}
                    <div>
                        <h1 class="mt-2 text-4xl text-center">
                            {section.title}
                        </h1>
                        <p>
                            {section.text}
                        </p>
                    </div>
            {/each}
        </div>
    {/if}
</div>
