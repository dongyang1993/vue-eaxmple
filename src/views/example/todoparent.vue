<template>
    <div>
        <el-row>
            <el-input v-model="inputText" style="width: 95%" placeholder="请输入内容" @keyup.enter.native="save"></el-input>
            <el-button type="primary" @click="save">提交</el-button>
        </el-row>
        <todoson :dataList="tableData"></todoson>
    </div>
</template>

<script>
    import todoson from './todoson'

    export default {
        name: "todoparent",
        data () {
            return {
                inputText: '',
                tableData: []
            }
        },
        components: {
            todoson
        },
        methods: {
            save() {
                let item = {name: this.inputText}
                this.$store.dispatch('addtodo', item)
            },
        }
    }
</script>

<style scoped>

</style>