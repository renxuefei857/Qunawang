
import Vue from "vue"
import Vuex from "vuex"

import state from "./store"
import  mutatuons from "./mutatuons"


Vue.use(Vuex)




export default new Vuex.Store({





    state,

    mutations: mutatuons,
  
       
    

})