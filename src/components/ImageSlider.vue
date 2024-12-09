<template>
    <div class="slider">
      <h2 class="slider-title">
        Ожидаемые фильмы <span class="year">2024</span>
      </h2>
      <div class="slider-wrapper" @touchstart="startSwipe" @touchmove="moveSwipe" @touchend="endSwipe" @mousedown="startSwipe" @mousemove="moveSwipe" @mouseup="endSwipe" @mouseleave="endSwipe">
        <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div class="slide" v-for="(image, index) in images" :key="index">
            <img :src="image" :alt="'Slide ' + (index + 1)" />
          </div>
        </div>
      </div>
      <div class="indicators">
        <button
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageSlider",
    data() {
      return {
        currentIndex: 0,
        images: [
          "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/49717712-2225429.jpeg",
          "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50863198-4658288.jpg",
          "https://s5.afisha.ru/mediastorage/6b/47/5b3b34930ab9479d9a117737476b.jpg",
          "https://static.kinoafisha.info/k/movie_posters/canvas/220x315/upload/movie_posters/4/1/8/5435814/6862106ad602764c6468af282afbb078.jpg"
        ],
      };
    },
    methods: {
      goToSlide(index) {
        this.currentIndex = index;
      },
        startSwipe(e) {
            this.isTouching = true;
            this.startX = e.touches ? e.touches[0].clientX : e.clientX;
        },
        moveSwipe(e) {
            if (!this.isTouching) return;
            const moveX = e.touches ? e.touches[0].clientX : e.clientX;
            const diff = this.startX - moveX;

            if (diff > 50) {
            this.nextSlide();
            this.isTouching = false;
            } else if (diff < -50) { 
            this.prevSlide();
            this.isTouching = false;
            }
        },
        endSwipe() {
            this.isTouching = false;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
      
    },
  };
  </script>
  
  <style scoped>

  .slider {
    position: relative;
    width: 360;
    margin: 0 auto;
    margin-top: 15px;
    padding: 20px;
    padding-top: 15px;
    background: white;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .slider-title {
    width: 270;
    font-size: 36px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  
  .slider-title .year {
    color: #a173f3;
    font-weight: bold;
  }
  
  .slider-wrapper {
    overflow: hidden; 
    width: 100%; 
  }

  .slider-track {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .slide {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .slide img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  
  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  .indicators button {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: #939393;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  
  .indicators button.active {
    opacity: 1;
    background: #a173f3;
  }
  </style>
  