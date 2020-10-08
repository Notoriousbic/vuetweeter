import Vue from "vue";
import VueRouter from "vue-router"
import SignupPage from "../views/SignUp.vue"
import LoginPage from "../views/Login.vue"
import UpdateForm from "../views/UpDate.vue"
import Splash from "../views/Splash.vue"
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage,
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage,
  },
  {
    path: "/update",
    name: "update-form",
    component: UpdateForm,
  },
  {
    path: "/",
    name: "welcome-splash",
    component: Splash
  },
  {
    path: "/home",
    name: "home-page",
    component: Home
  },

];

const router = new VueRouter({
  routes
});

export default router;
