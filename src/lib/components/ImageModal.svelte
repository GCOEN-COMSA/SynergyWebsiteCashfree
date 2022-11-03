<script lang="ts">
  import { closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";
  import "iconify-icon";
  // provided by <Modals />
  export let isOpen: boolean;
  export let src: string;
</script>

{#if isOpen}
  <div class="s-modal z-[200]" transition:fade>
    <div class="modal-container">
        <div on:click={closeModal} class="absolute right-10 top-10 btn btn-ghost rounded-full h-fit w-fit p-1 text-4xl md:text-6xl xl:text-[4rem]"><iconify-icon icon="carbon:close-outline" /></div>
      <img class="image" {src} alt="Modal" />
    </div>
  </div>
{/if}

<style lang="postcss">
  .s-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @apply bg-black/60;

    /* allow click-through to backdrop */
    pointer-events: none;
  }
  .modal-container {
    /* background-color: blueviolet; */
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    @apply w-11/12 2xl:w-3/4  pointer-events-none overflow-x-hidden overflow-y-auto min-w-[15rem] self-center max-h-screen;
  }

  .modal-container * {
    @apply pointer-events-auto;
  }

  .image {
    /* max-width: 70vw; */
    /* max-height: auto; */
    /* @apply w-full h-full object-contain; */
    @apply rounded-xl;
  }
</style>
