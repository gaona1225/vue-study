<template>
    <div id = "notch">
        <div class = "notch" :style = "{'--notchSize': changeChildNotchSize}">
            <slot>This is notch module nox!</slot>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'cnotchItem',
    props: ['childNotchSize'],
    components: {
    },
    data () {
        return {
        }
    },
    computed: {
        changeChildNotchSize: function () {
            return this.childNotchSize + 'px'
        }
    },
    methods: {
    }
}
</script>
