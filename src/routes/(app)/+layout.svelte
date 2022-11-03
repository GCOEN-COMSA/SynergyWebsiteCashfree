<script lang="ts">
  import "../../app.postcss";
  import "iconify-icon";
  import Logo from "$lib/assets/logo.png";
  // import ScrollDownIndicator from "$lib/components/ScrollDownIndicator.svelte";
  import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
  import FooterMap from "$lib/components/FooterMap.svelte";
  afterNavigate(() => {
    contentElem.scrollTo(0, 0);
    sidebar.checked = false;
  });

  import { Modals, closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";

  import { supabaseClient } from "$lib/db";
  import { invalidate } from "$app/navigation";
  import {navigating} from "$app/stores";
  import { onMount } from "svelte";
  let contentElem: HTMLElement;
  let contentElemScrollTop = 0;
  let is_transparent = true;
  let sidebar: HTMLInputElement;
  $: is_transparent = contentElemScrollTop < 128;

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate("supabase:auth");
    });

    contentElem.addEventListener(
      "scroll",
      ({ target }) => (contentElemScrollTop = (target as HTMLDivElement)?.scrollTop),
    );

    return () => {
      subscription.unsubscribe();
      if (browser)
        contentElem.removeEventListener(
          "scroll",
          ({ target }) => (contentElemScrollTop = (target as HTMLDivElement)?.scrollTop),
        );
    };
  });

  import { browser } from "$app/environment";
  import FooterSocials from "$lib/components/FooterSocials.svelte";
    import Loader from "$lib/components/Loader.svelte";

  
</script>

<Modals>
  <button slot="backdrop" class="backdrop z-[100]" transition:fade on:click={closeModal} />
</Modals>

<div data-sveltekit-prefetch class="drawer">
  <input id="side-drawer" bind:this={sidebar} type="checkbox" class="drawer-toggle" />
  <div
    id="content-elem"
    bind:this={contentElem}
    class="drawer-content scroll-smooth snap-y snap-mandatory snap-always scroll-m-16 flex flex-col bg-content bg-local"
  >
    <!-- Navbar -->
    <div
      class="w-full navbar fixed top-0 left-0 {is_transparent
        ? 'bg-transparent'
        : 'bg-base-300'} transition-colors duration-200 z-50 px-2 lg:px-6"
    >
      <div class="flex-1 lg:px-2 py-2 lg:mx-2 {is_transparent ? 'invisible' : 'visible'}">
        <img on:click={()=>{goto('/')}} src={Logo} alt="Synergy Logo" class="max-h-12 btn btn-ghost p-0" />
      </div>
      <div class="flex-none lg:hidden">
        <label for="side-drawer" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal gap-4 pr-8">
          <!-- Navbar menu content here -->
          <li><a data-sveltekit-reload class="btn btn-ghost rounded-lg"  href="/">Home</a></li>
          <li><a class="btn btn-ghost rounded-lg" href="/events/">Events</a></li>
          <li><a class="btn btn-ghost rounded-lg" href="/gallery">Gallery</a></li>
          <li><a class="btn btn-ghost rounded-lg" href="/team/">Team</a></li>
          <li><a class="btn btn-ghost rounded-lg" href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <slot />
    <footer
      class="flex flex-col items-center pt-4 pb-8 px-4 mt-6 text-base-content text-center justify-center justify-items-center bg-footer rounded-t-md"
    >
      <div class="flex flex-col items-stretch justify-center">
        <img src={Logo} class="max-h-40" alt="" />
        <FooterSocials />
      </div>
      <footer
      class="footer gap-y-4 lg:gap-y-10 pb-8 pt-4 px-4 text-base-content text-center lg:text-left justify-center justify-items-center lg:justify-around"
    >
      <div>
        <FooterMap />
        <!--
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current hidden"
          ><path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          /></svg
        >
         <p>A Project by Computer Science Students Association of GCOEN</p> -->
      </div>
      <!-- Section 1 -->
      <div class="m-auto">
        <span class="footer-title vimh">Contact Us</span>
        <a href="/contact-us" class="btn btn-ghost">Contact Info</a>
        <a href="/team" class="btn btn-ghost">Teams</a>
      </div>
      <!-- Section 2 -->
      <div class="m-auto">
        <span class="footer-title vimh">Information</span>
        <a href="/#about-us" class="btn btn-ghost">About Us</a>
        <a href="https://gcoen.ac.in" target="_blank" rel="external noopener noreferrer" class="btn btn-ghost">Our College</a>
      </div>
      <!-- Section 3 -->
      <div class="m-auto">
        <span class="footer-title vimh">Legal</span>
        <a href="/legal/tos" class="btn btn-ghost">Terms & Conditions</a>
        <a href="/legal/pp" class="btn btn-ghost">Privacy policy</a>
      </div>
    </footer>
    </footer>

    <footer class="footer-center bg-black text-white text-opacity-50 py-3 text-sm">
      &copy; 2022 COMSA | GCOEN. All Rights Reserved.
    </footer>
  </div>
  <div class="drawer-side">
    <label for="side-drawer" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li class="flex flex-row-reverse align-middle items-end">
        <label for="side-drawer" class="btn btn-ghost btn-xl flex-shrink"
          ><iconify-icon class="text-4xl" icon="carbon:close" /></label
        >
      </li>
      <li><a data-sveltekit-reload class="pl-10" href="/">Home</a></li>
      <!-- <li><a on:click={()=>{sidebar.checked =false}} href="/#about-us">About</a></li> -->
      <li><a class="pl-10" href="/events/">Events</a></li>
      <li><a class="pl-10" href="/gallery">Gallery</a></li>
      <li><a class="pl-10" href="/team/">Team</a></li>
      <li><a class="pl-10" href="/contact-us">Contact us</a></li>
    </ul>
  </div>
</div>

{#if $navigating}
   <Loader />
{/if}

<style lang="postcss">
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  .footer > * {
    justify-items: center;
  }

  .bg-content {
    background: linear-gradient(to top, rgb(56, 189, 248), rgb(49, 46, 129));
    /* background-attachment: scroll ; */
    /* @apply bg-[rgb(30,64,175)] bg-opacity-100; */
  }

  .bg-footer {
    /* background: linear-gradient(to bottom, rgb(29, 78, 216), rgb(30, 64, 175), rgb(00, 00, 00)) scroll; */
    /* background-attachment: scroll ; */
    /* background: linear-gradient(to bottom , rgba(14, 21, 37, 0), rgba(14, 21, 37, 0.25), rgba(0, 0, 0, .75) 99%); */
    @apply bg-base-200 bg-opacity-60;
  }

  .footer-title {

    @apply text-white opacity-100 text-lg tracking-[0.15rem];
  }
</style>
