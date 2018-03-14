<template>
    <li>
        <div :class = "{bold: isFolder}"
            @click = "toggle"
            @dblclick = "changeType">
            {{ model.name }}
            <span v-if = "isFolder">
                [{{open ? '-' : '+'}}]
            </span>
        </div>
        <ul v-show = "open" v-if = "isFolder">
            <treeItem class = "item"
                v-for = "(model, index) in model.children"
                :key = "index"
                :model = "model">
            </treeItem>
        </ul>
    </li>
</template>

<script type="text/javascript">
export default {
    name: 'treeItem',
    props: {
        model: Object
    },
    components: {
    },
    data () {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function () {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        changeType: function () {
            if (!this.isFolder) {
                this.$set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function () {
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
}
</script>
