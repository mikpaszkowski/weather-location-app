import { createStore } from 'vuex';

const currencyURL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
const headers = { Accept: "application/json" };

export default createStore({
  state: {
    currentQuote: '',
    allQuotes: [],
  },
  mutations: {
    //synchronous
    setCurrentQuote(state, payload) {
      state.currentQuote= payload;
      state.allQuotes.push(payload);
    }
  },
  //asynchronous information, function always goes to actions
  actions: {

    async setCurrentQuote(state){
        const response = await fetch(currencyURL, { headers });
        const responseJSON = await response.json();
        state.commit('setCurrentQuote', responseJSON.quote.quoteText);
    }
  },
  modules: {
  },
  getters: {
    getCurrentQuote: state => state.currentQuote,
    getAllQuotes: state => state.allQuotes,
  }
})
