<template>
  <div class="basket-products">
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
                                <td class="table__basket">
                                   {{ item.basket }}  
                                </td>
                                <td>
                                   {{ (item.price * item.basket).toFixed(2) }}  
                                </td>

                                <td >
                               <button  @click="deleteProductFromBasket(item.id)"> X </button> 
                                </td>
                 

                              </tr>
                             
                            </tbody>

                            <tfoot>
                           <tr>
                            <td></td>
                            <td></td>
                            <td>Итого:</td>
                            <td>{{sumBasket}}</td>
                          </tr>
                         </tfoot>
</table>

<div class="buttons">

 <button  @click="getProducts">  Берем </button>

 <button @click="clearBasket"> Пожалуй, откажусь  </button>

</div>


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

      clearBasket(){
           this.$store.dispatch('clearBasket')
      },

      getProducts(){
        this.$store.dispatch('getProducts');
        this.$router.push( {name: 'CatalogOfProducts'})
      }

      

    },

    computed: {           
        
        catalog() { 
                return this.$store.getters.catalog.filter(item=> item.basket!==0);             
        },

        sumBasket(){
          return  this.$store.state.catalog.reduce((sum, current) => sum + (current.basket*current.price), 0).toFixed(2);
        }  
              },    
  }



</script>

<style scoped>

.table__basket{
  text-align:left;
}

.table>:not(caption)>*>* {
    border-bottom-width: 0px;
}

.basket-products{
  position:relative;
}
.buttons{
  width:250px;
  display:flex;
  justify-content: space-between;
  position:absolute;
  bottom:-30px;
  right:30px;
}

</style>

