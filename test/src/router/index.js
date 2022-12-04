import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import Home from "@/components/Home";
import HelloWorld from "@/components/HelloWorld";
import MovieDetail from "@/components/MovieDetail";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: HelloWorld,
    },

    {
        path : '/movie/:id',
        name : 'Movie Detail',
        component: MovieDetail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;