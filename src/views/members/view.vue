<style>
        .principal-padding{
          padding:20px;
        }
        .upload-container {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px dashed #ccc;
            width: 100%;
            height: 100%;
            text-align: center;
            cursor: pointer;
            color: #999;
            position: relative;
        }
        .upload-container:hover {
            border-color: #aaa;
        }
        .upload-container input[type="file"] {
            display: none;
        }
        .upload-container img {
            max-width: 100%;
            max-height: 100%;
            display: block;
        }
  
</style>
<script>
export default {
    data() {
      return {
        imageUrl: null
      };
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      loadFile(event) {
        const file = event.target.files[0];
        if (file) {
          this.imageUrl = URL.createObjectURL(file);
        }
      }
    }
};
</script>

<template>
    <div class=" py-24 sm:py-26 lg:px-8">
    <div>
      <h2 class="text-center font-bold text-teal-700 sm:text-3xl sm:leading-9">Create a member</h2>
    </div>

    <form action="#" method="POST" class="mx-auto">
      <div class="grid grid-cols-2 ">
        <div>
          <div class="mt-2.5">
            <label for="birthdate" class="block text-sm font-medium leading-6 text-teal-800">Voorman</label>

            <input  placeholder="San "
                    type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-4" />
            
            <label for="birthdate" class="block text-sm font-medium leading-6 text-teal-800">Achternaam</label>
            <input  placeholder="Veen:"
                    type="text" name="last-name" id="last-name"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-4" />

            <label for="birthdate" class="block text-sm font-medium leading-6 text-teal-800">Geboortedatum</label>
            <input  placeholder="Geboortedatum:"
                    type="date" name="birthdate" id="birthdate"  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-4" />
          </div>
        </div>
        <div class="principal-padding">
          <div class="upload-container "  @click="triggerFileInput">
              <span v-if="!imageUrl" id="displayText">Display Photo</span>
              <input type="file" ref="fileInput" accept="image/*" @change="loadFile">
              <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Photo">
          </div>
        </div>
      </div>

      <div class="text-center">
          <div class="mt-10 flex items-center justify-center">
            <a href="#" class="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Opslaan nieuw lid</a>
          </div>
        </div>

    </form>

    

  </div>

</template>