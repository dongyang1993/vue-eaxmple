<template>
    <el-table
        :data="todoList"
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
        name: "todoson",
        props: [
            'dataList'
        ],
        computed: {
            ...mapGetters(['todoList'])
        }
    }
</script>

<style scoped>

</style>