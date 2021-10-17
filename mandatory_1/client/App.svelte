<script>
    import FrontPage from "./FrontPage.svelte";
    let url = window.location.pathname;
</script>

<main>
    <FrontPage url="{url}"></FrontPage>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
