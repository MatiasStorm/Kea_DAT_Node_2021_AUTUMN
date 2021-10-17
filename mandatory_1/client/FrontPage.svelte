<script>
    import {Router, Link, Route} from "svelte-routing";
    import SideBar from './SideBar.svelte';
    import DocumentationView from "./DocumentationView/DocumentationView.svelte";
    export let url;
    let serverUrl = "http://localhost:3000/api";
    const routes = [
        "javascript",
        "nodejs",
        "npm",
        "express",
        "rest"
    ];

    const promise = fetch(`${serverUrl}/pages`).then(res => res.json());

    function getDocumentSectionsByRoute(documentationPages, route){
        return documentationPages.find(d => d.title.toLowerCase() === route)?.sections;
    }

</script>

<div class="flex min-h-screen max-w-screen ">
    <Router url="{url}">
        <div class="flex-none w-72">
            <SideBar 
                routes={routes} 
            />
        </div>
        {#await promise then data}
            <div class="flex-auto">
                {#each routes as route}
                    <Route path="{route}">
                        <DocumentationView sections={getDocumentSectionsByRoute(data, route)} />
                    </Route>
                {/each}
            </div>
        {/await}
    </Router>
</div>

