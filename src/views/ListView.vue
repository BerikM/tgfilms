<template>
  <main>
    <div class="container">
      <div class="item" v-for="item in filteredList" :key="item.id">
        <router-link :to="`/film/${item.id}`" class="link">
              <p>{{ item.name }}</p> 
              <img :src=item.photo_big alt="Изображение не найдено" srcset="">
              <div class="text">{{ getDate(item) }}</div>
             <div class="text">{{ getGenres(item) }}</div>
          </router-link>
        </div>
    </div>
  </main>
</template>

<script>
import { computed, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

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
  },
  methods:{
    getDate(film){
            const day = film.date_prod.slice(-2);
            const month = Number(film.date_prod.slice(-5, -3))/1;
            const year = film.date_prod.slice(0,4);
            const months = [
                'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 
                'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
            ];
            return day +" "+ months[month]+" " + year + " Года";
        }
      , getGenres(film){
          let text = '';
          film.genre.forEach(item => {
              text += item.name + ', ';
          });
          return text;
      }
  }
 
};
</script>

<style scoped>
.item {
  background-color: white;
  color: black;
  width: 400px;
  height: auto;
  border-radius: 30px;
  margin-top: 15px;
}
img{
  width: auto;
  height: 300px;
  align-items: center;
  border-radius: 30px;
}

.link{
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
}
.text{
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-top: 5px;
  padding-bottom: 10px;
}
</style>
