<script>

    import { fade } from "svelte/transition";

</script>
<div in:fade out:fade class="global-scroll-div-1" />
<div in:fade out:fade class="global-scroll-div-2" />

<style>
  div {
    left: 50%;
    transform: translateY(0%) rotate(45deg);
    opacity: 0;
    z-index: 100;
  }
  .global-scroll-div-1 {
    width: 2em;
    height: 2em;
    background-color: transparent;
    z-index: 999;
    bottom: 25px;
    position: absolute;
    border-width: 0 0.25em 0.25em 0;
    border-style: solid;
    border-color: antiquewhite;
    animation: scrolldown 1.2s ease-in-out infinite 0.15s;
  }
  .global-scroll-div-2 {
    width: 2em;
    height: 2em;
    background-color: transparent;
    z-index: 999;
    bottom: 40px;
    position: absolute;
    border-width: 0 0.25em 0.25em 0;
    border-style: solid;
    border-color: antiquewhite;
    animation: scrolldown 1.2s ease-in-out infinite;
  }

  @keyframes scrolldown {
    0% {
      transform: translateY(20%) rotate(45deg);
      opacity: 0.7;
    }
    50% {
      transform: translateY(0%) rotate(45deg);
      opacity: 0.2;
    }
    100% {
      transform: translateY(20%) rotate(45deg);
      opacity: 0.7;
    }
  }
</style>
