<script setup>
function mossapi(type) {
    axios.get(api + '?type='+type+'&token='+ token,{
    headers: {
         'Content-Type': 'charset=utf-8'
       }
     })
     .then((res)=>{
      if (res.data.ststus == 200){
        return(res.data)
      }else{
        alert(res.data.message)
        return(undefined)
      }
       
     })
     .catch((err)=>{
       console.log(err);
       return(undefined)
     })
  }
</script>  