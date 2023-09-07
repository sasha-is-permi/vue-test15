<template>
  <div>
  <button class="button"   @click="$router.push({ name: 'BasketProducts'})">
      КОРЗИНА ({{ count }})
  </button>
 </div> 
</template>

<script>
export default {
name: 'ShoppingBasket',
data(){
  return{

  }
},

  methods:{

  },

  computed: {   
    
     // Количество продуктов (сколько видов товаров) в корзине 
    count(){
    return  this.$store.state.catalog.filter(item=>item.basket!=0).length;
    }
      
            },    


}



</script>

<style scoped>

.button {
width:200px;
height:50px;
background-color:white;
border: 1px solid;
}

.button:hover {
  cursor:pointer;
}


</style>
