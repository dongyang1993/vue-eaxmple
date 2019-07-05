<template>
    <div>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button :plain="true" type="primary" @click="open0">主要按钮</el-button>
            <el-button :plain="true" type="success" @click="open1">成功按钮</el-button>
            <el-button :plain="true" type="info" @click="open2">信息按钮</el-button>
            <el-button :plain="true" type="warning" @click="open3">警告按钮</el-button>
            <el-button :plain="true" type="danger" @click="open4">危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button>
                <router-link to="/radio">Radio</router-link>
            </el-button>
            <el-button>
                <router-link to="/layout">Layout</router-link>
            </el-button>
            <el-button>
                <router-link to="/checkbox">Checkbox</router-link>
            </el-button>
            <el-button>
                <router-link to="/timepicker1">Timepicker1</router-link>
            </el-button>
            <el-button>
                <router-link to="/timepicker2">Timepicker2</router-link>
            </el-button>
            <el-button>
                <router-link to="/timepicker3">timepicker3</router-link>
            </el-button>
        </el-row>
        <el-row>
            <el-button>
                <router-link to="/datepicker1">Datepicker1</router-link>
            </el-button>
            <el-button>
                <router-link to="/todoList">todoList</router-link>
            </el-button>
            <el-button>
                <router-link to="/slot">slot</router-link>
            </el-button>
            <el-button>
                <router-link to="/todoparent">todoparent</router-link>
            </el-button>
            <el-button>
                <router-link to="/notice">notice</router-link>
            </el-button>
            <el-button>
                <router-link to="/layout">Layout</router-link>
            </el-button>
        </el-row>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            open0 () {
                this.$message({
                    showClose: true,
                    message: '这是一条普通消息',
                    type: 'info'
                })
            },
            open1 () {
                this.$message.success({ message: '恭喜你，这是一条成功消息', showClose: true})
            },
            open2 () {
                this.$message.info('这是一条消息')
            },
            open3 () {
                this.$message.warning('警告哦，这是一条警告消息')
            },
            open4 () {
                this.$message.error('错了哦，这是一条错误消息')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
