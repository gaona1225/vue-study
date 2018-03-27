<template>
    <div>
        <CompletedTodos></CompletedTodos>
        <GetTodo></GetTodo>
        <CurrentTodos></CurrentTodos>
    </div>
</template>

<script type="text/javascript">
import store from './store/store'
import GetTodo from './components/GetTodo'
import CurrentTodos from './components/CurrentTodos'
import CompletedTodos from './components/CompletedTodos'
export default {
    name: 'VuexTodo',
    store,
    components: {
        CompletedTodos,
        GetTodo,
        CurrentTodos
    },
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang = "scss">
    body {
        text-align: left;
        li, h3 {
            text-align: left;
        }
        .tool {
            margin: 30px 0;
            .addBtn {
                margin-top: 30px;
            }
        }
    }
</style>
