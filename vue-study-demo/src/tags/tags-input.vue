<template>
    <div class = "tags-input">
        <span v-for = "(tag, index) in value" :key = "index" class = "tags-input-tag">
            <span>{{ tag }}</span>
            <button type = "button" class = "tags-input-remove" @click = "removeTag(tag)">&times;</button>
        </span>
        <input class = "tags-input-text" placeholder="Add tag..." @keydown.enter.prevent = "addTag" v-model = "newTag">
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'tagsInput',
    props: ['value'],
    components: {
    },
    data () {
        return {
            newTag: ''
        }
    },
    computed: {
    },
    methods: {
        addTag () {
            if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
                return
            }
            this.$emit('input', [...this.value, this.newTag.trim()])
            this.newTag = ''
        },
        removeTag (tag) {
            this.$emit('input', this.value.filter(t => t !== tag))
        }
    }
}
</script>
