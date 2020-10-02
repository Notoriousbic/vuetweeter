import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue"
import LoginPage from "../views/Login.vue"
import UpdateForm from "../views/UpDate.vue"

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
  }

];

const router = new VueRouter({
  routes
});

export default router;
