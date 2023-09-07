<template>
  <div id="app">

    <main class="mainPage">
     <section class="mainPage__leftSection">
      <ButtonCatalog class="mainPage__ButtonCatalog"/>
      <ButtonBasket class="mainPage__ShoppingBasket"/>
    </section>

     <section class="mainPage__rightSection">
         <div class="mainPage__CatalogOfProducts">
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
  }
}
</script>

<style>
.mainPage{
  margin-top:100px;
  display:flex;
  justify-content: center;
}
.mainPage__leftSection{
  width:40vw;
  text-align: right;
  margin-right:50px;
}
.mainPage__rightSection{
  width:60vw;
}


.mainPage__ShoppingBasket{
  margin-top: 30px;
}

.mainPage__CatalogOfProducts{
  width: 700px;
  height:700px;
  border: 1px solid;
}

</style>
