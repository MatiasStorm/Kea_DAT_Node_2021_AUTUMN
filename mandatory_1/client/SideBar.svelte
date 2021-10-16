<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let titles;
    export let activeTitle;

</script>


<div class="flex flex-col flex-grow h-full p-3 bg-gray-900">
    <h1 class="mb-3 text-xl text-white">Documentation</h1>
    {#if titles.length > 0}
        {#each titles as title}
            <span 
                class="p-2 my-1 cursor-pointer rounded-md" 
                class:bg-white="{activeTitle === title}"
                class:bg-gray-500="{activeTitle !== title}"
                on:click="{() => dispatch("activeTitleChange", {title})}"
            >
                {title}
            </span>
        {/each}
    {/if}
</div>
