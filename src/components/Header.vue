<script>
export default {
  name: "Header",

}
</script>

<template>
  <div class="container">
    <div class="burger">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
    <div class="search-container">
        <input type="search" name="" id="search" placeholder="Поиск" >
        <img  class='search-logo' src="./icons/search_icon.png" alt="" srcset="">
    </div>
    <div class="likes">
        <img class="likes-logo" src="./icons/likes.png" alt="" srcset="">
    </div>
    <div class="profile">
        <img src="./icons/avatar.png" alt="" srcset="">
        <p>Берик</p>
    </div>
  </div>
</template>

<style scoped>

.container{
    width: 400px;
    height: 45px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.burger{
    background-color: #8A2BE2;
    width: 30px;
    height: 30px;
    border-radius: 50px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.circle{
    background-color: white;
    width: 5px;
    height: 5px;
    border-radius: 50px;
}
.search-container{
    width: 190px;
    height: 30px;
}
#search{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: #141D34;
    font-size: 12pt;
    padding-left: 10px;
}
.search-logo{
    position: relative;
    left: 160px;
    top:-28px
}
.likes{
    display: flex;
    align-items: center;
}

.profile{
    width: 93px;
    height: 30px;
    border-color: #141D34;
    border-radius: 50px;
    border-width: 2px;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

</style>