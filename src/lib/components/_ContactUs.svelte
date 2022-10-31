<script>
  import { dev } from "$app/environment";
  let name = "";
  let email = "";
  let message = "";

  let loading = false;
  let is_done = false;
  async function submitForm() {
    loading = true;
    dev ? console.log(name, email, message) : "";
    await fetch("https://submit-form.com/lZJZ9yjn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    is_done = true;
    loading = false;
  }
</script>

<div class="self-stretch flex flex-col lg:flex-row gap-4">
  <!-- <form action="https://submit-form.com/lZJZ9yjn"> -->
  <div class="lg:flex-grow-[5] flex flex-col justify-center items-stretch justify-items-center">
    <form
    on:submit|preventDefault={() => {console.log('overriding default...')}}
      action=""
      method="POST"
      class="form-control"
    >
      <label for="name" name="name" class="label">
        <span class="label-text">Name</span>
        <!-- <span class="label-text-alt">Alt label</span> -->
      </label>
      <input
      bind:value={name}
        id="name"
        name="name"
        type="text"
        placeholder="Type here"
        class="input input-bordered bg-opacity-50  text-white placeholder:text-base-content w-full"
      />
      <label for="email" class="label">
        <span class="label-text">Email</span>
        <!-- <span class="label-text-alt">Alt label</span> -->
      </label>
      <input
      bind:value={email}
        id="email"
        name="email"
        type="text"
        placeholder="Type here"
        class="input input-bordered bg-opacity-50  text-white placeholder:text-base-content w-full"
      />
      <label for="message" class="label">
        <span class="label-text">Message</span>
        <!-- <span class="label-text-alt">Alt label</span> -->
      </label>
      <textarea
      bind:value={message}
        id="message"
        name="message"
        type="text"
        placeholder="Type here"
        class="input-bordered bg-opacity-50  text-white placeholder:text-base-content w-full textarea min-h-[10rem]"
      />
      <button on:click|preventDefault|stopPropagation|once={submitForm} disabled={loading} class="btn {is_done ? 'btn-success':'btn-primary'} mt-6 transition-colors duration-1000 {loading ? 'loading':''}" type="submit"
        >{#if loading}
           <!-- content here -->
        {:else}
        {#if is_done}
        <iconify-icon class="text-4xl" icon="carbon:checkmark" />
        {:else}
        <iconify-icon class="text-4xl" icon="carbon:send" />
        {/if}
        {/if}</button
      >
    </form>
  </div>
  <div class="lg:flex-grow-[1] max-w-xs flex flex-col flex-wrap items-center justify-center justify-items-center self-center lg:border-l-2 border-base-content mt-6 lg:mt-[unset] lg:ml-8" >
    <div class="infopoint flex flex-col items-center justify-center">
      <iconify-icon class="text-4xl" icon="carbon:location" />
      <p class="text-lg">Address</p>
      <p class="text-sm">1234 Street Name</p>
      <p class="text-sm">City, ST 12345</p>
    </div>
    <div class="infopoint my-4 flex flex-col items-center justify-center">
      <iconify-icon class="text-4xl" icon="carbon:phone" />
      <p class="text-lg">Phone</p>
      <p class="text-sm">123-456-7890</p>
    </div>
    <div class="infopoint flex flex-col items-center justify-center">
      <iconify-icon class="text-4xl" icon="carbon:email" />
      <p class="text-lg">Email</p>
      <p class="text-sm">gcoen.comsa@gmail.com</p>
      </div>
  </div>
</div>
