<template>
    <div id="edit-tweet">
        <h1>Edit a Tweet!</h1>
        <textarea rows="4" cols="50" placeholder= "200 max character limit"></textarea>
        <p>Click Here to edit a Tweet!</p>
    </div>
</template>

<script>
    export default {
        name: "edit-tweet",
    },
    methods: {
        editTweet() {
            
        }
    },
</script>

<style scoped>
#edit-tweet {
    height: 200px;
    width: 100%;
    background-color: #1DA1F2;
    border-radius: 10px;
    text-align: center;

}

</style>