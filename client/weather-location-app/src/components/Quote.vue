
<template>
  <div>
    <p>{{ quote }}</p>
    <button @click="refreshQuote">
      <ion-icon name="refresh-outline" id="refresh"></ion-icon>
    </button>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({ refreshQuote: "setCurrentQuote" }),
    // refreshQuote() {
    //   // this.$store.dispatch("setCurrentQuote");
    // //   this.setCurrentQuote();
    // },
  },
  computed: {
    ...mapGetters({ quote: "getCurrentQuote" }),
    // quote() {
    //   return thsi.$store.getters.getCurrentQuote;
    // },
  },
};
</script>

<style lang="scss">
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  widows: 40px;

  #refresh {
    font-size: 40px;
    transition: 1s;

    &:hover {
      color: rgb(117, 219, 117);
    }
  }
}
</style>