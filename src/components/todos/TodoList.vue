<template>
    <div class="container">
        <h1>Todo List</h1>

        <!-- <button @click="getTodos()">List Todos</button> -->
        <div>
            Completed: {{ completed }}
        </div>
        <div>
            Pending: {{ $store.getters.pendingTodo }}
        </div>

        <ul>
            <todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Todo from './Todo'

export default {
    components: {
        Todo
    },

    computed: {
        ...mapState({
            todos: 'todos',
        }),

        ...mapGetters({
            completed: 'completedTodo',
            pending: 'pendingTodo',
        }),
    },

    // methods: {
    //     ...mapActions({
    //         getTodos: 'getTodos'
    //     }),
    // },

    mounted() {
        this.$store.dispatch('getTodos');
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>