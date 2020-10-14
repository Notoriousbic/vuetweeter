<template>
<div>
    <div id="page-header">
        <div></div>
         <img id="tweeterlogo" src="@/assets/logo.png">
        <div></div>
    </div>
    
</div>
</template>

<script>
    export default {
        name: "page-header",
    }
</script>

<style scoped>

#page-header{
    height: 275px;
    /* width: 100%; */
    background-color: #05738C;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-items: center;

}
#tweeterlogo {
    /* height: 100%;
    width: 100%; */
    text-align: center;
    display: block;
    


}
.img{
    max-height: 100%;
}


</style>