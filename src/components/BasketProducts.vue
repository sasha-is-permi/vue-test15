<template>
  <div>
    <table class="table align-middle caption-top">
                            <thead>
                              <tr>
                                <th v-for ="item in thArray" :key="item"  scope="col">{{item}}</th>
                               </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in catalog" :key="item.id" >
                                <td>
                                  {{ item.name }}
                                </td>
                                <td>
                                   {{ item.price }}  
                                </td>
                                <td class="table-basket">
                                   {{ item.basket }}  
                                </td>
                                <td>
                                   {{ item.price * item.basket }}  
                                </td>

                                <td >
                               <button  @click="deleteProductFromBasket(item.id)"> X </button> 
                                </td>
                 

                              </tr>
                             
                            </tbody>
</table>

  </div>  
  
</template>

<script>
export default {
  name: 'CatalogOfProducts',
  data(){
    return{
      thArray:  ['Наименование','Цена','Количество','Стоимость'] ,

    }
  },

    methods:{

      deleteProduct(id){
           this.$store.dispatch('deleteProduct',id)
      }, 

      deleteProductFromBasket(id){
           this.$store.dispatch('deleteProductFromBasket',id)
      }, 

      

      addProduct(id){
           this.$store.dispatch('addProduct',id)
      },

      
      transferProductToBasket(id){
           this.$store.dispatch('transferProductToBasket',id)
      },

      

    },

    computed: {           
        
        catalog() { 
                return this.$store.getters.catalog.filter(item=> item.basket!==0);             
        }

              },    
  }



</script>

<style scoped>

.table-basket{
  text-align:left;
}
.table__count{
  text-align: left;

}

.table__countElem{
  margin: 0 5px 0 5px;
}

.table__countKeyboard{
margin-right:-10px;
}

</style>

