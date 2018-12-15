<template>
<div v-if="datasets[0].data.length >0"><chartjs-bar v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-bar></div>
 
</template>

<script>  
  
import axios from 'axios'
export default {
    data(){
        return{
            
            labels: [ ],
            datasets:[{
                data:[],
                backgroundColor:["Red","Yellow","Purple","Blue","green"]
            }],
            option:{
                title:{
                    display:true,
                    position:"bottom",
                    text: "Fruits"
                }
            }
        };
    },
  mounted(){
      var instance = this
      axios
      .get('https://blooming-peak-33471.herokuapp.com/api/city')
      .then(function(response){
for(var i=0;i<response.data.data.length;i++){
instance.labels.push(response.data.data[i].city)
instance.datasets[0].data.push(response.data.data[i].count)}
      })
  }
};
</script>