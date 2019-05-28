Vue.component ('componentOne', 
    data: function() {
        return {
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
            ]
        }
    }, 
    template: '<div><div class="items"  ><div class="item" v-bind:class="{complete:todo.done, deleted: todo.archive}" v-for="todo in todos.slice().reverse()"><div class="main"><div class="check" v-if="!todo.edit">   <label class="label--checkbox" v-on:click="done(todo.id)" >         <input type="checkbox" class="checkbox" :checked="todo.done" > {{todo.text}}</label></div><div class="editable" v-if="todo.edit"> <input type="input" class="" placeholder="enter text" v-model="todo.text"> </div><div class="buttons"><div class="state" v-if="!todo.edit"><button><i class="far fa-edit" v-on:click="edit(todo.id)"></i></button><button v-on:click="del(todo.id)"><i class="far fa-trash-alt"></i></button></div><div class="state" v-if="todo.edit"><button><i class="far fa-save" v-on:click="save(todo.id)"></i></button> </div> </div> </div><p class="desc" v-for="addTodo in todo.descriptions" v-if="todo.descriptions[0]">{{addTodo.text}}<div class="new_additionalTask" v-if="!todo.descriptions[0]"></div><input v-if="!todo.descriptions[0]" type="text" placeholder="Add подзадачу" v-model="additionalBuffer"><button><i class="far fa-save" v-on:click="additionAdd(todo.id)"></i></button> </div></p>  </div> '
});