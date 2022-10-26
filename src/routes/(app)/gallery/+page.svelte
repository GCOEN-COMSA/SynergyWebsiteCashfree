<script>
    import Gallery from "$lib/components/Gallery.svelte";

</script>
<div class="mx-auto mt-10 w-full flex flex-row flex-wrap justify-evenly align-middle gap-10 pb-10">
    <h1 id="gallery" class="text-[5rem] xl:text-[6rem] mx-auto text-center text-base-content w-screen vimh -mb-20">Gallery</h1>
    <Gallery />
</div>

<style>
    div {
        /* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); */
        @apply bg-transparent;
    }
</style>