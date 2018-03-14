<template>
    <div id = "demo">
        <svg width = "200" height = "200">
            <polygraph :stats = "stats"></polygraph>
        </svg>
        <div v-for = "(stat, key) in stats" :key = "key">
            <label>{{stat.label}}</label>
            <input type = "range" v-model = "stat.value" min = "0" max = "100">
            <span>{{stat.value}}</span>
            <button @click = "remove(stat)" class = "remove">X</button>
        </div>
        <form id = "add">
            <input name = "newLabel" v-model = "newLabel">
            <button @click = "add">Add a Stat</button>
        </form>
        <pre id = "raw">{{ stats }}</pre>
    </div>
</template>

<script type="text/javascript">
import polygraph from './svg-item'
var stats = [
    {label: 'A', value: 100},
    {label: 'B', value: 100},
    {label: 'C', value: 100},
    {label: 'D', value: 100},
    {label: 'E', value: 100},
    {label: 'F', value: 100}
]
export default {
    name: 'SvgCom',
    components: {
        polygraph
    },
    data () {
        return {
            newLabel: '',
            stats: stats
        }
    },
    computed: {

    },
    methods: {
        add: function (e) {
            e.preventDefault()
            if (!this.newLabel) {
                return
            }
            this.stats.push({
                label: this.newLabel,
                value: 100
            })
            this.newLabel = ''
        },
        remove: function (stat) {
            if (this.stats.length > 3) {
                this.stats.splice(this.stats.indexOf(stat), 1)
            } else {
                alert('Can\'t delete more!')
            }
        }
    }
}
</script>

<style type="text/css">
* {
    text-align: left;
}
body {
    font-family: Helvetica Neue, Arial, sans-serif;
    text-align: left;
}
polygon {
    fill: #42b983;
    opacity: .75;
}
circle {
    fill: transparent;
    stroke: #999;
}
text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 10px;
    fill: #666;
}
label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}
#raw {
    position: absolute;
    top: 0;
    left: 300px;
}
</style>
