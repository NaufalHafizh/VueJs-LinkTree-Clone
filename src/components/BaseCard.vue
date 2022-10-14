<template>
    <section class="container" id="BaseCard">
        <div id="card-base" class="card shadow-sm p-4">
            <div class="card-body">
                <ProfileCard/>
            </div>
            <FooterCard/>
        </div>
    </section>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import FooterCard from '@/components/FooterCard.vue'

export default{
    name: "base-card",
    components:{
        ProfileCard,
        FooterCard
    }
};
</script>
<style>
#card-base{

    width: 34rem;
    margin: 0 auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */
}
#BaseCard{
    
    margin-top: 100px;
}

@media only screen and (max-width: 400px) {
    
    #BaseCard{

        margin-top: 0px;
    }

    #card-base{

        width: 20rem;
    }

}

</style>