<template>
    <section id="accueil" >

        <!-- HERO -->
        <section id="hero">
            <video autoplay muted loop playsinline>
                <source src="../assets/video/video_hero.mp4" type="video/mp4">
            </video>
            <div id="heroTitle">
                <h1><span style="font-family : Quicksand">Profab</span> France</h1>
                <h2>Fabricant de structures gonflables depuis 1991</h2>
            </div>
        </section>


        <div v-for="inf in info" :key="inf">
            <TextImg 
            :type="inf.type"
            :titre="inf.titre"
            :paragraphe="inf.paragraphe"
            :img="inf.img"
            :bgcolor="inf.bgcolor"
            :color="inf.color"
            />
        </div>         

    </section> 
</template>

<script>
import TextImg from '@/components/textImg.vue'
import infos from '@/assets/textes.json'

export default {
    name: 'Accueil',
    components: {
        TextImg
    },
    data() {
        return {
            info : infos.accueil
        }
    }
}
</script>

<style>
    video {
        width: 100%;
        position: absolute;
        z-index: -10;
    }

    #hero {
        height: 400px;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #heroTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgb(0, 0, 0, 0.4);
        height: 100%;
        width: 100%;
    }

    #heroTitle h1 {
        font-size: 60px;
        color: #db1046;
    }

     #heroTitle h1 span {
        font-size: 100px;
        color: #db1046;
    }

     #heroTitle h2 {
        font-size: 35px;
        color: white;
    }

    #presentation {
        background: #FFF;

    }

    #blocPrincipal {
        background: rgb(255, 255, 255, 0.8);
        height: 100%;
    }





</style>