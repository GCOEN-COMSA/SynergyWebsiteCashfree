<script lang="ts">
  import ImageModal from "$lib/components/ImageModal.svelte";
  import { openModal } from "svelte-modals";
  export let alt = false;
  let clicky = (
    event: MouseEvent & {
      currentTarget: EventTarget & HTMLSpanElement;
    },
  ) => {
    let img_elem = event.currentTarget.getElementsByTagName("img");
    let img_src = img_elem[0].src;
    openModal(ImageModal, { src: img_src });
  };
</script>

<div class="g-grid image-grid alt-{alt} mt-10 mb-0 lg:-mt-40">
  <!-- {#if alt}
    <div class="grid-block">
      <div class="tile">
        <span on:click|preventDefault={clicky} class="tile-link delay-75">
          <img class="tile-img tile-img1 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
        </span>
      </div>
    </div>
     <div class="grid-block">
      <div class="tile flex flex-col items-center justify-center">
        <h1 class="text-4xl vimh">SYNERGY 2021</h1>
      </div>
    </div> 
  {:else}
     <div class="grid-block">
      <div class="tile flex flex-col items-center justify-center">
        <h1 class="text-4xl vimh">SYNERGY 2021</h1>
      </div>
    </div> 
    <div class="grid-block">
      <div class="tile">
        <span on:click|preventDefault={clicky} class="tile-link delay-75">
          <img class="tile-img tile-img1 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
        </span>
      </div>
    </div>
  {/if} -->

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-75">
        <img class="tile-img tile-img1 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-100" href="#">
        <img class="tile-img tile-img2 alt-{alt}" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-150" href="#">
        <img class="tile-img tile-img3 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-200" href="#">
        <img class="tile-img tile-img4 alt-{alt}" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-300" href="#">
        <img class="tile-img tile-img5 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-500" href="#">
        <img class="tile-img tile-img6 alt-{alt}" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-700" href="#">
        <img class="tile-img tile-img7 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link delay-1000" href="#">
        <img class="tile-img tile-img8 alt-{alt}" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img9 alt-{alt}" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img10" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>
</div>

<style>
  .g-grid {
    width: 100%;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .grid-block {
    width: 50%;
    min-height: 11.25rem;
    padding: 1rem;
  }

  .image-grid {
    -webkit-transform: rotateX(45deg) rotateZ(45deg);
    transform: rotateX(45deg) rotateZ(45deg);
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .image-grid.alt-true {
    -webkit-transform: rotateX(-45deg) rotateZ(-45deg);
    transform: rotateX(-45deg) rotateZ(-45deg);
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  @media (max-width: 1024px) {
    .image-grid.alt-true {
      -webkit-transform: none;
      transform: none;
      -webkit-perspective: 1000px;
      perspective: 1000px;
    }

    .image-grid {
      -webkit-transform: none;
      transform: none;
      -webkit-perspective: 1000px;
      perspective: 1000px;
    }

    .grid-block {
      width: 100%;
      min-height: unset;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .image-grid .tile-link:hover .tile-img {
    top: -1rem;
    left: -1rem;
  }

  .image-grid.alt-true .tile-link:hover .tile-img {
    top: -1rem;
    left: 1rem;
  }

  .image-grid .tile-img {
    position: relative;
    top: 0;
    left: 0;
    -webkit-transition-property: opacity, top, left, box-shadow;
    transition-property: opacity, top, left, box-shadow;
  }

  .tile-link {
    display: block;
  }

  .tile-link:hover .tile-img {
    opacity: 1;
  }

  .tile-link:hover .tile-img-link {
    display: block;
  }

  .tile-link:hover .tile-img-link:hover .tile-img {
    opacity: 0.5;
  }

  .tile-img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 1;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-duration: 0.125s;
    transition-duration: 0.125s;
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    @apply rounded-lg;
  }
  .tile-link:hover .tile-img1 {
    box-shadow: 5px 5px rgba(244, 170, 200, 0.4), 10px 10px rgba(244, 170, 200, 0.3),
      15px 15px rgba(244, 170, 200, 0.2), 20px 20px rgba(244, 170, 200, 0.1),
      25px 25px rgba(244, 170, 200, 0.05);
  }

  .tile-link:hover .tile-img2 {
    box-shadow: 5px 5px rgba(45, 186, 233, 0.4), 10px 10px rgba(45, 186, 233, 0.3),
      15px 15px rgba(45, 186, 233, 0.2), 20px 20px rgba(45, 186, 233, 0.1),
      25px 25px rgba(45, 186, 233, 0.05);
  }

  .tile-link:hover .tile-img3 {
    box-shadow: 5px 5px rgba(214, 221, 244, 0.4), 10px 10px rgba(214, 221, 244, 0.3),
      15px 15px rgba(214, 221, 244, 0.2), 20px 20px rgba(214, 221, 244, 0.1),
      25px 25px rgba(214, 221, 244, 0.05);
  }

  .tile-link:hover .tile-img4 {
    box-shadow: 5px 5px rgba(82, 119, 192, 0.4), 10px 10px rgba(82, 119, 192, 0.3),
      15px 15px rgba(82, 119, 192, 0.2), 20px 20px rgba(82, 119, 192, 0.1),
      25px 25px rgba(82, 119, 192, 0.05);
  }

  .tile-link:hover .tile-img5 {
    box-shadow: 5px 5px rgba(138, 218, 245, 0.4), 10px 10px rgba(138, 218, 245, 0.3),
      15px 15px rgba(138, 218, 245, 0.2), 20px 20px rgba(138, 218, 245, 0.1),
      25px 25px rgba(138, 218, 245, 0.05);
  }

  .tile-link:hover .tile-img6 {
    box-shadow: 5px 5px rgba(203, 215, 193, 0.4), 10px 10px rgba(203, 215, 193, 0.3),
      15px 15px rgba(203, 215, 193, 0.2), 20px 20px rgba(203, 215, 193, 0.1),
      25px 25px rgba(203, 215, 193, 0.05);
  }

  .tile-link:hover .tile-img7 {
    box-shadow: 5px 5px rgba(91, 209, 250, 0.4), 10px 10px rgba(91, 209, 250, 0.3),
      15px 15px rgba(91, 209, 250, 0.2), 20px 20px rgba(91, 209, 250, 0.1),
      25px 25px rgba(91, 209, 250, 0.05);
  }

  .tile-link:hover .tile-img8 {
    box-shadow: 5px 5px rgba(145, 156, 196, 0.4), 10px 10px rgba(145, 156, 196, 0.3),
      15px 15px rgba(145, 156, 196, 0.2), 20px 20px rgba(145, 156, 196, 0.1),
      25px 25px rgba(145, 156, 196, 0.05);
  }

  .tile-link:hover .tile-img9 {
    box-shadow: 5px 5px rgba(188, 97, 129, 0.4), 10px 10px rgba(188, 97, 129, 0.3),
      15px 15px rgba(188, 97, 129, 0.2), 20px 20px rgba(188, 97, 129, 0.1),
      25px 25px rgba(188, 97, 129, 0.05);
  }

  .tile-link:hover .tile-img10 {
    box-shadow: 5px 5px rgba(4, 140, 231, 0.4), 10px 10px rgba(4, 140, 231, 0.3),
      15px 15px rgba(4, 140, 231, 0.2), 20px 20px rgba(4, 140, 231, 0.1),
      25px 25px rgba(4, 140, 231, 0.05);
  }
  
  .tile-link:hover .tile-img1.alt-true {
    box-shadow: -5px 5px rgba(244, 170, 200, 0.4), -10px 10px rgba(244, 170, 200, 0.3),
      -15px 15px rgba(244, 170, 200, 0.2), -20px 20px rgba(244, 170, 200, 0.1),
      -25px 25px rgba(244, 170, 200, 0.05);
  }

  .tile-link:hover .tile-img2.alt-true {
    box-shadow: -5px 5px rgba(45, 186, 233, 0.4), -10px 10px rgba(45, 186, 233, 0.3),
      -15px 15px rgba(45, 186, 233, 0.2), -20px 20px rgba(45, 186, 233, 0.1),
      -25px 25px rgba(45, 186, 233, 0.05);
  }

  .tile-link:hover .tile-img3.alt-true {
    box-shadow: -5px 5px rgba(214, 221, 244, 0.4), -10px 10px rgba(214, 221, 244, 0.3),
      -15px 15px rgba(214, 221, 244, 0.2), -20px 20px rgba(214, 221, 244, 0.1),
      -25px 25px rgba(214, 221, 244, 0.05);
  }

  .tile-link:hover .tile-img4.alt-true {
    box-shadow: -5px 5px rgba(82, 119, 192, 0.4), -10px 10px rgba(82, 119, 192, 0.3),
      -15px 15px rgba(82, 119, 192, 0.2), -20px 20px rgba(82, 119, 192, 0.1),
      -25px 25px rgba(82, 119, 192, 0.05);
  }

  .tile-link:hover .tile-img5.alt-true {
    box-shadow: -5px 5px rgba(138, 218, 245, 0.4), -10px 10px rgba(138, 218, 245, 0.3),
      -15px 15px rgba(138, 218, 245, 0.2), -20px 20px rgba(138, 218, 245, 0.1),
      -25px 25px rgba(138, 218, 245, 0.05);
  }

  .tile-link:hover .tile-img6.alt-true {
    box-shadow: -5px 5px rgba(203, 215, 193, 0.4), -10px 10px rgba(203, 215, 193, 0.3),
      -15px 15px rgba(203, 215, 193, 0.2), -20px 20px rgba(203, 215, 193, 0.1),
      -25px 25px rgba(203, 215, 193, 0.05);
  }

  .tile-link:hover .tile-img7.alt-true {
    box-shadow: -5px 5px rgba(91, 209, 250, 0.4), -10px 10px rgba(91, 209, 250, 0.3),
      -15px 15px rgba(91, 209, 250, 0.2), -20px 20px rgba(91, 209, 250, 0.1),
      -25px 25px rgba(91, 209, 250, 0.05);
  }

  .tile-link:hover .tile-img8.alt-true {
    box-shadow: -5px 5px rgba(145, 156, 196, 0.4), -10px 10px rgba(145, 156, 196, 0.3),
      -15px 15px rgba(145, 156, 196, 0.2), -20px 20px rgba(145, 156, 196, 0.1),
      -25px 25px rgba(145, 156, 196, 0.05);
  }

  .tile-link:hover .tile-img9.alt-true {
    box-shadow: -5px 5px rgba(188, 97, 129, 0.4), -10px 10px rgba(188, 97, 129, 0.3),
      -15px 15px rgba(188, 97, 129, 0.2), -20px 20px rgba(188, 97, 129, 0.1),
      -25px 25px rgba(188, 97, 129, 0.05);
  }

  .tile-link:hover .tile-img10.alt-true {
    box-shadow: -5px 5px rgba(4, 140, 231, 0.4), -10px 10px rgba(4, 140, 231, 0.3),
      -15px 15px rgba(4, 140, 231, 0.2), -20px 20px rgba(4, 140, 231, 0.1),
      -25px 25px rgba(4, 140, 231, 0.05);
  }

  .tile-link {
    --borderWidth: 3px;
    position: relative;
    /* border-radius: var(--borderWidth) !important; */
    @apply rounded-lg;
  }
  .tile-link:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  /* border-radius: calc(2 * var(--borderWidth)); */
  z-index: -1;
  animation: animatedgradient 4s ease alternate infinite;
  background-size: 300% 300%;
  @apply rounded-lg;
  
}


@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
