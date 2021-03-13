<template>
    <q-layout>
        <q-header>
            <q-toolbar class="bg-primary glossy text-white">
                <q-btn flat round dense icon="menu" aria-label="Menu" class="q-mr-sm" @click="leftDrawerOpen = !leftDrawerOpen" />
                <q-toolbar-title>{{ currentPage }}</q-toolbar-title>
                <q-btn flat round dense icon="whatshot" />
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-1"
        >
            <q-list>
                <q-item-label
                    header
                    class="text-grey-8"
                >
                    Essential
                </q-item-label>
                <links-component
                    v-for="link in links"
                    :key="link.title"
                    v-bind="link"
                ></links-component>
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
const linksData = [
    {
        title: 'Docs',
        icon: 'school',
        link: '/'
    },
    {
        title: 'Personas',
        icon: 'record_voice_over',
        link: 'personas'
    }
]

import linksComponent from "../../components/linksComponent";
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "layoutFrontend",
    components: { linksComponent },
    data () {
      return {
          leftDrawerOpen: false,
          links: linksData
      }
    },
    computed: {
        ...mapGetters(['currentPage'])
    },
    methods: {
        ...mapActions(['changePage'])
    }
}
</script>

<style scoped>

</style>
