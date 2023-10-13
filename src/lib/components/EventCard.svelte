<script lang="ts">
  import {openModal} from 'svelte-modals';
  import EventModal from '$lib/components/EventModal.svelte';
  import event_card from '$lib/assets/event-card.png';
	import { goto } from '$app/navigation';
  import type {Event} from '$lib/data/events'
  
  // openModal(EventModal, { title: "Alert", message: "This is an alert" })
  
  export let event: Event; 
  let onLearnMore = () => {
    openModal(EventModal, {id: event.id})
  }
</script>

<svelte:head>
  <link rel="preload" href={event.image} as="image" />
</svelte:head>

<div class=" group card mx-auto max-w-xs md:max-w-md lg:max-w-lg aspect-video bg-base-200 image-full max-h-60 my-8">
    <!-- <figure><img src="{image ? image : 'https://placeimg.com/400/225/tech'}" alt="Shoes" /></figure> -->
    <figure class="self-stretch"><img src="{event.card_image}" alt="Shoes" class="self-stretch " /></figure>
    <!-- <figure class="object-fill"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%236111e0' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="Shoes" class="!object-fill" /></figure> -->
    <div class="card-body">
      <!-- <h2 class="card-title vimh">{event.name}</h2> -->
      <!-- <p class="min-h-16">{event.hide ? 'Coming Soon':event.desc}</p> -->
      <div class="card-actions justify-end">
        <!-- <button on:click={()=>{goto(`/register/${id}`)}} class="btn btn-primary">Register</button> -->
        {#if !event.hide}
        <button on:click|stopPropagation={onLearnMore} class="visible bottom-0 left-0 w-[100%] btn absolute rounded-[1rem]">Explore</button>
        {/if}
      </div>
    </div>
  </div>

<style>
  .card {
    min-height: clamp(22vh, 100%, 32vh);
  }
  .card-title {
    letter-spacing: 0.2rem;
  }
  .card.image-full:before {
    opacity: 0;
  }
</style>