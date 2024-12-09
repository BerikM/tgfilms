<script>

export default {
  name: "Selector",

}
</script>

<template>
    <div class="container">
        <div class="item"><div class="text">Сериалы</div></div>
        <div class="item"><div class="text">Мульфильмы</div></div>
        <div class="item"><div class="text">Фильмы</div></div>
    </div>
</template>

<style scoped>
    .container{
        width: 400px;
        height: 400px;
        margin: 0 auto;
        margin-top: 15px;
        border-radius: 30px;
        background-color: #141D34;
        padding-top: 23px;
    }

    .item{
        width: 300px;
        height: 105px;
        border-radius: 30px;
        margin: 0 auto;
        margin-top: 15px;
        background-color: white;
        font-size: 40px;
        display: flex;
        align-items: center;
    }

    .text{
        width: 100%;
        text-align: center;
    }
</style>
