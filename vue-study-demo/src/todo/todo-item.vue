<template>
    <li>
        {{id}}:{{title}}
        <button @click = "$emit('remove')">X</button>
    </li>
</template>

<script>
export default {
  name: 'todoItem',
  props: ['title', 'id'],
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
