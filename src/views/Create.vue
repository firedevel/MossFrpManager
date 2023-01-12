
<template>
  <h1 class="page-title">新建隧道</h1>
  <div class="ctrl-list">   
    <div>
      <p>节点</p>
      <a>{{ $attrs.node }}</a>
    </div>
    <div>
      <p>名称</p>
      <a>{{ result[$attrs.node].address }}</a>
    </div>
    <div>
      <p>负载</p>
      <a>{{ result[$attrs.node].load }}</a>
    </div>
    <div>
      <p>货币</p>
      <a>{{ result[$attrs.node].coin }}</a>
    </div>
    <div>
      <p>备注</p><br />
      <a class="list-long">{{ result[$attrs.node].info }}</a>
    </div>
    <div>
      <p>带宽 (最大{{ result[$attrs.node]['band-max-per'] }})</p>
      <input type="number" min="1" :max="result[$attrs.node]['band-max-per']"  v-model="band" placeholder="请输入" />
    </div>
    <div>
      <p>时长 / 天</p>
      <input min="3" type="number" v-model="day" placeholder="请输入" />
    </div>
    <div>
      <p>价格</p>
      <a>{{ day * band * result[$attrs.node].price }}</a>
    </div>
  </div>
  <br />
  <div class="list-child" @click="buy()">
    <a>购买</a>
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
.ctrl-list div input{
  background-color: rgba(0,0,0,0);
  border: none;
  text-align: right;
  font-size: 17px;
  outline: none;
  color: var(--color-text);
}
.list-long{
  text-align: left !important;
  color: var(--color-main-tint);
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

import { ref,useAttrs } from 'vue'
import axios from 'axios'

const result = ref()
const day = ref(3)
const band = ref(1)
axios.get(api + '?type=allNode&token='+ token,)
    .then((res)=>{
      console.log(res.data.nodeData);
      result.value = res.data.nodeData;
    })
    .catch((err)=>{
      console.log(err);
    })
function buy(){
  if (confirm("将花费"+day.value * band.value * result.value[useAttrs().node].price+"金币/银币，确认购买？")){
    
    axios.get(api + '?type=createCode&token='+ token+'&node='+useAttrs().node+'&band='+band.value+'&date='+day.value,)
    .then((res)=>{
      console.log(res.data)
      if(res.data.status == 200){
        window.location.href = '/list'
      }else{
        alert(res.data.message)
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
</script>
