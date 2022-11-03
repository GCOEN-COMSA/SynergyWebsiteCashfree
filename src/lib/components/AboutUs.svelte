<script>
  import AboutUs from "$lib/assets/logo.mp4";
</script>

<h2 class=" text-center w-full mx-auto text-4xl vimh mb-10">About Us</h2>
<div class="card xl:card-side xl:bg-base-100 shadow-blue-300 ">
  <figure>
    <video
      loop
      muted
      autoplay
      src={AboutUs}
      class="rounded-t-2xl sm:rounded-2xl xl:mt-0 xl:rounded-none max-w-xs md:max-w-md lg:max-w-md xl:max-w-lg aspect-video lg:aspect-square max-h-96"
      alt="Album"
    />
  </figure>
  <div
    class="card-body text-center bg-base-100 sm:mt-4 sm:rounded-2xl xl:rounded-r-xl  xl:bg-transparent max-w-xs md:max-w-md lg:max-w-md xl:max-w-lg"
  >
    <p>
      Tracing back its origins, SYNERGY symbolizes ‘striving for excellence by working together’.
      Combined efforts of our department has brought our techfest in motion.
    </p>
    <p>
      Back with more enthusiasm than ever, Synergy is returning with banger events and amazing
      prizes.So fasten your belts and get ready for an unforgettable journey.
    </p>
    <p>See you soon!</p>
    <div class="card-actions justify-end hidden">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>

<style>
  .card-body :where(p) {
    flex-grow: 0;
  }
  .card-body {
    @apply justify-center text-lg;
  }
</style>
