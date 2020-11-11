
<template>
  <div>
    <location-a></location-a>
    <quote></quote>
  </div>
</template>


<script>
import Location from "../components/Location";
import Quote from "../components/Quote";


export default {
  name: "Home",
  
  components: {
    "location-a": Location,
    "quote": Quote,
  },
  mounted() {
    this.$store.dispatch("setCurrentQuote");
  },
};
</script>

<style lang="scss">
</style>