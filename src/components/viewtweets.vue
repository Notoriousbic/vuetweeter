<template>
    <div id="view-tweets">
        <div></div>
        <div></div>

        <h1>Here is your tweeter feed</h1>
        <button @click="getTweets">Show Your Tweets</button>
        <button @click="allTweets">Show All Tweets</button>
        <div id="individual-tweet" v-for="tweet in tweets" :key="tweet.tweetId">
            {{tweet.content}}
            <p>{{tweet.username}}</p>
            <p>{{tweet.createdAt}}</p>
            <tweet-comments :tweetId="tweet.tweetId"></tweet-comments>
        <textarea v-model="editcontent"></textarea>
        <button @click="editTweet(tweet.tweetId)">Edit</button>
        </div>

        
        

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
import TweetComments from "./comments.vue"

    export default {
        name: "view-tweets",
        components: {
            TweetComments,
        },
        props: {

        },
        computed:{
            user: function(){
                return this.$store.state.user
            }
        },

        data: function(){
            return {
                tweets:[],
                editcontent:"",
            }
        },
        methods: {
            getTweets: function(){
                axios.request({
                  method: "GET",
                  url: "https://tweeterest.ml/api/tweets", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                    },
                  params: {
                      userId: this.user.userId,
                        }
                }).then((response)=>{
                    this.tweets=response.data,
                    this.loginStatus= "success";
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    this.loginStatus="fail";
                    alert("Inncorrect username and/or password.  You are now being redirected..!");
                    this.$router.push("/Login");

                })
            },
             allTweets: function(){
                axios.request({
                  method: "GET",
                  url: "https://tweeterest.ml/api/tweets", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                    },
                  params: {
                        }
                }).then((response)=>{
                    this.tweets=response.data,
                    this.loginStatus= "success";
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    this.loginStatus="fail";
                    alert("Inncorrect username and/or password.  You are now being redirected..!");
                    this.$router.push("/Login");

                })
            },
            editTweet: function(tweetId){
                axios.request({
                  method: "PATCH",
                  url: "https://tweeterest.ml/api/tweets", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                  },
                  data: {
                     loginToken: cookies.get("session"),
                     content: this.editcontent,
                     tweetId: tweetId,
                 }
                }).then((response)=>{
                    this.loginStatus= "success";
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    // this.loginStatus="fail";
                    // alert("Inncorrect username and/or password.  You are now being redirected..!");
                    // this.$router.push("/Login");

                })
            }
        },
          
    }
</script>

<style scoped>
#view-tweets{
    height: 100%;
    width: 100%;
    background-color: #05738C;
    text-align: center;
    border-radius: 10px;
}
#individual-tweet {
    height: 100%;
    width: 65%;
    background-color: #c7cfcd;
    border-radius: 10px;
    margin-left: 100px;
    border: solid 5px rgba(0, 0, 0, 0.733);
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

</style>