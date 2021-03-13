<template>
    <h2>Dashboard</h2>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "DashboardComponent",

    computed: {
        ...mapGetters(['currentPage'])
    },
    methods: {
        ...mapActions(['changePage'])
    },
    created() {
        this.changePage('Home');
    }
}
</script>

<style scoped>

</style>
