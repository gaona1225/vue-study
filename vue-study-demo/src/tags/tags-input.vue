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
            console.log('removeTag')
            this.$emit('input', this.value.filter(t => t !== tag))
        }
    },
    render () {
        return this.$scopedSlots.default({
            tags: this.value,
            addTag: this.addTag,
            removeTag: this.removeTag,
            inputAttrs: { value: this.newTag },
            inputEvents: {
                input: (e) => { this.newTag = e.target.value },
                keydown: (e) => {
                    if (e.keyCode === 13) {
                        e.preventDefault()
                        this.addTag()
                    }
                }
            }
        })
    }
}
</script>
