<template>
    <div>
        <el-time-picker
            v-model="value1"
            :picker-options="{selectableRange: '00:00:00 - 23:59:59'}"
            placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
            arrow-control
            v-model="value2"
            :picker-options="{selectableRange: '00:00:00 - 23:59:59'}"
            placeholder="任意时间点">
        </el-time-picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'timepick2',
                value1: new Date(2016, 9, 10, 18, 40),
                value2: new Date(2016, 9, 10, 18, 40)
            };
        }
    }
</script>