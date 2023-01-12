
<template>
  <h1 class="page-title">节点状态</h1>

  <table class="page-table">
    <thead>
      <tr>
        <th>操作</th>
        <th>编号</th>
        <th>名称</th>
        <th>价格</th>
        <th>货币</th>
        <th>负载</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in result">
        <td><RouterLink :to="'/create/'+[i.node]"><IconAdd /></RouterLink></td>
        <td>{{ i.node }}</td>
        <td>{{ i.address }}</td>
        <td>{{ i.price }}</td>
        <td>{{ i.coin }}</td>
        <td>{{ i.load }}</td>
      </tr>
    </tbody>
  </table>

</template>

<style>
.tips-info{
  position: fixed;
  background-color: rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
}
td svg{
  top: 2.5px; /*堆屎，高度补偿(居中)*/
  color: var(--color-svg);
}
</style>
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import IconAdd from '../components/icons/IconAdd.vue'
import axios from 'axios'
const result = ref()

axios.get(api + '?type=allNode&token='+ token,)
    .then((res)=>{
      console.log(res.data.nodeData);
      result.value = res.data.nodeData;
    })
    .catch((err)=>{
      console.log(err);
    })
</script>
