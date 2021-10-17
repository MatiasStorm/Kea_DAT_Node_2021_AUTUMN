<script>
    import {Link} from "svelte-routing";
    export let routes = [];

    function getProps({location, href, isPartiallyCurrent, isCurrent}){
        const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
        let cssClasses = "p-2 my-1 cursor-pointer rounded-md ";

        if(isActive){
            cssClasses += "bg-white";
        }
        else {
            cssClasses += "bg-gray-500";
        }

        return { class: cssClasses};
    }
</script>


<div class="flex flex-col h-full p-3 bg-gray-900">
    <h1 class="mb-3 text-xl text-white">Documentation</h1>
    {#if routes.length > 0}
        {#each routes as route}
            <Link to="{route}" getProps="{getProps}">
                {route}
            </Link>
        {/each}
    {/if}
</div>
