<template>
    <div>
        <div id="delete-user">
            <h1>delete user?</h1>
                 <div>
                    <p>Enter in your password</p>
                    <input type="password" id="delete-input" v-model="password">
                    <p @click="deleteUser">Click "here" to delete user!</p>

                </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        name: "delete-user",
            data(){
            return {
                password: "",
            }
        },

        methods: {
            deleteUser: function(){
                axios.request({
                method: "DELETE",
                url: "https://tweeterest.ml/api/users", 
                headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                },
                data: {
                  password: this.password,
                  loginToken: cookies.get("session"),

                }
                }).then((response)=>{
                    this.loginStatus= "success";
                    console.log(response);
                    cookies.remove("session");
                    this.$router.push("/");
                }).catch((error)=>{
                    console.log(error);
                    this.loginStatus="fail";
                    alert("Inncorrect username and/or password.  You are now being redirected..");

                })
            }
        },
    
    }

</script>

<style scoped>
#delete-user {
    height: 175px;
    width: 100%;
    background-color: #1DA1F2;
    text-align: center;
    border-radius: 10px;

    
}


</style>