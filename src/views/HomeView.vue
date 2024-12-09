<script>
import ImageSlider from "@/components/ImageSlider.vue";
import LastFilm from "@/components/LastFilm.vue";
import Selector from "@/components/Selector.vue";
export default {
  name: "Home",
  components: {
    LastFilm,
    Selector,
    ImageSlider
  },
}
</script>

<template>
  <main>
    <LastFilm></LastFilm>
    <ImageSlider></ImageSlider>
    <Selector></Selector>
  </main>
</template>
