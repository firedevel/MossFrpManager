<script setup>
import axios from 'axios'
import { ref } from 'vue'

const passwd = ref(null)
const account = ref(null)
function login(){

    axios.get(api + '?type=login&loginType=qq&account='+ account.value+'&password='+passwd.value)
    .then((res)=>{

      console.log(res.data);
      if (res.data.token == undefined){
        alert('登录失败: '+res.data.message)
      }else{
        setCookie('token',res.data.token)
        location.reload()
      }
    })
    .catch((err)=>{
        console.log(err);
    })
    
}
</script>

<template>
    <div class="bg-img"></div>
    <div class="login-box">
        <p class="login-box-title">MossFrp</p>
        <h1>登录</h1>
        <p id="login-msg" class="color-fail"></p>
        <input v-model="account" placeholder="QQ号"><br>
        <input type="password" v-model="passwd" placeholder="密码"><br>
        <a href="#">忘记密码？</a><br>
        <button @click="login()" class="btn btn-login float-right">登录</button>
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

