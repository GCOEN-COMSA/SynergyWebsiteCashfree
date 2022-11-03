<script>
  import TestimonialItem from "$lib/components/TestimonialItem.svelte";
  import { fly } from "svelte/transition";
  let selection = 0;

  import latesh from "$lib/assets/testimonials/latesh.jpg";
  import ashutosh from "$lib/assets/testimonials/ashutosh.png";
  import tanushree from "$lib/assets/testimonials/tanushree.png";

  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation, A11y, Pagination, Autoplay } from "swiper";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/a11y";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";
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

<Swiper
  modules={[Navigation, A11y, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay
  loop={true}
  pagination={{ clickable: true }}
>
  <SwiperSlide><TestimonialItem index={selection} image={latesh} name="Dr. Latesh Bhagat" pos="CSE Dept Head." text="Sharing my experience about the previous iterations of Synergy, I would like to appreciate the efforts taken by the students and their hard work to make this event a success. It was an event full of experience and enthusiasm. It’s a great platform for the students to make a breakthrough in their skillset where they get to compete with other brilliant minds." /></SwiperSlide>
  <SwiperSlide><TestimonialItem index={selection} image={ashutosh} name="Ashutosh Rokade" pos="Student, GCoE Nagpur" /></SwiperSlide>
  <SwiperSlide><TestimonialItem index={selection} image={tanushree} name="Tanushree Manekar" pos="Student, GCoE Nagpur" /></SwiperSlide>
</Swiper>
