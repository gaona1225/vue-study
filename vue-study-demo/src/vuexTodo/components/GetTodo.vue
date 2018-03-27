<template>
    <div id = "get-todo" class = "container tool">
        <input class = "form-control" :value = "newTodo" @change = "getTodo" placeholder = "I need to ..." />
        <button class = "addBtn btn btn-primary" @click = "addTodo">Todo</button>
    </div>
</template>

<script type="text/javascript">
export default {
    methods: {
        getTodo (e) {
            this.$store.dispatch('getTodo', e.target.value)
        },
        addTodo () {
            this.$store.dispatch('addTodo')
        }
    },
    computed: {
        newTodo () {
            return this.$store.getters.newTodo
        }
    }
}
</script>
