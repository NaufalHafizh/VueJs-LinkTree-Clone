<template>
    <div class="text-center" id="profilebase">
        <img class="rounded-circle" src="@/assets/decresed.jpg" alt="">
        <h5 class="mt-3 name">{{ name }}</h5>
        <p class="jobs"> <span class="backslash">[</span> {{ jobs }} <span class="backslash">]</span></p> 
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
            jobs: "Programmer and Web Developer",
        }
    }
}
</script>

<style lang="css">
img{

    width: 200px;
    height: 100%;
}

.jobs{
    font-size: 15px;
}

.backslash{

    font-size: 20px;
    font-weight: bold;
}

@media only screen and (max-width: 400px){

    .jobs{
        font-size: 10px;
    }

    .backslash{

        font-size: 15px;
        font-weight: bold;
    }

    .name{

        font-size: 1rem;
    }
}
</style>