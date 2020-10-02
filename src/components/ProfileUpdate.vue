<template>
    <div id="update-background">
        <p>Email</p>
      <input type="text" id ="email-input" v-model="email">
      <p>Username</p>
      <input type="text" id="username-input" v-model="username">
      <p>Password</p>
      <input type="password" id="password-input" v-model="password">
      <p>Bio</p>
      <textarea id="bio-input" v-model="bio"></textarea>
      <p>Birthdate</p>
      <input type="text" placeholder="eg:2000-01-01" id="birthday-input" v-model="birthdate"> 
      <h2 @click="signupUser">SignUp</h2>
       
    
    </div>
</template>

<script>
import cookies from "vue-cookies"
import axios from "axios"
    export default {
        name: "update-form",
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
                    //Write logic to ensure token was sent
                    console.log(response)
                    cookies.set("session", response.data[0].loginToken)
                    //Send to home page
                }).catch((error)=>{
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>
 #update-background{
    background-color: rgb(22, 140, 187);
    border-radius: 10px;
    height: 500px;
    width: 100%;
    text-align: center;
  
}

</style>