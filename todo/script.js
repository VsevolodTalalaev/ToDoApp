let TODOAPP = new Vue({
    el: '#root', //связываем стегом у которого айди РУУТ
    data: {//данные 
        todos : [{
            id: '0',
            text: 'Задача 1',
            done: false,
            archive: false,
            edit: false,
            descriptions: []
    },
        {
            id: '1',
            text: 'Задача 2',
            done: false,
            archive: false,
            edit: false,
            descriptions: []
    },
        {
            id: '2',
            text: 'Задача 3',
            done: false,
            archive: false,
            edit: false,  
            descriptions: []
        },
        {
            id: '3',
            text: 'Задача 4',
            done: false,
            archive: false,
            edit: false,  
            descriptions: []
        },
        {
            id: '4',
            text: 'Задача 5',
            done: false,
            archive: false,
            edit: false,  
            descriptions: [ ]
        }
        ],
        buffer: '',
        additionalBuffer: ''

    },
    methods: { //дметоды
        done: function(id){
            this.todos[id].done = this.todos[id].done ? false : true;

        },
        del: function(id) {
            this.todos[id].archive = this.todos[id].archive ? false :true;
        },
        add: function () {
            if (this.buffer ) {
                newTask = this.buffer;
                let id = this.todos.length;
            this.todos.push({
                id: id,
                text:newTask,
                done: false,
                archive: false,
                edit: false,
                descriptions: []
            })

            this.todos[id].text = newTask;
            this.buffer = '';
            } else {
                alert("Enter your task");
                return
            }    
        } ,
        edit: function(id) {
            this.todos[id].edit = this.todos[id].edit ? false :true;
            
        } ,
        save: function(id) {
            
            // this.todos[id].text = this.buffer;
            // this.buffer = '';
            this.todos[id].edit = false;

        } ,
        additionAdd: function(taskId) {
            if (this.additionalBuffer ) {
                newTask = this.additionalBuffer;
                let id = this.todos[taskId].descriptions.length;
            this.todos[taskId].descriptions.push({
                id: id,
                text: newTask,
                done: false,
                archive: false,
                edit: false,
                
            })

            
            this.additionalBuffer = ''; 
        } else {
            alert("enter task")
        }
   }
}
})