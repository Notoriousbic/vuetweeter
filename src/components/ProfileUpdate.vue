<template>
    <div id="update-background">
        <p>Email</p>
      <input type="text" id ="email-input" v-model="email">
      <p>Username</p>
      <input type="text" id="username-input" v-model="username">
      <p>Password</p>
      <input type="text" id="password-input" v-model="password">
      <p>Bio</p>
      <textarea  rows="4" cols="50" id="bio-input" v-model="bio"></textarea>
      <p>Birthdate</p>
      <input type="text" placeholder="eg:2000-01-01" id="birthday-input" v-model="birthdate"> 
      <h2 @click="updateUser">Update</h2>
       
    
    </div>
</template>

<script>
cookies.get("loginToken")
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
            updateUser: function(){
                axios.request({
                  method: "PATCH",
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
                      birthdate: this.birthdate,
                      loginToken: cookies.get("session")
                  }
                }).then((response)=>{
                    //Write logic to ensure token was sent
                    console.log(response)
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
    background-color: 	#0B92AB;
    border-radius: 10px;
    height: 500px;
    width: 100%;
    text-align: center;


  
}

</style>