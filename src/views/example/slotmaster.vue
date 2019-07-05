<template>
    <slotslaver :url="'http://www.google.com'">
        Your Profile
    </slotslaver>
</template>

<script>
    import slotslaver from './slotslaver'
    export default {
        name: "slotmaster",
        components: {
            slotslaver
        }
    }
</script>

<style scoped>

</style>