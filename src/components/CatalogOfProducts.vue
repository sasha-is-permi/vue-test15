<template>
  <div>
    <table class="table align-middle caption-top">
                            <thead>
                              <tr>
                                <th v-for ="item in thArray" :key="item"  scope="col">{{item}}</th>
                               </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item,index) in catalog" :key="index" >
                                <td>{{ item.name }}</td>
                                <td>
                                   {{ item.price }}  
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

</style>

