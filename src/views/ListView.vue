<template>
  <main>
    <div class="container">
      <div class="item" v-for="item in filteredList" :key="item.id">
        <p>{{ item.name }}</p> <!-- Выводим название фильма или другое поле -->
        <img :src=item.photo_big alt="Изображение не найдено" srcset="">
      </div>
      <div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue';
import { useRoute } from 'vue-router'; // Импортируем useRoute

export default {
  name: "List",
  setup() {
    const list = ref([]);
    const route = useRoute();
    const type = ref(route.params.type);

     async function fetchDataFromServer() {
      try {
        const response = await fetch('https://zigees.pythonanywhere.com/api/v1/filmslist/', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        list.value = data;
      } catch (error) {
        console.log('Ошибка', error);
      }
    }

    onBeforeMount(async () => {
      await fetchDataFromServer();
    });

    const filteredList = computed(() => {
      return list.value.filter(item => item.type === type.value);
    });

    return {
      list,
      type,
      filteredList
    };
  }
};
</script>

<style scoped>
.item {
  background-color: white;
  color: black;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img{
  width: 350px;
  height: 300px;
  align-items: center;
  border-radius: 30px;
}
</style>
