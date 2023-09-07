import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Путь дл загружаемого файла json
let url = "2_catalog_19-06-2023.json"

export default new Vuex.Store({
  state: {
    catalog: []
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


       fetch(`${url}`)
       .then((response) => response.json())
       .then((data) => {
       console.log("catalog",data)         
       commit('catalog',data)
       }
       )
       .catch(function () {
        console.log("Ошибка получения данных !")
          })
        },
              
  },


  getters: {
    catalog(state) {
      // Возвращаем каталог по запросу из модулей
      return state.catalog
  }    
  },
})

