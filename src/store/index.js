import Vue from "vue";
import Vuex from "vuex";
import { TodoService } from "../services/todo";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        todoService: new TodoService(),
    },

    getters: {
        completedTodo(state) {
            return state.todos.filter(todo => todo.completed).length;
        },

        pendingTodo(state) {
            return state.todos.filter(todo => !todo.completed).length;
        }
    },

    actions: {
        async getTodos({commit, state}) {
            // const Service = new TodoService;
            // const todos = await Service.getTodos();
            
            const todos = await state.todoService.getTodos();
            commit('SET_TODOS', todos);
        },

        addNewTodoItem({commit}, payload) {
            commit('ADD_TODO', payload)
        },

        deleteTodoItem({commit}, payload) {
            commit('DELETE_TODO', payload)
        },

        changeTodoStatus({commit}, payload) {
            commit('CHANGE_STATUS', payload);
        }
    },

    mutations: {
        SET_TODOS(state, payload) {
            state.todos = payload;
            // payload.map(todo => state.todos.push(todo));
        },

        ADD_TODO(state, payload) {
            state.todos.push({
                title: payload,
                completed: false
            });
        },

        DELETE_TODO(state, payload) {
            const index = state.todos.indexOf(payload);
            state.todos.splice(index, 1);
        },

        CHANGE_STATUS(state, payload) {
            payload.completed = !payload.completed
        }
    }
})