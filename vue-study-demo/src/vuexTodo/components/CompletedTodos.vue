<template>
    <div id = "completed-todos" class = "container">
        <h3 v-if = "completed.length > 0">Completed({{ completed.length }})</h3>
        <ul class = "list-group">
            <li class = "list-group-item" v-for = "(todo, index) in completed" :key = "index">
                {{todo.body}}
                <button type = "button" @click = "remove(todo)" class = "btn btn-default btn-sm">
                    <span class = "glyphicon glyphicon-remove-circle"></span> Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default {
    methods: {
        remove (todo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        completed () {
            return this.$store.getters.completedTodos
        }
    }
}
</script>
