<template>
    <text :x = "point.x" :y = "point.y">{{ stat.label }}</text>
</template>

<script type="text/javascript">
function valueToPoint (value, index, total) {
    var x = 0
    var y = -value * 0.8
    var angle = Math.PI * 2 / total * index
    var cos = Math.cos(angle)
    var sin = Math.sin(angle)
    var tx = x * cos - y * sin + 100
    var ty = x * sin + y * cos + 100
    return {
        x: tx,
        y: ty
    }
}
export default {
    name: 'axisLabel',
    props: {
        stat: Object,
        index: Number,
        total: Number
    },
    components: {
    },
    data () {
        return {

        }
    },
    computed: {
        point: function () {
            return valueToPoint(
                +this.stat.value + 10,
                this.index,
                this.total
            )
        }
    },
    methods: {
    }
}
</script>
