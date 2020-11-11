
<template>
    <div>
       <h4 v-for="(quote, index) in quotes" :key="index">
           <span>{{ index + 1}}</span>
           {{ quote}}
       </h4>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({quotes: 'getAllQuotes'})
        // quotes(){
        //     return this.$store.getters.getAllQuotes;
        // }
    },
}
</script>

<style lang="scss">
    
</style>