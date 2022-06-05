import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      showSidebar: false,
      currCategoryName: "",
      searchResultState: [],
    };
  },
  mutations: {
    toggleShowSidebar(state) {
      if (!state.showSidebar) {
        state.showSidebar = true;
      } else {
        state.showSidebar = false;
      }
    },
    changeCurrCategoryName(state, categoryName) {
      state.currCategoryName = categoryName;
    },
    mutateSearchResult(state, searchRes) {
      state.searchResultState = searchRes;
    },
  },
});
