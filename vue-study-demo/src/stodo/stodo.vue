<template>
    <div>
        <todosItem :todos = "todos"></todosItem>
        <createTodo @add-todo = "addTodo" />
    </div>
</template>

<script type="text/javascript">
import todosItem from './stodo-item'
import createTodo from './createTodo'
export default {
    name: 'STodo',
    components: {
        todosItem,
        createTodo
    },
    data () {
        return {
            todos: [
                {
                    title: 'Todo A',
                    project: 'Project A',
                    done: false
                },
                {
                    title: 'Todo B',
                    project: 'Project B',
                    done: true
                },
                {
                    title: 'Todo C',
                    project: 'Project C',
                    done: false
                },
                {
                    title: 'Todo D',
                    project: 'Project D',
                    done: false
                }
            ]
        }
    },
    computed: {
    },
    methods: {
        addTodo (todo) {
            this.todos.push(todo)
        }
    }
}
</script>

<style lang = "scss">
    body {
        background: #fff;
        text-align: left;
    }
    div {
        text-align: left;
    }
</style>
