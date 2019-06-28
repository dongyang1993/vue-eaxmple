<template>
    <div>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
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
                <router-link to="/layout">Layout</router-link>
            </el-button>
            <el-button>
                <router-link to="/layout">Layout</router-link>
            </el-button>
            <el-button>
                <router-link to="/layout">Layout</router-link>
            </el-button>
            <el-button>
                <router-link to="/layout">Layout</router-link>
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
