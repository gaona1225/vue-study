<template>
    <li>
        {{title}}
        <button @click = "$emit('remove')">X</button>
    </li>
</template>


<script>
    export default {
        name: 'todoItem',
        props: ['title'],
        components: {

        },
        data () {
            return {
            }
        },
        methods: {
            
        }
    }
</script>