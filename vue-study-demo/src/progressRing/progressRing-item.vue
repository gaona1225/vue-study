<template>
    <svg :height = "parseInt(radius) * 2" :width = "parseInt(radius) * 2">
        <circle stroke = "white" :stroke-dasharray = "circumference + ' ' + circumference"
            :style = "{ strokeDashoffset: strokeDashoffset }"
            :stroke-width = "stroke" fill = "transparent"
            :r = "normalizedRadius"
            :cx = "parseInt(radius)"
            :cy = "parseInt(radius)" />
    </svg>
</template>

<script type="text/javascript">
export default {
    name: 'progressRingItem',
    props: {
        radius: String,
        progress: Number,
        stroke: String
    },
    components: {
    },
    data () {
        const normalizedRadius = parseInt(this.radius) - parseInt(this.stroke) * 2
        const circumference = normalizedRadius * 2 * Math.PI
        return {
            normalizedRadius,
            circumference
        }
    },
    computed: {
        strokeDashoffset () {
            return this.circumference - this.progress / 100 * this.circumference
        }
    },
    methods: {
    }
}
</script>
