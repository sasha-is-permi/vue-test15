<template>
  <div>
    333
  </div>  
  
</template>

<script>
export default {
  name: 'CatalogOfProducts',
  data(){
    return{

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

