<template>
  <div>
  <button class="button"  @click="goToCatalog" >
      КАТАЛОГ
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
    goToCatalog(){
     if (this.$route.name!=="CatalogOfProducts")  this.$router.push( {name: 'CatalogOfProducts'})
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


