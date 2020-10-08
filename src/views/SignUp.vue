<template>
   
    <div id="signuppage">
         <page-header></page-header>
        <h1>SIGN UP</h1>
        <signup-form></signup-form>
        <router-link to= "/login">Login</router-link> |
         <router-link to= "/update">Update</router-link>
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