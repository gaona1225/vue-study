<template>
    <div>
        <progressRingItem radius = "60" :progress = "progress" stroke = "4"></progressRingItem>
    </div>
</template>

<script type="text/javascript">
import progressRingItem from './progressRing-item'
export default {
    name: 'ProgressRing',
    components: {
        progressRingItem
    },
    data () {
        return {
            progress: 0
        }
    },
    computed: {
    },
    methods: {
    },
    mounted () {
        const interval = setInterval(() => {
            this.progress += 10
            if (this.progress === 100) {
                clearInterval(interval)
            }
        }, 1000)
    }
}
</script>

<style lang = "scss">
html, body {
    background-color: #2962FF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
}
circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
</style>
