
<template>
  <h1 class="page-title">用户配置</h1>
  <div class="ctrl-list">   
    <div>
      <p>ID</p>
      <a>{{ result.userID }}</a>
    </div>
    <div>
      <p>用户名</p>
      <a>{{ result.username }}</a>
    </div>
    <div>
      <p>用户组</p>
      <a>{{ result.level }}</a>
    </div>
    <div>
      <p>邮箱</p>
      <a>{{ result.email }}</a>
    </div>
    <div>
      <p>金币</p>
      <a>{{ result.gold }}</a>
    </div>
    <div>
      <p>银币</p>
      <a>{{ result.silver }}</a>
    </div>
  </div>
  <br />
  <div class="list-child" @click="logOut()">
    <a>退出登录</a>
  </div>
</template>

<style>
.ctrl-list div:first-child{
  border-radius: 10px 10px 0 0;
}
.ctrl-list div:last-child{
  border-radius: 0 0 10px 10px;
  border-bottom: none;
}
.ctrl-list div{
  display: grid;
  background-color: var(--color-minor);
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--color-minor-opposite);
  padding: 7px 10px;
}
.ctrl-list div a,.ctrl-list div p{
  font-size: 17px;
}
.ctrl-list div a{
  text-align: right;
}
.list-child{
  background-color: var(--color-minor);
  padding: 7px 10px;
  border-radius: 10px;
  font-size: 17px;
}
p{
  margin: 0;
}

</style>

<script setup>

import { ref } from 'vue'
import axios from 'axios'

const result = ref({"username":"我不到啊"})
axios.get(api + '?type=userInfo&token='+ token,)
    .then((res)=>{
      console.log(res.data.userInfo);
      result.value = res.data.userInfo;
    })
    .catch((err)=>{
      console.log(err);
    })
function logOut(){
  setCookie('token','logout')
  location.reload()
}
</script>
