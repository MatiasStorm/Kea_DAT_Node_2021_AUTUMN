<script>
    import SideBar from './SideBar.svelte';
    import DocumentationView from "./DocumentationView.svelte";
    let documentationPages = [];
    let titles = [];
    let activeTitle;
    let sections = [];

    fetch("/api/pages")
        .then(res => res.json())
        .then(res => {
            documentationPages = res;
            titles = documentationPages.map(d => d.title);
            activeTitle = documentationPages[0].title;
            sections = documentationPages.find(d => d.title = activeTitle).sections
        });

    function onTitleChange(event){
        activeTitle = event.detail.title
        sections = documentationPages.find(d => d.title === activeTitle).sections
    }

</script>

<div class="flex w-screen h-screen">
    <div class="w-72">
        <SideBar 
            on:activeTitleChange={onTitleChange} 
            titles={titles} 
            activeTitle={activeTitle}
        />
    </div>
    <div class="w-full">
        <DocumentationView sections={sections} />
    </div>
</div>

