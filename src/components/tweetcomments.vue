<template>
    <div id="tweet-comment">
        <h1>Comment on a tweet?</h1>
        <textarea rows="4" cols="50" placeholder= "200 max character limit"></textarea>


    </div>
</template>

<script>
    export default {
        name: "tweet-comment",
    }
</script>

<style scoped>
#tweet-comment {
    height: 200px;
    width: 100%;
    background-color: #0B92AB;
    border-radius: 10px;
    text-align: center;
}
</style>