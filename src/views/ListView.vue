
<template>
  <main>
    <div class="container">
        <div class="item" v-for="item in list"></div>
        123
        {{ this.type }}
    </div>
    
  </main>
</template>


<script>

// const list = ref([])
// const apiUrl = ref('https://zigees.pythonanywhere.com/api/v1/filmslist/');

// async function fetchDataFromServer() {
//     try {
//         const response = await fetch(apiUrl.value);
//         const json = await response.json();
//         list = json;
//         console.log(list);
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// }

// const setup = () => {
//     onBeforeMount(async () => {
//         await fetchDataFromServer();
//     });
//     return { items: list };
// };

export default {
//   setup,
  name: "List",
  computed: {
    filteredList() {

      return this.list.filter(item => item.type === this.type);
    },
    },
    data(){
        return {
            type: this.$route.params.type
        };
    }
}
</script>


<style scoped>
.container{
    color: white;
}
</style>
