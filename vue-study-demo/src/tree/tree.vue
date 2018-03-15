<template>
    <div id = "tree">
        <p>(You can double click on an item to turn it into a folder.)</p>
        <ul id = "demo">
            <treeItem class = "item"
                :model = "treeData">
            </treeItem>
        </ul>
    </div>
</template>

<script type="text/javascript">
import treeItem from './tree-item'
var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                }
            ]
        }
    ]
}

export default {
    name: 'Tree',
    components: {
        treeItem
    },
    data () {
        return {
            treeData: data
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style type="text/css">
body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
    text-align: left;
}
.item {
    cursor: pointer;
}
.bold {
    font-weight: bold;
}
ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
    text-align: left;
}
</style>
