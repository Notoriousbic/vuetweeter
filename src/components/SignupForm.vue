<template>
    <div id="signup-background">
        <p>Email</p>
      <input type="text" id ="email-input" v-model="email">
      <p>Username</p>
      <input type="text" id="username-input" v-model="username">
      <p>Password</p>
      <input type="password" id="password-input" v-model="password">
      <p>Bio</p>
      <textarea rows="4" cols="50" id="bio-input" v-model="bio"></textarea>
      <p>Birthdate</p>
      <input type="text" placeholder="eg:2000-01-01" id="birthday-input" v-model="birthdate"> 
      <h2 @click="signupUser">SignUp</h2>
       
    
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
    export default {
        name: "signup-form",
        data(){
            return {
                email: "",
                username: "",
                password: "",
                bio: "",
                birthdate: "",
            }
        },
        methods: {
            signupUser: function(){
                axios.request({
                  method: "POST",
                  url: "https://tweeterest.ml/api/users", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                  },
                  data: {
                      email: this.email,
                      username: this.username,
                      password: this.password,
                      bio: this.bio,
                      birthdate: this.birthdate
                  }
                }).then((response)=>{
                    this.$store.commit("updateUser", response.data)
                    this.loginStatus= "success";
                    this.$router.push("/home");
                    cookies.set("session", response.data.loginToken);
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    this.loginStatus="fail";
                    alert("Inncorrect username and/or password.  You are now being redirected..!");
                    this.$router.push("/Login");

                })
            }
        },
    }
</script>

<style scoped>
 #signup-background{
    background-color: #1DA1F2;
    border-radius: 10px;
    height: 500px;
    width: 100%;
    text-align: center;
  
}

</style>