
<template>
  <h1 class="page-title">隧道列表</h1>


  <table class="page-table">
    <thead>
      <tr>
        <th>状态</th>
        <th>活动</th>
        <th>节点</th>
        <th>状态信息</th>
        <th>节点负载</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i,key) in result">
        <td><span :class="'waring-'+i.warning"></span></td>
        <td>{{ i.activity }}</td>
        <td>{{ i.node }}</td>
        <td>
          <p v-if="i.status == 'outdated'">过期</p>
          <p v-if="i.status == 'run'">运行</p>
        </td>
        <td>{{ nresult[i.node].load }}</td>
        <td><RouterLink :to="'/manage/'+key"><IconGear /></RouterLink></td>
      </tr>
    </tbody>
  </table>

</template>

<style>
td svg{
  top: 2.5px; /*堆屎，高度补偿(居中)*/
  color: var(--color-svg);
}
td{
  overflow-x: scroll;
}
tr{
  white-space: nowrap;
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
</style>

<script setup>

import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import IconGear from '../components/icons/IconGear.vue'


const result = ref({})
const nresult = ref({})
axios.get(api + '?type=userCode&token='+ token,)
    .then((res)=>{
      console.log(res.data.codeData);
      result.value = res.data.codeData;
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
</script>
