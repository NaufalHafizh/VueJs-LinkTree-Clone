<template>
    <div class="text-center" id="profilebase">
        <img class="rounded-circle" src="@/assets/decresed.jpg" alt="">
        <h5 class="mt-3 h5size">{{ name }}</h5>
        <figure>
            <blockquote>
                <q class="">{{ quotes }}</q>
            </blockquote>
        </figure>
        <div class="mt-3 d-grid d-sm-block">
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-solid fa-globe fa-lg"></i></a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-solid fa-envelope fa-lg"></i></a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-brands fa-github fa-lg"></i></a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-brands fa-square-instagram fa-lg"></i></a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-brands fa-twitter fa-lg"></i></a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-brands fa-facebook fa-lg"></i></a>
        </div>
    </div>
</template>

<script>
export default{

    name: "profile-card",
    data(){
        return{
            name: "Muhammad Naufal Hafizh",
            quotes: "make it work, make it right, make it fast",
        }
    }
}
</script>

<style lang="css">
img{

    width: 200px;
    height: 100%;
}

@media only screen and (max-width: 400px){

    q{
        font-size: 10px;
    }

    .h5size{

        font-size: 1rem;
    }
}
</style>