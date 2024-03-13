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
            done: true,
            newToDo: '',
        }
    },
    methods: {
        removeToDo(toDoID) {
            this.toDoList.splice(toDoID, 1)
        },
        addToDo() {
            const newObj = {text: this.newToDo, done: false}


            if (this.newToDo.length > 0) {
                console.log('new task');
                console.log(this.newToDo);
                
                this.toDoList.unshift(newObj)
                this.newToDo = ''
            }

        }
    }
}).mount('#app')