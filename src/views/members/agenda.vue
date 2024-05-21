<script setup>
import { ref } from 'vue';

const selectedColor = ref('gray');
const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: { start: new Date(), end: new Date() },
  }
]);

const moveToday = () => {
      const today = new Date();
      attrs.value = [
        {
          key: 'today',
          highlight: true,
          dates: { start: today, end: today },
        }
      ];
    };
</script>
<template>
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h2 class="text-center font-bold text-teal-700 sm:text-3xl sm:leading-9">Agenda</h2>
      <figure class="my-10">
        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-700 sm:text-1xl sm:leading-9">
          <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
            molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
        </blockquote>

      </figure>

      <VCalendar ref="calendar" expanded :initial-page="{ month: 5, year: 2024 }" :color="selectedColor"
        :attributes="attrs">
        <template #footer>
          <div class="w-full px-4 pb-3">
            <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold w-full px-3 py-1 rounded-md"
              @click="moveToday">
              Today
            </button>
          </div>
        </template>
      </VCalendar>
    </div>
  </section>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
