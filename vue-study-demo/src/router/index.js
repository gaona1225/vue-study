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
            path: '/router-test',
            name: 'RouterTest',
            component: RouterTest
        }
    ]
})
