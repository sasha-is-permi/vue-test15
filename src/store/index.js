import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from "../../2_catalog_19-06-2023.json";

export default new Vuex.Store({
  state: {
    /*
      Структура полей:
      name    // имя продукта
      price   // цена
      id      // id элемента
      count   // добавляемые элементы в каталоге до переноса в корзину
      bascet  // перенесенные в корзину элементы 
    */
    catalog: [],
},

  mutations: {

         // записываем в state полученную информацию
         catalog(state,data){                 
          state.catalog = data      
        }, 

        deleteProduct(state, id) {
          // находим - какой индекс у  элемента в массиве  из state
          const index = state.catalog.findIndex(a => a.id === id);
          if (state.catalog[index].count > 0) {state.catalog[index].count = state.catalog[index].count - 1}
      },

      
      deleteProductFromBasket(state, id) {
        // находим - какой индекс у  элемента в массиве  из state
        const index = state.catalog.findIndex(a => a.id === id);
        state.catalog[index].basket = 0;
    },

      addProduct(state, id) {
        // находим - какой индекс у  элемента в массиве  из state
        const index = state.catalog.findIndex(a => a.id === id);
        state.catalog[index].count = state.catalog[index].count + 1
    },
    transferProductToBasket(state, id) {
      // находим - какой индекс у  элемента в массиве  из state
      const index = state.catalog.findIndex(a => a.id === id);
      if (state.catalog[index].count > 0)  {
        state.catalog[index].basket = state.catalog[index].basket +  state.catalog[index].count;
        state.catalog[index].count = 0;
      
      } else {
        state.catalog[index].count = state.catalog[index].basket;
      }
  },

  // Очистка корзины
  clearBasket(state){
      for(let i=0;i<state.catalog.length;i++){
        state.catalog[i].basket = 0;
      }
  },

    
  },

  actions: {

     // Получение всех элементов из json-файла
      getCatalog({commit}){  
       
      // Добавляем к полученным данным id для нумерации и count - сколько позиций куплено  
      let catalog =[...data];
      for(let i=0; i<data.length; i++){
        catalog[i].id = i+1;   // id элемента
        catalog[i].count = 0;  // добавляемые элементы в каталоге до переноса в корзину
        catalog[i].basket = 0; // перенесенные в корзину элементы 
      }  

       commit('catalog',catalog)

      },
     // Добавление единицы продукта 
          addProduct({ commit }, id) {
              commit('addProduct', id);
          },
     // Перенос добавленного продукта в каталоге в корзину
     transferProductToBasket({ commit }, id) {
          commit('transferProductToBasket', id);
      },      
   
      // Удаление единицы продукта из state
      deleteProduct({ commit }, id) {
        commit('deleteProduct', id);
    },

       // Удаление строки продукта из корзины
          deleteProductFromBasket({ commit }, id) {
            commit('deleteProductFromBasket', id);
        },

       // Очистка корзины
       clearBasket({ commit }) {
          commit('clearBasket');
        },
        
      // Берем продукты
      getProducts({commit,state}) {
        let catalogForOutput = [];
        for(let i=0;i<state.catalog.length;i++){
          if (state.catalog[i].basket===0) continue;
          let elem={}
          elem.name = state.catalog[i].name;
          elem.price = state.catalog[i].price;
          elem.basket = state.catalog[i].basket;
          elem.summ = state.catalog[i].price*state.catalog[i].basket;
          catalogForOutput.push(elem);
        }

        let catalogForOutputJSON = JSON.stringify(catalogForOutput);
        console.log(catalogForOutputJSON);

        commit('clearBasket');

      },
          

        
              
  },


  getters: {
 // Возвращаем каталог по запросу из модулей
    catalog(state) {
      return state.catalog
  } 
  }
})

