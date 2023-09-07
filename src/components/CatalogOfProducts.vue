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
                                <span class="table__count">

                                <td>
                                <span class="table__countKeyboard">
                                 <img src="../assets/img/keyboard.jpg">
                                </span>  
                                <span class="table__countElem">
                                   {{ item.count }}  
                                </span>
                                <span class="table__countElem" @click="addProduct(item.id)">
                                <button> + </button>
                                </span>
                                <span class="table__countElem"  @click="deleteProduct(item.id)">
                                <button> - </button>
                                </span>
                                <span class="table__countElem"  @click="transferProductToBasket(item.id)">
                                 <img src="../assets/img/basket.jpg">
                                </span>

                              </td>
                              </span>
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
      thArray:  ['Наименование','Цена','Действия'] ,

    }
  },

    methods:{
  
      deleteProduct(id){
           this.$store.dispatch('deleteProduct',id)
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
                return this.$store.getters.catalog;             
        }

              },    
  }



</script>

<style scoped>

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

