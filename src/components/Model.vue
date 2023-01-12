<script>
import { reactive } from "vue";
export default {
  name: "dialog",
  setup() {
    let isShow = reactive({
      showDialog: false,
    });
    function show() {
      isShow.showDialog = true;
    }
    function hidden() {
      isShow.showDialog = false;
    }
    return {
      isShow,
      show,
      hidden,
    };
  },
};

</script>

<template>
    <div class="bg-img" v-if="isShow.showDialog"></div>
    <div class="login-box" v-if="isShow.showDialog">
        <slot class="body"></slot>
    </div>
</template>
<style>
.bg-img {
    width: 100%;
    height: 100%;
    position: fixed;
    backdrop-filter: blur(20px);
    background-color: rgba(0,0,0,0.3);
}
.login-box{
    position: fixed;
    background-color: var(--color-background);
    box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 5px;
    left: 50%;
    top: 45%;
    transform: translate(-50%,-50%);
}
.login-box-title{
    background-image: linear-gradient(90deg,var(--color-main-tint),var(--color-main));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 500;
    font-size: 20px;
}
.login-box input{
    background-color: var(--color-grey);
    color: var(--color-text);
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    border: none;
    outline: none;
    font-size: 15px;
    width: 300px;
}
.login-box h1{
    font-weight: 700;
}


.btn{
    background-color: #DDD;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: #222;
    font-weight: 400;
}

.btn-login{
    background-color: var(--color-main-tint);
    color: #FFF;
}

p,h1,h2,h3{
    margin: 2px 0;
}

.input-fail{
    background-color: #ffd3d3 !important;
    color: rgb(254, 84, 84) !important;
}
.input-fail::placeholder{
    color: rgb(254, 84, 84) !important;
}

.color-fail{
    color: rgb(254, 84, 84) !important;
}

.float-right{
    float: right;
}
@media (prefers-color-scheme: dark) {
    .bg-img{
        background-color: rgba(147, 147, 147, 0.3);
    }
}
</style>

