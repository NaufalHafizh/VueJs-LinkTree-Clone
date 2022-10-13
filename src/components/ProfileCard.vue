<template>
    <div class="text-center" id="profilebase">
        <img class="rounded-circle" src="@/assets/decresed.jpg" alt="">
        <h5 class="mt-3 h5size">{{ name }}</h5>
        <figure>
            <blockquote>
                <q class="">{{ quotes }}</q>
            </blockquote>
        </figure>
        <div class="d-block mt-3">
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-regular fa-browser"></i>Personal Website</a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-brands fa-github"></i> Github</a>
            <a href="" class="btn btn-outline-dark m-2"><i class="fa-brands fa-instagram"></i> Instagram</a>
        </div>
    </div>
</template>

<script>
export default{

    name: "profile-card",
    data(){
        return{
            name: "Muhammad Naufal Hafizh",
            quotes: "make it work, make it right, make it fast"
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
        font-size: 12px;
    }

    .h5size{

        font-size: 1rem;
    }
}
</style>