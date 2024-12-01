<script lang="ts">
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
  import "@styles/global.css";

  let { children = null, title = null } = $props();
</script>

<section class="container mx-auto max-w-3xl p-4">
  <AppBar>
    <svelte:fragment slot="lead">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-left"
        ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
      >
    </svelte:fragment>
    { title ? title : 'App Bar'}
    <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
  </AppBar>
  <div class="mt-4 text-center">
    {@render children()}
  </div>
</section>
