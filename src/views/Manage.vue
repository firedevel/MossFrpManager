
<template>
  <h1 class="page-title">管理隧道</h1>
  <div class="card card-silver" v-if="Math.floor(result[$attrs.id].stop - Date.parse(new Date())) > 0">
      <h3>剩余时长</h3>
      <h1>{{ Math.floor((result[$attrs.id].stop - Date.parse(new Date())) / 1000 / 60 / 60 / 24) }} 天</h1>
  </div>
  <div class="card card-gold" v-if="Math.floor(result[$attrs.id].stop - Date.parse(new Date())) < 0">
      <h3>过期时长</h3>
      <h1>{{ Math.abs(Math.floor((result[$attrs.id].stop - Date.parse(new Date())) / 1000 / 60 / 60 / 24)) }} 天</h1>
  </div>
  <br />
  <div class="ctrl-list">   
    <div>
      <p>节点</p>
      <a>{{ result[$attrs.id].node }}</a>
    </div>
    <div>
      <p>状态</p>
      <a>{{ result[$attrs.id].status }}</a>
    </div>
    <div>
      <p>序列号</p>
      <a>{{ result[$attrs.id].number }}</a>
    </div>
    <div>
      <p>ID</p>
      <a>{{ result[$attrs.id].ID }}</a>
    </div>
    <div>
      <p>活动</p>
      <a>{{ result[$attrs.id].activity }}</a>
    </div>
    <div>
      <p>带宽</p>
      <a>{{ result[$attrs.id].band }} Mbps</a>
    </div>
  </div>
  <br />
  <div class="list-child" @click="copyCode()">
    <a>显示穿透码</a>
  </div>
  <br />
  <div class="list-child">
    <a>续期</a>
  </div>
  <br />
  <div class="list-child">
    <a>升级</a>
  </div>
  <br />
  <div class="list-child list-child-red">
    <a>删除</a>
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
.list-child-red{
  background-color: var(--color-alert);
}
.list-child-red a{
  color: var(--color-alert-main);
}

p{
  margin: 0;
}
.card{
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s;
}
.card-silver{
  background-color:#097cf631;
}
.card-gold{
  background-color:#f0a40042;
}
</style>

<script setup>

import { ref,useAttrs } from 'vue'
import axios from 'axios'

const result = ref({})
axios.get(api + '?type=userCode&token='+ token,)
    .then((res)=>{
      console.log(res.data.codeData);
      result.value = res.data.codeData;
    })
    .catch((err)=>{
      console.log(err);
    })
function copyCode(){
  alert('穿透码：'+result.value[useAttrs().id].code)
}
</script>
