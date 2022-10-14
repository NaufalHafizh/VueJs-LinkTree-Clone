<template>
    <div class="text-center mt-3" id="footer">
        <p>
            Make By 🖤 <br>
            From Magetan, Indonesia
        </p>
    </div>
</template>

<script>
export default{
    name: "footer-card"
}
</script>

<style>
#footer{

    font-weight: 200;
}

p{
    margin-bottom: 0rem;
    font-size: 12px;
}

@media only screen and (max-width: 400px){

    p{
        font-size: 12px;
        font-weight: 100;
    }
}
</style>