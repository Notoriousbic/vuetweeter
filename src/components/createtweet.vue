<template>
    <div id="create-tweet">
        <h1>Create a Tweet!</h1>
        <textarea rows="4" cols="50" v-model="TweetContent" placeholder= "200 max character limit"></textarea>
        <p @click="createTweet">Click Here to post Tweet!</p>

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        name: "create-tweet",
        data() {
            return {
                TweetContent: "",
            }
        },

        methods: {
            createTweet: function(){
                axios.request({
                  method: "POST",
                  url: "https://tweeterest.ml/api/tweets", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                  },
                  data: {
                     loginToken: cookies.get("session"),
                     content: this.TweetContent,



                  }
                }).then((response)=>{
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
#create-tweet {
    height: 200px;
    width: 100%;
    background-color: #1DA1F2;
    border-radius: 10px;
    text-align: center;
}


</style>