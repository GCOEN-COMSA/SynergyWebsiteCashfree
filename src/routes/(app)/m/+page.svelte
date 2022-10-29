<script lang="ts">
  import Faq from "$lib/components/FAQPageMobile.svelte";
  import MobileHero from "$lib/assets/mobile-hero.jpg";
  import { page_1, page_1_title } from "$lib/data/FAQs";
  import { onMount, SvelteComponent } from "svelte";
  import EventCard from "$lib/components/EventCard.svelte";
  import { goto } from "$app/navigation";
  import { events } from "$lib/data/events";
  import AboutUs from "$lib/components/AboutUs.svelte";
  import Loader from "$lib/components/Loader.svelte";
    import Testimonial from "$lib/components/Testimonial.svelte";
    import ContactUs from "$lib/components/ContactUs.svelte";
  // Should have been SvelteComponent
  import ScrollDownIndicator from "$lib/components/ScrollDownIndicator.svelte";
  import Cube from '$lib/components/HeroBot.svelte';
  let innerWidth: number;
  let innerHeight: number;
  // let loadPromiseResolve: any;
  // let loadPromise = new Promise((resolve) => {
  //   loadPromiseResolve = resolve;
  // });
let contentElem: HTMLDivElement | null;
let is_transparent = true;

  onMount(async () => {
    if (innerWidth > 1024) await goto("/");
    // const mod = await import("$lib/components/HeroCubeMobile.svelte");
    // const mod = await import("$lib/components/HeroBot.svelte");
    // Cube = mod.default;
    contentElem = document.querySelector("#content-elem");
    if (contentElem) {
      contentElem.addEventListener("scroll", ({ target }) => {
        if (target) {
          const { scrollTop } = target;
          if (scrollTop > 128) {
            // document.body.classList.add("bg-white");
            is_transparent = false;
          } else {
            // document.body.classList.remove("bg-white");
            is_transparent = true;
          }
        }
      });
    }

    // setTimeout(loadPromiseResolve, 100);
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- {#await loadPromise}
  <Loader />
{:then value} -->
  <div
    style="--bg-url: url({MobileHero});"
    class="  pb-10 hero-bg min-h-screen flex flex-col lg:flex-row bg-base-100 overflow-x-hidden "
    id="hero"
  >
    <div id="hero-half" class="mt-10 flex flex-col text-white">
      <span
        class="mt-auto lg:-mb-10 lg:ml-32 mx-auto lg:text-[10rem] text-[5rem] lg:[line-height=9.5rem] text-base-content vimh"
        >SYNERGY</span
      ><span class=" text-center mt-2 mx-auto lg:ml-32 lg:mb-36 text-base-content text-4xl"
        >The Nexus of All Innovations</span
      >
    </div>
    <div id="hero-cube" class="flex-grow flex justify-center items-center">
      <svelte:component this={Cube} />
    </div>
  </div>
  <div class="content-bg">
    <div class="mt-16 flex flex-row flex-wrap justify-evenly align-middle mx-auto w-[calc(100%-4rem)] " id="about">
      <AboutUs />
    </div>
    <div class="mt-16 flex flex-row flex-wrap justify-evenly align-middle pb-10 mx-auto w-[calc(100%-4rem)]" id="testimonials">
      <Testimonial />
    </div>
    <div class="flex flex-col justify-center gap-4 items-center  mt-10 pb-10 mx-auto w-[calc(100%-4rem)]" id="faq">
      <Faq data_list={page_1} title={page_1_title} />
    </div>
  </div>
<!-- {/await} -->

{#if is_transparent}
  <ScrollDownIndicator />
{/if}

<style lang="postcss">
  .hero-bg {
    background: no-repeat top center;
    background-image: linear-gradient(to top, #00000050, #000000aa), var(--bg-url);
    background-blend-mode: multiply, normal;
    background-size: cover;
  }

  .content-bg {
    /* --tw-gradient-stops: #0000004D, theme('colors.sky.400'), theme('colors.rose.400'), theme('colors.lime.400'); */
    /* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); */
    @apply bg-transparent;
  }
</style>
