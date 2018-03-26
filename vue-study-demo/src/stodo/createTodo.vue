<template>
    <div class = "ui base content center aligned segment">
        <button class = 'ui basic button icon' @click = "openForm" v-show = "!isCreating">
            <i class = "plus icon"></i>
        </button>
        <div class = "ui centered card" v-show = "isCreating">
            <div class = "content">
                <div class = "ui form">
                    <div class = "field">
                        <label>Ttile</label>
                        <input type = "text" v-model = "titleText" ref = "title" defaultValue = "" />
                    </div>
                    <div class = "field">
                        <label>Project</label>
                        <input type = "text" v-model = "projectText" ref = "project" defaultValue = "" />
                    </div>
                    <div class = "ui two button attached buttons">
                        <button class = "ui basic blue button" @click = "sendForm()">Create</button>
                        <button class = "ui basic red button" @click = "closeForm()">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'createTod',
    props: {
    },
    components: {
    },
    data () {
        return {
            titleText: '',
            projectText: '',
            isCreating: false
        }
    },
    computed: {
    },
    methods: {
        openForm: function () {
            this.isCreating = true
        },
        sendForm: function () {
            if (this.titleText.length > 0 && this.projectText.length > 0) {
                const title = this.titleText
                const project = this.projectText
                this.$emit('add-todo', {
                    title,
                    project,
                    done: false
                })
                this.titleText = ''
                this.projectText = ''
                this.isCreating = false
            }
        },
        closeForm: function () {
            this.isCreating = false
        }
    }
}
</script>
