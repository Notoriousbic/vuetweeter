<template>
   
    <div id="updatepage">
         <page-header></page-header>
         <h1>Update Profile</h1>
         <update-form></update-form>
        <router-link to= "/login">Login</router-link>
        
    </div>
</template>

<script>
import UpdateForm from "../components/ProfileUpdate.vue"
import PageHeader from "../components/header.vue"
    export default {
        name: "update-page",
        components: {
            UpdateForm,
            PageHeader
        },

    }
</script>

<style scoped> 
#updatepage{
   text-align: center;
}


</style>