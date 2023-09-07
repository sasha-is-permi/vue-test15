<template>
  <div id="app">

    <main class="main-page">
     <section class="main-page__left-section">
      <ButtonCatalog class="main-page__button-catalog"/>
      <ButtonBasket class="main-page__shopping-basket"/>
    </section>

     <section class="main-page__right-section">
         <div class="main-page__catalog-products">
           <router-view />
         </div>    
     </section>
    </main>

  </div>
</template>

<script>
import ButtonCatalog from './components/ButtonCatalog.vue'
import ButtonBasket from './components/ButtonBasket.vue'

export default {
  name: 'App',
  components: {
   ButtonCatalog,
   ButtonBasket
  },
  methods:{
  setData() {
              this.$store.dispatch('getCatalog')              
      },
    },
    created() {
             this.setData();
            },
}
</script>

<style scoped>
.main-page{
  margin: 0 auto;
  max-width:1200px;
  margin-top:100px;
  display:flex;
  justify-content: center;
}
.main-page__left-section{
  width:30%;
  text-align: right;
  margin-right:50px;
}
.main-page__right-section{
  width:70%;
}


.main-page__shopping-basket{
  margin-top: 30px;
}

.main-page__catalog-products{
  width: 500px;
  height:700px;
  border: 1px solid;
}

.table>:not(caption)>*>* {
    border-bottom-width: 0px;
}
</style>
