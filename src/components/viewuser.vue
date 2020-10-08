<template>
    <div id="view-user">
        <h1>Welcome User {{user.username}}</h1>
        <div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name: "view-user",
        computed: {
            user: function(){
                return this.$store.state.user;
            }
        },
        methods: {
            
            viewUser: function(){
                axios.request({
                  method: "GET",
                  url: "https://tweeterest.ml/api/users", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                  },
                  data: {
                     userId: this.user.userId,



                  }
                }).then((response)=>{
                    this.loginStatus= "success";
                    console.log(response);
                    document.getElementById("inject-user").innerHTML = ("userId");
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
#view-user {
    height: 50px;
    width: 100%;
    background-color: #1DA1F2;
    border-radius: 10px;
    text-align: center;
}
</style>