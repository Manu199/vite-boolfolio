import { reactive } from "vue";

export const store = reactive({

    apiUrl: 'http://http://127.0.0.1:8000/api/',
    projects: [],
    technologies: [],
    types: []
})