<template>
    <div>
        <el-time-select
            v-model="value"
            :picker-options="{start: '00:00',step: '00:15',end: '23:59'}"
            placeholder="选择时间">
        </el-time-select>
    </div>
</template>

<script>
    export default {
        name: "timepicker",
        data() {
            return {
                value: ''
            };
        }
    }
</script>

<style scoped>

</style>