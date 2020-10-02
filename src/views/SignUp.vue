<template>
   
    <div id="signuppage">
         <page-header></page-header>
        <router-link to= "/login">Login</router-link>
        <br>
         <router-link to= "/update">Update</router-link>
        <h1>signup page</h1>
        <signup-form></signup-form>
    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"
import PageHeader from "../components/header.vue"
    export default {
        name: "signup-page",
        components: {
            SignupForm,
            PageHeader,
        },

    }
</script>

<style scoped> 
#signuppage{
   text-align: center;
}

</style>