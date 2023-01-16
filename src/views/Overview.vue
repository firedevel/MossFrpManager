
<template>
  <h1 class="page-title">概览</h1>
  <div class="grid-card">
    <div class="card card-gold">
      <h3>金币</h3>
      <h1>{{ uresult.gold }}</h1>
    </div>
    <div class="card" :class="[uresult.signIn ? 'card-silver' : 'card-silver-active']" @click="sign()">
      <h3>银币</h3>
      <h1>{{ uresult.silver }}</h1>
    </div>
    <div class="card card-online">
      <h3>在线隧道</h3>
      <h1>114514</h1>
    </div>
    <div class="card card-error">
      <h3>离线隧道</h3>
      <h1>114514</h1>
    </div>
    <div class="card grid-card-bottom card-overview">
      <h3>隧道状态</h3>
    <table class="card-table">
    <thead>
      <tr>
        <th>状态</th>
        <th>节点</th>
        <th>节点负载</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in result">
        <td><span :class="'waring-'+i.warning"></span></td>
        <td>{{ i.node }}</td>
        <td>{{ nresult[i.node].load }}</td>
      </tr>
    </tbody>
  </table>
    </div>
  </div>
  

</template>

<style>
.card{
  padding: 5px 10px;
  border-radius: 10px;
  transition: 0.2s;
}
.card-gold{
  background-color:#f0a40042;
}
.card-silver{
  background-color:#097cf631;

}
.card-online{
  background-color:#40de1030;

}
.card-error{
  background-color:#f10e0e24;

}
.card-overview{
  background-color: var(--color-grey);

}
.grid-card{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-gap: 10px;
  grid-template-areas:
      ". . . ."
      "list list list list";
}
.grid-card-bottom{
  grid-area: list;
  padding: 10px;
}
.card-table{
    width: 100%;
    border-collapse: collapse;
    background-color: rgb(253, 253, 253);
    border-radius: 5px;
}
.card-table th{
    text-align: left;
    font-weight: 500;
}
.card-table tbody tr{
    border-radius: 10px;
    border-top: 1px solid #e3e7ec;
}
.card-table td,th{
    padding: 10px;
}
.card-silver-active{
  color: #FFF;
  background-color: #3496fffa;
  box-shadow: 0 3px 10px #55a7ffcf;
}
.waring-true{
  background-color: rgb(203, 127, 127);
  padding: 5px;
  border-radius: 2px;
}
.waring-false{
  background-color: rgb(91, 166, 122);
  padding: 5px;
  border-radius: 2px;
}

@media (prefers-color-scheme: dark) {
  .card-table tbody tr{
    border-top: 1px solid #6b6d6f;
  }
  .card-table{
    background-color: rgb(92, 92, 92);
  }
}

@media (max-width: 850px) {
  .grid-card{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 90px 90px 1fr;
    grid-gap: 10px;
    grid-template-areas:
      ". ."
      ". ."
      "list list";
  }
}

</style>

<script setup>

import axios from 'axios'
import { ref } from 'vue'

const result = ref({})
const nresult = ref({})
const uresult = ref({})
axios.get(api + '?type=userCode&token='+ token)
    .then((res)=>{
      console.log(res.data.codeData);
      result.value = res.data.codeData;
    })
    .catch((err)=>{
      console.log(err);
    })
axios.get(api + '?type=userInfo&token='+ token,)
    .then((res)=>{
      console.log(res.data.userInfo);
      uresult.value = res.data.userInfo;
    })
    .catch((err)=>{
      console.log(err);
    })
axios.get(api + '?type=allNode&token='+ token,)
    .then((res)=>{
      console.log(res.data.nodeData);
      nresult.value = res.data.nodeData;
    })
    .catch((err)=>{
      console.log(err);
    })
function sign(){
  axios.get(api + '?type=signIn&token='+ token,{
  headers: {
      'Content-Type': 'charset=utf-8'
    }
  })
  .then((res)=>{
      console.log(res.data);
      alert(res.data.signInMessage)
      uresult.value.signIn = true
  })
  .catch((err)=>{
      console.log(err);
  })
}
</script>
