<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import IconUser from './components/icons/IconUser.vue'
import Login from './components/Login.vue'

const result = ref({'username':'我不到呵'})
const notlogin = ref(false)
//未登录
if (token == undefined || token.length != 36){
  notlogin.value = true
}else{
  notlogin.value = false
}
console.log(notlogin.value);
axios.get(api + '?type=userInfo&token='+ token,)
    .then((res)=>{
      console.log(res.data)
      if (res.data.status == 401){
        setCookie('token','relogin') //token.length != 36
      }{
        console.log(res.data.userInfo);
        result.value = res.data.userInfo;
      }
    })
    .catch((err)=>{
      console.log(err);
    })

</script>

<template>


    <div class="left-nav">
      <h1>MossFrp</h1>
      <nav>
        <RouterLink to="/">概览</RouterLink>
        <RouterLink to="/node">节点状态</RouterLink>
        <RouterLink to="/list">隧道列表</RouterLink>
      </nav>
      <RouterLink to="/user" class="left-nav-user"><IconUser /><br /> {{ result.username }}</RouterLink>
    </div>
    <div class="content">
    <transition name="fade"> 
      <RouterView></RouterView>
    </transition>
    </div>
    <Login v-if="notlogin" />
  
</template>

<style scoped>
.left-nav{
  grid-area: sidebar;/* src/assets/main.css/app */
  padding: 15px;
  background-image: var(--background-bar);
  height: 100%;
  border-right: inset 1px rgba(0,0,0,0.2);
}
.left-nav h1{
  font-weight: 800;
  font-size: 30px;
  padding: 0 5px;
}

.left-nav nav{
  font-weight: 800;
}

.left-nav nav a{
  display: block;
  font-size: 20px;
  border-radius: 10px;
  padding: 2px 10px;
  color: var(--color-main);
  transition: color 0.2s;
}
nav a.router-link-exact-active{
  color: var(--vt-c-white);
  background-color: var(--color-main);
}
.left-nav-user.router-link-exact-active{
  background-color: var(--color-main);
  color: var(--vt-c-white);
}
.left-nav-user{
  position: absolute;
  bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  width: calc(100% - 30px);/* 100% - left-nav.padding*2 */
}


.content{
  grid-area: content;/* src/assets/main.css/app */
  padding: 20px;
  height: 100%;
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 850px) {
  .left-nav{
    padding: 5px;
    border-top: inset 1px rgba(0,0,0,0.2);
    border-right: none;

  }
  .left-nav nav a{
    display: inline;
    font-size: 15px;
    font-weight: 600;
    padding: 15px 10px;
    text-align: center;
  }
  .left-nav h1{
    display: none;
  }
  nav a.router-link-exact-active,.left-nav-user.router-link-exact-active {
    color: var(--vt-c-white);
    background-color: var(--color-main);
  }
  .left-nav-user{
    position: absolute;
    bottom: 5px;
    font-size: 12px;
    font-weight: 800;
    padding: 5px 10px;
    border-radius: 10px;
    right: 5px;
    width: 120px;/* 下面calc(100% - 75px)让出的位置 */
  }
  .left-nav nav{
    display: grid;
    grid-template-areas:
      ". . .";
    width: calc(100% - 120px);
  }
}

</style>
