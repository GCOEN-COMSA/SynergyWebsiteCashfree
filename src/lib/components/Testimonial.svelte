<script>
    import TestimonialItem from "$lib/components/TestimonialItem.svelte";
    import {fly} from "svelte/transition";
    let selection = 0;

    import {Swiper, SwiperSlide} from 'swiper/svelte';
    import {Navigation, A11y, Pagination} from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/a11y';
    import 'swiper/css/pagination';
</script>


<!-- <div class="flex flex-col items-center z-10">
    <h1 class="text-4xl vimh uppercase">testimonials</h1>
    {#if selection==0}
    <TestimonialItem index={selection} pos="GCoE Nagpur 0"/>
    {:else if  selection==1}
    <TestimonialItem index={selection} pos="GCoE Nagpur 1" />
    {:else}
    <TestimonialItem index={selection} pos="GCoE Nagpur -1" />
    {/if}
    <div class="selector-group flex flex-row items-center mt-4 gap-4">
        <div on:click={()=>{selection=-1}} class="badge cursor-pointer hover:badge-secondary transition-all duration-300 {selection == -1 ? 'badge-primary':''}"></div>
        <div on:click={()=>{selection=0}} class="badge cursor-pointer hover:badge-secondary transition-all duration-300 {selection == 0 ? 'badge-primary':''}"></div>
        <div on:click={()=>{selection=1}} class="badge cursor-pointer hover:badge-secondary transition-all duration-300 {selection == 1 ? 'badge-primary':''}"></div>
</div>
</div> -->

<Swiper modules={[Navigation, A11y, Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable: true}}> <SwiperSlide><TestimonialItem index={selection} pos="GCoE Nagpur -1" /></SwiperSlide><SwiperSlide><TestimonialItem index={selection} pos="GCoE Nagpur 0" /></SwiperSlide><SwiperSlide><TestimonialItem index={selection} pos="GCoE Nagpur 1" /></SwiperSlide></Swiper>
