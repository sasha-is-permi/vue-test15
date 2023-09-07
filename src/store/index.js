import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from "../../2_catalog_19-06-2023.json";

export default new Vuex.Store({
  state: {
    catalog: [],
    bascket: []
},

  mutations: {
         // записываем в state полученную информацию
         catalog(state,data){                 
          state.catalog = data      
        }, 
  },

  actions: {

     // Получение всех элементов из json-файла
      getCatalog({commit}){  
       commit('catalog',data)
      }
              
  },


  getters: {
    catalog(state) {
      // Возвращаем каталог по запросу из модулей
      return state.catalog
  }    
  },
})

