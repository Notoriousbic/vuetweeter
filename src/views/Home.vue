<template>
    <div>
        <page-header></page-header>
        <view-user></view-user>
        <view-tweets></view-tweets>
        <create-tweet></create-tweet>
        <edit-tweet></edit-tweet>
        <delete-user></delete-user>
        <all-users></all-users>
       

       
       

    </div>
</template>

<script>
import PageHeader from "../components/header.vue"
import CreateTweet from "../components/createtweet"
import DeleteUser from "../components/deleteuser"
import EditTweet from "../components/edittweet.vue"
import ViewUser from "../components/viewuser.vue"
import ViewTweets from "../components/viewtweets.vue"
import AllUsers from "../components/allusers.vue"

    export default {
        name: "home-page",
        components: {
            PageHeader,
            DeleteUser,
            CreateTweet,
            EditTweet,
            ViewUser,
            ViewTweets,
            AllUsers,
        },
        
        
    }
</script>

<style scoped>


</style>