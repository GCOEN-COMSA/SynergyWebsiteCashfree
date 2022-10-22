<script>
    import Gallery from "$lib/components/Gallery.svelte";

</script>
<div class="mx-auto mt-10 w-5/6 flex flex-row flex-wrap justify-evenly align-middle gap-10">
    <h1 id="gallery" class="text-[5rem] xl:text-[6rem] mx-auto text-center text-base-content w-screen vimh -mb-20">Gallery</h1>
    <Gallery />
    <Gallery alt/>
    <Gallery />
</div>