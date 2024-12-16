<script>
import { computed, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: "FilmPage",
    setup(){
        const list = ref([]);
        const route = useRoute();
        const id = ref(route.params.id);

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

    const currentFilm = computed(() => {
      return list.value.find(item => item.id === Number(id.value));
    });

    return {
        id,
        currentFilm,
        list
    }
    },
    methods:{
        getDate(){
            const day = this.currentFilm.date_prod.slice(-2);
            const month = Number(this.currentFilm.date_prod.slice(-5, -3))/1;
            const year = this.currentFilm.date_prod.slice(0,4);
            const months = [
                'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 
                'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
            ];
            return day +" "+ months[month]+" " + year + " Года";
        }
        , getGenres(){
            let text = '';
            this.currentFilm.genre.forEach(item => {
                text += item.name + ', ';
            });
            return text;
        }
    }
    
}
</script>

<template>
  <div class="container-main" v-if="currentFilm">
        <p class="title-text"> {{ this.currentFilm.name }} </p>
        <img class="main-img" :src="this.currentFilm.photo_big" alt="Изображение загружается" srcset="">
        <p>Год производства:</p>
        <p>{{ getDate() }}</p>
        <p>Жанр: {{ getGenres() }} </p>
        <p>Время: 104 мин</p>
        <p>В качестве: 720р</p>
  </div>

  <div class="container-discription" v-if="currentFilm">
        <h3 class="name" >Про что</h3>
        <h3 class="name" >{{ currentFilm.name }}</h3>
        <p class="description">{{ this.currentFilm.description }}</p>
  </div>

  <div class="container-video">
    <p class="video-text">Озвучка:</p>
    <div class="voices">
        <div class="voices-item">Дубляж</div>
        <div class="voices-item">Дубляж</div>
        <div class="voices-item">Дубляж</div>
        <div class="voices-item">Дубляж</div>
    </div>
    <video controls>
        <source src="https://zigees.pythonanywhere.com/media/video/2024/12/12/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80.av1.mp4" type="video/mp4">
    </video>
     <div class="download">Скачать</div>
  </div>
  
</template>


<style scoped>

.container-main{
    width: 400px;
    height: auto;
    background-color: white;
    border-radius: 40px;
    margin-top: 15px;
}
.title-text{
    width: 320px;
    font-size: 24px;
    font-weight: 400;
    margin: 0 auto;
    padding-top: 15px;
}
.main-img{
    margin: 0 auto;
    width: auto;
    height: 380px;
    padding-top: 15px;
    display: block;
    border-radius: 40px;
    margin-bottom: 15px;
}

p{
    text-align: center;
    margin: 0;
}

.container-discription{
    width: 400px;
    background-color: white;
    margin-top: 15px;
    padding-bottom: 15px;
    border-radius: 30px;
}

.name{
    margin: 0;
    padding-top: 5px;
    font-size: 15px;
    text-align: center;
}
.description{
    width: 300px;
    margin: 0 auto;
    margin-top: 5px;
}

.container-video{
    width: 400px;
    height: 470px;
    background-color: #141D34;
    border-radius: 30px;
    margin-top: 15px;
}

video{
    width: 400px;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px
}

.video-text{
    color: white;
    padding-top: 15px;
}
.voices{
    width: 360px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.voices-item{
    margin-top: 15px;
    width: 175px;
    height: 40px;
    background-color: #8A2BE2;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.download{
    width: 175px;
    height: 40px;
    background-color: #8A2BE2;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0 auto;
}
p{
    max-width: 380px;
    margin-top: 5px;
}
</style>