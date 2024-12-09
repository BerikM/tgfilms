<script>
import Header from "@/components/Header.vue";
import ImageSlider from "@/components/ImageSlider.vue";
import LastFilm from "@/components/LastFilm.vue";
import Selector from "@/components/Selector.vue";

export default {
  name: "Home",
  components: {
    Header,
    LastFilm,
    Selector,
    ImageSlider
  },
}
</script>

<template>
    <div class="container">
        <Header></Header>
        <LastFilm></LastFilm>
        <ImageSlider></ImageSlider>
        <Selector></Selector>
    </div>
  <!-- <RouterView /> -->
</template>

<style scoped>
    .container{
        width: 400px;
        margin: 0 auto;
        margin-top: 25px;
    }

</style>
