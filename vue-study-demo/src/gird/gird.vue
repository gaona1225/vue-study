<template>
    <div id = "demo">
        <form id = "search">
            Search <input name = "query" v-model = "searchQuery">
        </form>
        <gridItem
            :data = "gridData"
            :columns = "gridColumns"
            :filter-key = "searchQuery">
        </gridItem>
    </div>
</template>

<script type="text/javascript">
import gridItem from './grid-item'
export default {
    name: 'Gird',
    components: {
        gridItem
    },
    data () {
        return {
            searchQuery: '',
            gridColumns: ['name', 'power'],
            gridData: [
                {name: 'Chuck Norris', power: Infinity},
                {name: 'Bruce Lee', power: 9000},
                {name: 'Jackie Chan', power: 7000},
                {name: 'Jet Li', power: 8000}
            ]
        }
    },
    computed: {
    },
    filters: {
    },
    methods: {
    }
}
</script>

<style type="text/css">
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
    }

    th {
        background-color: #42b983;
        color: rbga(255, 255, 255, .66);
        cursor: pointer;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    }

    td {
        background-color: #f9f9f9;
    }

    th, td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: .66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
</style>
