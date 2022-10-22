<script lang="ts">
    import ImageModal from '$lib/components/ImageModal.svelte';
    import { openModal } from 'svelte-modals';
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

<div class="grid image-grid alt-{alt} mt-10 lg:mt-4">
    {#if alt}
  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link">
        <img class="tile-img tile-img1" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>
  <div class="grid-block">
    <div class="tile flex flex-col items-center justify-center">
        <h1 class="text-4xl vimh">GALLERY 2021</h1>
    </div>
</div>
    {:else}
    <div class="grid-block">
        <div class="tile flex flex-col items-center justify-center">
            <h1 class="text-4xl vimh">GALLERY 2021</h1>
        </div>
    </div>
  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link">
        <img class="tile-img tile-img1" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>
    {/if}

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img2" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img3" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img4" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img5" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img6" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img7" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img8" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div>

  <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img9" src="https://placeimg.com/480/270/tech" alt="Tech" />
      </span>
    </div>
  </div>

  <!-- <div class="grid-block">
    <div class="tile">
      <span on:click|preventDefault={clicky} class="tile-link" href="#">
        <img class="tile-img tile-img10" src="https://placeimg.com/480/270/arch" alt="Tech" />
      </span>
    </div>
  </div> -->
</div>

<style>
  .grid {
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
    -webkit-transform: none !important;
    transform: none !important;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .image-grid {
    -webkit-transform: none !important;
    transform: none !important;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }
}

  .image-grid .tile-link:hover .tile-img {
    top: -1rem;
    left: -1rem;
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
</style>
