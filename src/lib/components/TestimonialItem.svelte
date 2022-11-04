<script lang="ts">
    import { fade, fly } from "svelte/transition";

export let index = 0;
  let anim: {x?:number,y?:number} = {y: -200};
  if (index == -1) {
    anim = {x: -200};
  } else if (index == 1) {
    anim = {x: 200};
  }
export let image = "http://placeimg.com/400/400/tech",
    pos = "GCoE Nagpur",
    name = "Some Indifferent Cunt",
    text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam alias eum labore rerum harum pariatur quae dignissimos. Eius ducimus debitis dolores est vitae ipsam ullam quas expedita quos voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati quo, doloremque alias necessitatibus officiis quia voluptatibus illo nihil consequatur. Minima, quas. Aperiam nesciunt laudantium voluptatem perferendis non quae iusto!";
</script>

<div in:fly={{...anim, duration:300}} class="testimonial-container pt-32">
  <div
    class="min-h-[22.5rem] container max-w-xl flex flex-col items-stretch align-middle justify-between bg-base-100 px-6 py-10 lg:mb-8 rounded-lg"
  >
    <div class="image-container flex flex-row items-center justify-center -mt-24">
      <img class="h-36 rounded-full border-[0.25rem] border-base-content bg-slate-300" src={image} alt="..." />
    </div>
    <div class="text-container flex flex-col justify-start items-stretch text-justify mt-4">
      <div class="position uppercase text-primary text-center">{pos}</div>
      <div class="name uppercase text-2xl text-center">{name}</div>
      <div class="bottom-text mt-4">{text}</div>
    </div>
  </div>
</div>
