const app = new Vue({
  el: '#app',
  data: {
    newTask: null,
    todos: [],
    doings: [],
    dones: []
  },
  methods: {
    addTask: function() {
      this.todos.push({
        name: this.newTask,
        isDone: false
      })
      this.newTask = null
    },
    deleteTask: function(arr, index) {
      arr.splice(index, 1)
    }
  }
})