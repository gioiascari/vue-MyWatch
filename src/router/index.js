//Import
import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/HomeComponent";

Vue.use(VueRouter);
//Routes's name
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
    props: { name: "face" },
  },
  {
    path: "/:name",
    name: "Step",
    component: HomeComponent,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
