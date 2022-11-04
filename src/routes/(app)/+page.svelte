<script lang="ts">
  import Faq from "$lib/components/FAQPageDesktop.svelte";
  import DesktopHero from "$lib/assets/desktop-alt-min.jpg";
  import { page_1, page_1_title } from "$lib/data/FAQs";
  import { onMount, SvelteComponent } from "svelte";
  import { goto } from "$app/navigation";
  import AboutUs from "$lib/components/AboutUs.svelte";
  import EventCard from "$lib/components/EventCard.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import { events } from "$lib/data/events";
  import Testimonial from "$lib/components/Testimonial.svelte";
  import HeroBot from "$lib/components/HeroBot.svelte";
  import ContactUs from "$lib/components/ContactUs.svelte";
  import ScrollDownIndicator from '$lib/components/ScrollDownIndicator.svelte';
  let innerWidth: number;
  let innerHeight: number;
  // Should have been SvelteComponent
  // loadPromise: Promise<void>;
  // let loadPromiseResolve: any;
  // let loadPromise = new Promise((resolve) => {
  //   loadPromiseResolve = resolve;
  // });
  let contentElem: HTMLDivElement | null;
  let is_transparent = true;
  onMount(async () => {
    // setTimeout(loadPromiseResolve, 5000);
    if (innerWidth < 1024) await goto("/m/");
    // const mod = await import("$lib/components/HeroCubeDesktop.svelte");
    // const mod = await import("$lib/components/HeroBot.svelte");
    // Cube = mod.default;
    contentElem = document.querySelector("#content-elem");
    if (contentElem) {
      contentElem.addEventListener("scroll", ({ target }) => {
        if (target) {
          const { scrollTop } = (target as HTMLDivElement);
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
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- {#if loading}
   <Loader />
{/if} -->

<!-- {#await loadPromise}
  <Loader />
{:then value} -->
  <div
    style="--bg-url: url({DesktopHero});"
    class="hero-bg min-h-screen flex flex-col lg:flex-row bg-base-100 overflow-x-hidden pb-10"
    id="hero"
  >
    <div id="hero-half" class="flex-grow flex flex-col">
      <span
        class="mt-auto mb-4 xl:mb-10 xl:ml-16 2xl:ml-32 mx-auto text-4xl 2xl:text-[10rem]  xl:text-[5rem] xl:[line-height=9.5rem] text-base-content vimh"
        >SYNERGY</span
      ><span
        class="mt-2 mx-auto xl:ml-16 2xl:ml-32 lg:mb-36 text-base-content text-xl xl:text-2xl 2xl:text-4xl"
        >The Nexus of All Innovations</span
      >
    </div>
    <div id="hero-cube" class="flex-grow flex justify-center items-center pl-20">
      <!-- <svelte:component this={Cube} /> -->
      <HeroBot />
    </div>
  </div>
  <div
    class="flex flex-wrap px-36 justify-evenly items-center gap-8 bg-gradient-to-b bg-transparent pb-5 lg:pb-10 xl:pb-20"
    id="about-us"
  >
    <div  class="mt-10 w-5/6 flex flex-row flex-wrap justify-evenly align-middle">
      <AboutUs />
    </div>
    <div id="stuff" class="mt-10 w-5/6 flex flex-row flex-wrap justify-evenly align-middle">
      <!-- <div class="flex flex-col lg:flex-row flex-wrap items-stretch justify-around gap-10"> -->
				<h1 id="events" class="text-[6rem] mx-auto text-center text-base-content w-screen vimh">EVENTS</h1>
				{#each events as event}
				<EventCard name={event.name} desc={event.desc} id={event.id} image={event.image}/>
				{/each}
			<!-- </div> -->
    </div>
    <div id="testimonials" class="mt-12 w-5/6 flex flex-row flex-wrap justify-evenly align-middle">
      <!-- <Testimonial /> -->
      <svelte:component this={Testimonial} />
    </div>
    <div class=" mt-10 w-5/6 flex flex-row flex-wrap justify-evenly align-middle">
      <div id="faq" class="w-5/6"><Faq data_list={page_1} title={page_1_title} /></div>
    </div>
  </div>
<!-- {/await} -->

<!-- {@debug is_transparent} -->

{#if is_transparent}
  <ScrollDownIndicator />
{/if}

<style lang="postcss">
  .hero-bg {
    background: no-repeat top right;
    background-image: linear-gradient(#00000050, #000000dd), var(--bg-url);
    background-blend-mode: multiply, normal;
    background-size: cover;
  }

  /* .content-gradient {
    --tw-gradient-stops: #0000004D, theme('colors.sky.400'), theme('colors.rose.400'), theme('colors.lime.400'); 
    background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39));
  } */
</style>
