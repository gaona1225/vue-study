<template>
    <div class = "ui centered card">
        <div class = "content" v-show = "!isEditing">
            <div class = "header">{{todo.title}}</div>
            <div class = "meta">{{todo.project}}</div>
            <div class = "extra content">
                <span class = "right floated edit icon" @click = "showForm">
                    <i class = "edit icon"></i>
                </span>
                <span class = "right floated edit icon" @click = "deleteTodo(todo)">
                    <i class = "trash icon"></i>
                </span>
            </div>
        </div>

        <div class = "content" v-show = "isEditing">
            <div class = "ui form">
                <div class = "field">
                    <label>Ttile</label>
                    <input type = "text" v-model = "todo.title" />
                </div>
                <div class = "field">
                    <label>Project</label>
                    <input type = "text" v-model = "todo.project" />
                </div>
                <div class = "ui two button attached buttons">
                    <button class = "ui basic blue button" @click = "hideForm">Close X</button>
                </div>
            </div>
        </div>
        <div class = 'ui bottom attached green basic button' v-show = "!isEditing && todo.done" disabled>Completed</div>
        <div class = 'ui bottom attached red basic button' @click = "completeTodo(todo)" v-show = "!isEditing && !todo.done">Pending</div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'Todo',
    props: ['todo'],
    components: {
    },
    data () {
        return {
            isEditing: false
        }
    },
    computed: {
    },
    methods: {
        showForm: function () {
            this.isEditing = true
        },
        hideForm: function () {
            this.isEditing = false
        },
        deleteTodo: function (todo) {
            this.$emit('delete-todo', todo)
        },
        completeTodo (todo) {
            this.$emit('complete-todo', todo)
        }
    }
}
</script>
