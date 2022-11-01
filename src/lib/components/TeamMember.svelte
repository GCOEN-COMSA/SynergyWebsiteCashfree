<script lang="ts">
  import "iconify-icon";
  export let image = "https://placeimg.com/400/400"
  export let name = "Synergy Member";
  export let role = "Member";
  export let decor = "border-green-500";
  export let socials = [
    {
      icon: "bi:instagram",
      link: "https://www.instagram.com/comsa_gcoen/",
    },
    {
      icon: "bi:linkedin",
      link: "https://www.instagram.com/comsa_gcoen/",
    },
  ];
</script>

<div
  class="container min-h-[10rem] bg-base-100/60 hover:bg-base-100/100 transition-all duration-300 ease-linear rounded-100 max-w-sm flex flex-col items-stretch rounded-lg"
>
  <div class="image-container flex flex-col items-center justify-around py-6">
    <img
      src={image}
      alt=""
      class="rounded-full w-5/12 border-4 {decor} aspect-square object-cover"
    />
  </div>
  <div class="text-container flex flex-col py-2 justify-center items-center">
    <div class="name text-4xl py-1">{name}</div>
    <div class="position text-lg py-1">{role}</div>
  </div>
  <div class="bottom-text flex flex-row items-center justify-center gap-2 py-4">
    {#each socials as social}
      <a
        href={social.link}
        class="social btn btn-ghost cursor-pointer rounded-xl inline-flex align-middle"
        ><iconify-icon class="text-4xl text-white" icon={social.icon} /></a
      >
    {/each}
  </div>
</div>

<style>
  .bg-insta-gradient {
    background: linear-gradient(90deg, #f58529 0%, #dd2a7b 46.52%, #8134af 100%);
  }

  .bg-twitter-gradient {
    background: linear-gradient(90deg, #1da1f2 0%, #1da1f2 46.52%, #1da1f2 100%);
  }
</style>
