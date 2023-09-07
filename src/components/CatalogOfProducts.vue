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
                                <span>
                                 <img src="../assets/img/keyboard.jpg">
                                </span>  
                                <span class="table__countElem">
                                   {{ item.count }}  
                                </span>
                                <span class="table__countElem">
                                <button> + </button>
                                </span>
                                <span class="table__countElem">
                                <button> - </button>
                                </span>
                                <span class="table__countElem">
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
      setData() {
              this.$store.dispatch('getCatalog')              
      },

    },

    computed: {           
        
        catalog() { 
                return this.$store.getters.catalog;             
        }

              },    


    created() {
             this.setData();
            },
  



  }



</script>

<style scoped>
.table__count{
  text-align: left;

}

.table__countElem{
  margin: 0 10px 0 10px;
}
</style>

