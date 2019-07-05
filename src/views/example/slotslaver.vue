<template>
    <a v-bind:href="url" class="nav-link" @click.prevent="openInNewWindow(url)">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "slotslaver",
        props: ['url'],
        methods: {
            openInNewWindow (url) {
                window.open(url, '_blank')
            }
        }
    }
</script>

<style scoped>

</style>