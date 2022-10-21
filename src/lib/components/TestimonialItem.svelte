<script>
export let image = "http://placeimg.com/400/400/tech",
    pos = "GCoE Nagpur",
    name = "Some Indifferent Cunt",
    text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam alias eum labore rerum harum pariatur quae dignissimos. Eius ducimus debitis dolores est vitae ipsam ullam quas expedita quos voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati quo, doloremque alias necessitatibus officiis quia voluptatibus illo nihil consequatur. Minima, quas. Aperiam nesciunt laudantium voluptatem perferendis non quae iusto!";
</script>

<div class="testimonial-container pt-32">
  <div
    class="container max-w-xl flex flex-col items-stretch align-middle justify-between bg-base-300 px-6 py-10 rounded-lg"
  >
    <div class="image-container flex flex-row items-center justify-center -mt-24">
      <img class="h-36 rounded-full border-[0.25rem] border-base-content" src={image} alt="..." />
    </div>
    <div class="text-container flex flex-col items-stretch text-justify mt-4">
      <div class="position uppercase text-primary text-center">{pos}</div>
      <div class="name uppercase text-2xl text-center">{name}</div>
      <div class="bottom-text mt-4">{text}</div>
    </div>
  </div>
</div>
