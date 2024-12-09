<script>
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
  },
}
</script>

<template>
    <div class="container">
        <Header></Header>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    .container{
        width: 400px;
        margin: 0 auto;
        margin-top: 25px;
    }

</style>
