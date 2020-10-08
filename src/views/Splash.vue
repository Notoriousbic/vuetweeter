<template>
    <div>
        <page-header></page-header>
        <div id="welcome-splash"> <h1>This is a welome page!</h1>
        </div>
        <welcome-splash></welcome-splash>
        <div id="router-links">  
        <router-link to= "/login">Login</router-link> |
        <router-link to= "/signup">Signup</router-link>
        </div>    
    </div>
</template>

<script>
import PageHeader from "../components/header.vue"
import WelcomeSplash from "../components/welcomesplash.vue"
    export default {
        name: "splash-page",
        components: {
            PageHeader, WelcomeSplash
        }
    }

</script>

<style scoped>
#welcome-splash{
    text-align: center;
}
#router-links{
    text-align: center;
}

</style>