import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from "../../2_catalog_19-06-2023.json";

export default new Vuex.Store({
  state: {
    catalog: [],
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
       
      // Добавляем к полученным данным id для нумерации и count - сколько позиций куплено  
      let catalog =[...data];
      for(let i=0; i<data.length; i++){
        catalog[i].id = i+1; 
        catalog[i].count = 0;  
      }  

       commit('catalog',catalog)

      }
              
  },


  getters: {
    catalog(state) {
      // Возвращаем каталог по запросу из модулей
      return state.catalog
  }    
  },
})

