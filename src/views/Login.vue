<template>
 
    <div>
       
        <page-header></page-header>
        <div id="header"></div>
         <h1>LOGIN HERE</h1>
        <div id =login-form>
            <p>Email</p>
            <input type="text" id="email-input" v-model="email">
            <p>password</p>
            <input type="password" id="password-input" v-model="password">
            <h2 @click="loginUser">Login</h2>
        </div>
        <div id="link">
            <router-link to= "/signup">Signup </router-link> |
            <router-link to= "/update">Update </router-link>
        </div>
        

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
                this.$store.commit("updateUser", response.data)
                this.loginStatus= "success";
                this.$router.push("/home");
                cookies.set("session", response.data.loginToken);
                console.log(response);
                }).catch((error) => {
                    console.log(error);
                    this.loginStatus="fail";
                    alert("Inncorrect username and/or password.  You are now being redirected..");
                    this.$router.push("/");

                })
            }
        },
    }
</script>

<style scoped>
   #login-form{
       background-color: 	#1DA1F2;
    border-radius: 10px;
    height: 500px;
    width: 100%;
    text-align: center; 
    } 
    h1 {
        text-align: center;
        text-decoration: none;
    }    
    #link{
        text-align: center;
    }

</style>