<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo v-for = "(todo, index) in todos" :key = "index" :todo.sync = "todo" @delete-todo = "deleteTodo" @complete-todo = "completeTodo"></todo>
    </div>
</template>

<script type="text/javascript">
import Todo from './todo'
export default {
    name: 'todosItem',
    props: ['todos'],
    components: {
        Todo
    },
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
        deleteTodo: function (todo) {
            const todoIndex = this.todos.indexOf(todo)
            this.todos.splice(todoIndex, 1)
        },
        completeTodo (todo) {
            const todoIndex = this.todos.indexOf(todo)
            this.todos[todoIndex].done = true
        }
    }
}
</script>
