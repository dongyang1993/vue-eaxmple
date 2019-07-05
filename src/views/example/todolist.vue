<template>
    <div>
        <el-row>
            <el-input v-model="inputText" style="width: 95%" placeholder="请输入内容" @keyup.enter.native="save"></el-input>
            <el-button type="primary" @click="save">提交</el-button>
        </el-row>
        <todotable :dataList="tableData"></todotable>
    </div>
</template>

<script>
    import todotable from './todotable'

    export default {
        data() {
            return {
                inputText: '',
                tableData: []
            }
        },
        components: {
            todotable
        },
        methods: {
            save() {
                let item = {name: this.inputText}
                this.tableData.push(item)
                this.$store.dispatch('addtodo', item)
            },
        }
    }
</script>

<style scoped>

</style>