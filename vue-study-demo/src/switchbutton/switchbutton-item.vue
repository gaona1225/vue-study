<template>
    <div class = "switch-button" @click = "change" :class = "myResult ? 'on' : 'off'">
        <span>{{ myResult ? '开' : '关'}}</span>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'switchbuttonItem',
    props: ['result'],
    components: {
    },
    data () {
        return {
            myResult: this.result
        }
    },
    computed: {
    },
    methods: {
        change: function () {
            this.myResult = !this.myResult
        }
    },
    watch: {
        result: function (val) {
            this.myResult = val
        },
        myResult: function (val) {
            this.$emit('update:my-result', val)
        }
    }
}
</script>
