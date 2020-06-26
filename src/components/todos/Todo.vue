<template>
    <div>
        <li>
            <button @click="deleteTodo(todo)">X</button>
            <span @click="toggleStatus(todo)" :class="{'completed': todo.completed}">
                {{ todo.title }}
            </span>
        </li>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['todo'],

    methods: {
        ...mapActions({
            deleteTodo: 'deleteTodoItem',
            toggleStatus: 'changeTodoStatus'
        }),
        // deleteTodo() {
        //     this.$store.dispatch('deleteTodoItem', this.todo);
        // },

        // toggleStatus() {
        //     this.$store.dispatch('changeTodoStatus', this.todo);
        // }
    },

}
</script>

<style scoped>
li {
    cursor: pointer;
    line-height: 30px;
}
li span {
    margin-left: 10px;
}
.completed {
    color: seagreen;
    font-weight: bold;
}
button {
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #c00;
    color: #f00;
}
</style>