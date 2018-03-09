<template>
    <div id="todo-list-example">
        <input
            v-model = "newTodoText"
            v-on:keyup.enter = "addNewTodo"
            placeholder = "Add a todo">
        <ul>
            <todoItem
                v-for = "(todo, index) of todos"
                v-bind:key = "todo.id"
                v-bind:title = "todo.title"
                v-bind:id = "todo.id"
                v-on:remove = "todos.splice(index, 1)"
            ></todoItem>
        </ul>
        <p @click = "count ++">{{count}}</p>
        <input v-model = "message" placeholder="edit me">
        <p>Message is: <span class = "pMsg">{{message}}</span></p>
        <p>
          <input type = "checkbox" id = "checkbox" v-model = "checked" >
          <label for = "checkbox">{{checked}}</label>
        </p>
    </div>
</template>

<script>
import TodoItem from './todo-item'
export default {
  name: 'Todo',
  components: {
    TodoItem
  },
  data () {
    return {
      newTodoText: '',
      todos: [
        {id: 1, title: 'Do the dishes'},
        {id: 2, title: 'Take out the trash'},
        {id: 3, title: 'Mow the lawn'}
      ],
      nextTodoId: 4,
      count: 0,
      message: '',
      checked: false
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>
    #todo-list-example {
        text-align: left;
    }
    .pMsg {
      font-size: 28px;
      color: red;
    }
</style>
