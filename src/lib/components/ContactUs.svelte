<script>
  import { dev } from "$app/environment";
  let name = "";
  let email = "";
  let message = "";

  async function submitForm() {
    dev ? console.log(name, email, message) : "";
    await fetch("https://submit-form.com/echo", {
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
  }
</script>

<div class="self-stretch flex flex-col lg:flex-row">
  <!-- <form action="https://submit-form.com/lZJZ9yjn"> -->
  <div class="w-1/2 flex flex-col justify-center items-stretch justify-items-center">
    <form
      on:submit|preventDefault|stopPropagation={submitForm}
      action="https://submit-form.com/echo"
      class="form-control"
    >
      <label for="name" name="name" class="label">
        <span class="label-text">Name</span>
        <!-- <span class="label-text-alt">Alt label</span> -->
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
      />
      <label for="email" class="label">
        <span class="label-text">Email</span>
        <!-- <span class="label-text-alt">Alt label</span> -->
      </label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
      />
      <label for="message" class="label">
        <span class="label-text">Message</span>
        <!-- <span class="label-text-alt">Alt label</span> -->
      </label>
      <textarea
        id="message"
        name="message"
        type="text"
        placeholder="Type here"
        class="input-bordered w-full max-w-xs textarea min-h-16"
      />
      <button class="btn btn-primary max-w-xs mt-2" type="submit"
        ><iconify-icon class="text-4xl" icon="carbon:send" /></button
      >
    </form>
  </div>
  <div class="w-1/2 flex flex-row flex-wrap items-center justify-evenly" >
    <div class="infopoint">
      <iconify-icon class="text-4xl" icon="carbon:location" />
      <p class="text-lg">Address</p>
      <p class="text-sm">1234 Street Name</p>
      <p class="text-sm">City, ST 12345</p>
    </div>
    <div class="infopoint">
      <iconify-icon class="text-4xl" icon="carbon:phone" />
      <p class="text-lg">Phone</p>
      <p class="text-sm">123-456-7890</p>
    </div>
    <div class="infopoint">
      <iconify-icon class="text-4xl" icon="carbon:email" />
      <p class="text-lg">Email</p>
      <p class="text-sm">comsa.gcoen@gmail.com</p>
      </div>
  </div>
</div>
