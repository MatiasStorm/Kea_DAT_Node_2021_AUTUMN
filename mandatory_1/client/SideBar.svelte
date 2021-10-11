<script>
    const subjects = [
        "Node",
        "npm",
        "express"
    ];

    let activeSubject = subjects[0];
</script>


<div class="flex flex-col h-full p-3 bg-gray-900">
    <h1 class="mb-3 text-xl text-white">Documentation</h1>
    {#each subjects as subject}
        <span 
            class="p-2 my-1 cursor-pointer rounded-md" 
            class:bg-white="{activeSubject === subject}"
            class:bg-gray-500="{activeSubject !== subject}"
            on:click="{() => activeSubject = subject}"
        >
            {subject}
        </span>
    {/each}
</div>
