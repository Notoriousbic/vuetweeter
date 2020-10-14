<template>
    <div id="comment-button">
        <button @click="getComments">View Comments</button>
        <div v-for="comment in comments" :key="comment.commentId">
            <p>Comment by:</p>
            <p>{{comment.username}}</p>
            <p>-----------------</p>
            <p>{{comment.content}}</p>

        </div>
        <div id="edit-comment">
        <textarea v-model="content"></textarea>
        <button @click="postComment">Comment</button>
        <button @click="postComment">Delete Comment</button>
        </div>
        <br>
        <br>
       

    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        name:"tweet-comments",
        props: {
            tweetId: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                content: "",
                comments: [],
                Editcontent: "",
                commentId: "",
            }
        },
        methods: {
            postComment(){
                axios.request({
                method: "POST",
                url: "https://tweeterest.ml/api/comments", 
                headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                },
                data:{
                    loginToken: cookies.get("session"),
                    tweetId: this.tweetId,
                    content: this.content,
                }
                }).then((response)=>{
                    this.comments.push(response.data)
                    console.log(response)
                }).catch((error)=>{
                    console.log(error)
                })
            },
            getComments() {
                 axios.request({
                  method: "GET",
                  url: "https://tweeterest.ml/api/comments", 
                  headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                },
                params: {
                    tweetId: this.tweetId
                }
                }).then((response)=>{
                    this.comments=response.data;
                    console.log(response)
                }).catch((error)=>{
                    console.log(error)
                })
            },
            deleteComment(){
                axios.request({
                method: "DELETE",
                url: "https://tweeterest.ml/api/comments", 
                headers: {
                      "Content-Type":"application/json",
                      "X-Api-Key": "ugapNFl7L4kjy8lglmUScPyT7jkuNwTrL9vWbsCizLe7V",
                },
                data:{
                    loginToken: cookies.get("session"),
                    commentId: this.commentId,
                }
                }).then((response)=>{
                    this.comments.push(response.data)
                    console.log(response)
                }).catch((error)=>{
                    console.log(error)
                })
            },
            
        },  
        
    }
</script>

<style scoped>
#comment-button {
    display: grid;
    grid-auto-columns: 1fr 2fr 1fr;
}
#edit-comment {
    display: grid;
    grid-auto-columns: 1fr 2fr 1fr;
}

</style>