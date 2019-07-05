<template>
    <el-table
        :data="dataList"
        stripe
        style="width: 100%">
        <el-table-column
            prop="name"
            label="名称">
        </el-table-column>
    </el-table>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "todotable",
        props: ['dataList']
    }
</script>

<style scoped>

</style>