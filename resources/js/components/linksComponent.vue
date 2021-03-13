<template>
    <q-item
        clickable
        tag="a"
        @click="goto(link)"
    >
        <q-item-section
            v-if="icon"
            avatar
        >
            <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
name: "linksComponent",
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            default: '#'
        },
        icon: {
            type: String,
            default: ''
        }
    },
    methods: {
        goto(path) {
            if (path) {
                this.$router.push(path);
            }
        }
    }
}
</script>

<style scoped>

</style>
