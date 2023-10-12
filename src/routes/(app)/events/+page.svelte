<script>
    import EventCard from '$lib/components/EventCard.svelte';
    import { events } from '$lib/data/events';
</script>

<!-- <div class="mx-auto  mt-14 w-full p-8 pt-0 flex flex-row flex-wrap mb-[40rem] lg:mb-[30rem]  lg:h-max  justify-evenly align-middle gap-4 lg:pb-10 "> -->
<div class="py-10 lg:px-20">
			<div class="flex flex-col lg:flex-row flex-wrap items-stretch justify-around gap-10">
				<h1 id="events" class="text-[6rem] mx-auto text-center text-base-content w-screen vimh">EVENT</h1>
				
				{#each events as event}
				<EventCard event={event}/>
				{/each}
			</div>
</div>

<style lang="postcss">
	div {
		/* background: linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)); */
		@apply bg-transparent;
	}
</style>