<script>
    import Text from "./parts/Text.svelte";
    import Code from "./parts/Code.svelte";
    import List from "./parts/List.svelte";

    export let sections = [];

</script>


<div class="flex justify-center">
    {#if sections.length > 0}
        <div class="w-11/12 grid grid-cols-1 divide-y-8 divide-gray-300">
            {#each sections as section}
                    <div class="mb-5">
                        <h1 class="mt-2 text-4xl text-center">
                            {section.title}
                        </h1>
                        {#if section.parts}
                            {#each section.parts as part}
                                {#if part.type === "text"}
                                    <Text lines={part.values} />
                                {:else if part.type === "list"}
                                    <List items={part.values}/>
                                {:else if part.type === "code"}
                                    <Code codeLines={part.values} />
                                {/if}
                            {/each}
                        {/if}
                    </div>
            {/each}
        </div>
    {/if}
</div>
