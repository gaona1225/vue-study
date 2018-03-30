import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterTest from '@/components/RouterTest'
import Demo from '@/components/Demo'
import Todo from '@/todo/todo'
import MarkDown from '@/markdown/markdown'
import Gird from '@/gird/gird'
import Tree from '@/tree/tree'
import SvgCom from '@/svg/svg'
import Modal from '@/modal/modal'
import TodoMVC from '@/todoMVC/todomvc'
import Pagination from '@/pagination/Pagination'
import STodo from '@/stodo/stodo'
import VuexTodo from '@/vuexTodo/vuexTodo'
import Calculator from '@/calculator/calculator'
import Searching from '@/searching/searching'
import StudentScore from '@/studentScore/studentScore'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        },
        {
            path: '/todo',
            name: 'Todo',
            component: Todo
        },
        {
            path: '/markdown',
            name: 'MarkDown',
            component: MarkDown
        },
        {
            path: '/gird',
            name: 'Gird',
            component: Gird
        },
        {
            path: '/tree',
            name: 'Tree',
            component: Tree
        },
        {
            path: '/svg',
            name: 'SvgCom',
            component: SvgCom
        },
        {
            path: '/modal',
            name: 'Modal',
            component: Modal
        },
        {
            path: '/todoMVC',
            name: 'TodoMVC',
            component: TodoMVC
        },
        {
            path: '/pagination',
            name: 'Pagination',
            component: Pagination
        },
        {
            path: '/stodo',
            name: 'STodo',
            component: STodo
        },
        {
            path: '/vuexTodo',
            name: 'VuexTodo',
            component: VuexTodo
        },
        {
            path: '/calculator',
            name: 'Calculator',
            component: Calculator
        },
        {
            path: '/searching',
            name: 'Searching',
            component: Searching
        },
        {
            path: '/studentScore',
            name: StudentScore,
            component: StudentScore
        },
        {
            path: '/router-test',
            name: 'RouterTest',
            component: RouterTest
        }
    ]
})
