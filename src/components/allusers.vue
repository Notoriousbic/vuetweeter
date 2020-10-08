<template>
    <div id="all-users">
        <h1>Here are the other users</h1>
        <button @click="allUsers">Show Users</button>
        <br>
        <div>
         <div v-for="user in users" :key="user.userId">{{user.username}}</div>

        </div>


    </div>
</template>

<script>
   import axios from "axios"

    export default {
        name: "all-users",
        props: {

        },
        computed:{
            user: function(){
                return this.$store.state.user
            }
        },

        data: function(){
            return {
                users:[],
            }
        },
        methods: {
            allUsers: function(){
                axios.request({
                  method: "GET",
                  url: "https://tweeterest.ml/api/users", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                    },
                  params: {
                  
                        }
                }).then((response)=>{
                    this.users=response.data,
                    this.loginStatus= "success";
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
#all-users {
    /* height: 100%; */
    width: 100%;
    background-color: #1DA1F2;
    border-radius: 10px;
    text-align: center;
}


</style>