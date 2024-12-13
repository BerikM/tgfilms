<script>
export default {
  name: "FilmPage",

}
</script>

<template>
  <div class="container-main">
        <p class="title-text"> Трансформеры: Начало </p>
        <img class="main-img" src="https://zigees.pythonanywhere.com/media/photos_big/2024/12/12/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80.jpeg" alt="" srcset="">
        <p>Год производства:</p>
        <p>30 августа 2024</p>
        <p>Жанр: мультфильм, фантастика, фэнтези, боевик, приключения </p>
        <p>Время: 104 мин</p>
        <p>В качестве: 720р</p>
  </div>

  <div class="container-discription">
        <h3 class="name" >Про что</h3>
        <h3 class="name" >Трансформеры: Начало</h3>
        <p class="discription">Действие происходит на планете Кибертрон, населенной трансформерами, и  рассказываето дружбе Ориона Пакса и Д-16. Будучи роботами низшего  класса, неспособными на трансформацию</p>
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
    height: 600px;
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
.discription{
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

</style>