<script lang="ts">
	import { closeModal } from 'svelte-modals';
	import {fade} from 'svelte/transition';
	// provided by <Modals />
	export let isOpen: boolean;
	export let id: string;

	import {events} from '$lib/data/events';
	import { goto } from '$app/navigation';

	let data = events.find((event) => event.id == id) || events[0];
	
	let badge_text: string;
	let badge_color: string;
	switch (data.players) {
		case 1:
			badge_text = "Solo";
			badge_color = "badge-primary";
			break;
		case 2:
			badge_text = "Duo";
			badge_color = "badge-secondary";
			break;
		case 3:
			badge_text = "Trio";
			badge_color = "badge-accent";
			break;
		case 4:
			badge_text = "Quad";
			badge_color = "badge-error";
			break;
		case 5:
			badge_text = "Squad";
			badge_color = "badge-success";
			break;
		default:
			break;
	}
</script>

{#if isOpen}
	<div class="s-modal z-[200]" transition:fade>
		<div class="modal-container">
			<img class="image" src="{data.image ? data.image : 'http://placeimg.com/400/400/tech'}" alt="Event Description" />
			<div class="text-container">
				<h1 class="title vimh">{data.name}</h1>
				<div class="badge {badge_color} badge-outline">{badge_text}</div>
				<div class="date">Date: {(new Date(data.date)).toLocaleDateString('en-IN')}</div>
				<div class="description text-justify">
					{data.long_desc}
				</div>
				<div class="flex flex-col p-2 gap-4 w-full">
					<button on:click={()=>{closeModal();goto(`/register/${data.id}`)}} class="btn btn-block btn-primary" id="btn-1">Register</button>
					<button class="btn btn-block btn-secondary" on:click={()=>{closeModal();goto(`/pdf/${data.id}.pdf`)}} id="btn-2">Learn</button>
				</div>
			</div>
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
	
    /* allow click-through to backdrop */
    pointer-events: none;
  }
	.modal-container {
		/* background-color: blueviolet; */
		padding: 2rem;
		display: flex;
		flex-direction: column;
		/* overflow: scroll; */
		@apply w-full h-full xl:w-3/4 xl:h-3/4 pointer-events-none overflow-x-hidden overflow-y-auto min-w-[15rem] self-center;
	}

	.modal-container * {
		@apply pointer-events-auto;
	}

	.image {
		/* max-width: 70vw; */
		max-height: auto;
		border-radius: 1rem 1rem 0 0;
		@apply container max-w-2xl;
	}

	.text-container {
		/* max-width: 70vw; */
		/* background-color: red; */
		padding: 0.5rem 1.5rem;
		border-radius: 0 0 1rem 1rem;
		@apply container bg-base-300;
	}


	.title {
		/* line-height: 3.75rem; */
		font-size: 3.5rem;
		/* margin-left: 1rem; */
		/* padding: 0.5rem; */
		/* @apply bg-base-100; */
	}

	.date {
		/* background-color: yellow; */
		margin: 0 0 1rem 0rem;
		line-height: 1.75rem;
		font-size: 1.5rem;
		/* @apply bg-base-100; */
	}

	.description {
		/* background-color: aqua; */
		padding: 1rem;
		margin-bottom: 1rem;
		font-size: 1.05rem;
		@apply bg-base-100 rounded-xl;
	}

	@media only screen and (min-width: 1025px) {
		.modal-container {
			flex-direction: row;
			/* max-width: 90vw; */
		}

		.image {
			/* max-width: 40vw; */
			max-height: auto;
			border-radius: 1rem 0 0 1rem;
		}

		.text-container {
			border-radius: 0 1rem 1rem 0;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
		}
	}
</style>
