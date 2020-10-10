<template>
    <div>
        <page-header></page-header>
        <view-user></view-user>
        <view-tweets></view-tweets>
        <create-tweet></create-tweet>
        <all-users></all-users>
        <delete-user></delete-user>
       
       

       
       

    </div>
</template>

<script>
import PageHeader from "../components/header.vue"
import CreateTweet from "../components/createtweet"
import DeleteUser from "../components/deleteuser"
import ViewUser from "../components/viewuser.vue"
import ViewTweets from "../components/viewtweets.vue"
import AllUsers from "../components/allusers.vue"

    export default {
        name: "home-page",
        components: {
            PageHeader,
            DeleteUser,
            CreateTweet,
            ViewUser,
            ViewTweets,
            AllUsers,
        },
        
        
    }
</script>

<style scoped>



</style>