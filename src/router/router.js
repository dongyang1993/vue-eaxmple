import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '../components/basic/layout'
import radio from '../components/form/radio'
import checkbox from '../components/form/checkbox'
import timepicker1 from '../components/form/timepicker1'
import timepicker2 from '../components/form/timepicker2'
import timepicker3 from '../components/form/timepicker3'
import datepicker1 from '../components/form/datepicker1'
import todoList from '../views/example/todolist'
import slot from '../views/example/slotmaster'
import todoparent from '../views/example/todoparent'
import notice from '../components/notice/notice'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // basic
        {path: '/layout', name: 'layout', meta: {}, component: layout},


        //form
        {path: '/radio', name: 'radio', meta: {}, component: radio},
        {path: '/checkbox', name: 'checkbox', meta: {}, component: checkbox},
        {path: '/timepicker1', name: 'timepicker1', meta: {}, component: timepicker1},
        {path: '/timepicker2', name: 'timepicker2', meta: {}, component: timepicker2},
        {path: '/timepicker3', name: 'timepicker3', meta: {}, component: timepicker3},
        {path: '/datepicker1', name: 'datepicker1', meta: {}, component: datepicker1},
        {path: '/todoList', name: 'todoList', meta: {}, component: todoList},
        {path: '/slot', name: 'slot', meta: {}, component: slot},
        {path: '/todoparent', name: 'todoparent', meta: {}, component: todoparent},
        {path: '/notice', name: 'notice', meta: {}, component: notice}
    ]
})

export default router