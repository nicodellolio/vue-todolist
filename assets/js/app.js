console.log('yes, sir');
const { createApp } = Vue

const toDoList = [

    {
        text: 'have breakfast',
        done: true
    },
    {
        text: 'let the dog out',
        done: true
    },
    {
        text: 'code the entire javascript',
        done: false
    },
    {
        text: 'have a snack',
        done: false
    },
    {
        text: 'play fc24',
        done: false
    },
]

createApp({
  data() {
    return {
        toDoList: toDoList,
        text: toDoList.text,
        done: true
    }
  },
  methods: {
    removeToDo(toDoID){
        this.toDoList.splice(toDoID, 1)
    }
  }
  
}).mount('#app')