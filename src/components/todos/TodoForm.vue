<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button @click="addNewTodo()">ADD</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            newTodoItem: '',
        }
    },

    methods: {
        addNewTodo() {
            this.$store.dispatch('addNewTodoItem', this.newTodoItem)
            this.newTodoItem = '';
        }
    }
}
</script>
