import { createStore } from 'vuex'


// Create a new store instance.
export const store = createStore({
    state () {
      return {
        isMobileShowSidebar: false
      }
    },
    mutations: {
      toggleIsMobileShowSidebar (state) {
          if (!state.isMobileShowSidebar){
              state.isMobileShowSidebar = true
          } else {
            state.isMobileShowSidebar = false
          }
      }
    }
  })