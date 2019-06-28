<template>
    <div>
        <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
      start: '00:00',
      step: '00:15',
      end: '23:59'
    }">
        </el-time-select>
        <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
      start: '00:00',
      step: '00:15',
      end: '23:59',
      minTime: startTime
    }">
        </el-time-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                startTime: '',
                endTime: ''
            };
        }
    }
</script>