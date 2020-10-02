<template>
 
    <div>
        <router-link to= "/signup">Signup</router-link>
        <br>
        <router-link to= "/update">Update</router-link>

        <page-header></page-header>
        <div id="header"></div>
        <h1>THIS IS THE LOGIN</h1>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>password</p>
        <input type="text" id="password-input" v-model="password">
        <h2 @click="loginUser">Login</h2>

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
import PageHeader from "../components/header"
    export default {

    components: {
        PageHeader,
    },
        data() {
            return {
                email: "",
                password: "",

        }; 
       
    },
     methods: {
            loginUser: function(){
                this.loginStatus ="Loading"
                axios.request({
                    method: "POST",
                  url: "https://tweeterest.ml/api/login", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                  },
                  data: {
                      email: this.email,
                      password: this.password,    
                  }
                }).then((response) => {
                this.loginStatus= "success",
                cookies.set("session", response.data.loginToken)
                console.log(response)
                }).catch((error) => {
                    console.log(error)
                    this.loginStatus="fail"
                })
            }
        },
    }
</script>

<style scoped>

</style>