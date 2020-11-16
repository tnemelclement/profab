<template>

    <div id="textImg" :style="'background :' + bgcolor +'; color :' + color">

        <!-- Texte à gauche, photo à droite -->
        <div id="Un" v-if="type == 1" class="warpper bloc">
            <div class="text sousBloc">
                <h2>{{ titre }}</h2>
                <p v-for="para in paragraphe" :key="para">{{ para }}</p>
            </div>
            <div class="img sousBloc">
                <SmallImg height="100%" width="100%" :img="img" />
            </div>

        </div>

        <!-- Photo à gauche, texte à droite  -->
        <div id="Deux" v-if="type == 2" class="warpper bloc">
            <div class="img sousBloc">
                <SmallImg height="100%" width="100%" :img="img" />
            </div>
            <div class="text sousBloc">
                <h2>{{ titre }}</h2>
                <p v-for="para in paragraphe" :key="para">{{ para }}</p>
            </div>
        </div>

        <!-- Texte au milieu, photos dessous -->
        <div id="Trois" v-if="type == 3" class="warpper">
            <div class="text">
                <h2>{{ titre }}</h2>
                <p v-for="para in paragraphe" :key="para">{{ para }}</p>
            </div>
            <div v-if="img.length > 0" class="img">
                <img :src="img[im-1]" v-for="im in 4" :key="im">
            </div>
        </div>

        <!-- Je sais pas encore -->
        <div id="Quatre" v-if="type == 4" class="warpper bloc">

        </div>
    </div>
</template>

<script>

import SmallImg from '@/components/smallImg.vue'

export default {
    name: "textImg",
    components: {
        SmallImg
    },
    props: {
        type: Number,
        titre: String,
        paragraphe: Array,
        img: {
            type: Array,
            function () { return [] }
        },
        bgcolor: {
            type : String,
            default : "white"
        },
        color: {
            type : String,
            default : "black"
        }
    }
}
</script>

<style>
    #textImg {
        padding: 60px 0;
    }

    #textImg p {
        padding: 5px 0;
        font-size: 16px;
    }

    #textImg h2 {
        padding: 0 0 15px 0;
        text-transform: uppercase;
        font-size: 30px;
    }

    #textImg .sousBloc {
        width: 46%;
        padding: 0px 2%;
        
    }

    
    

    #textImg .bloc {
        display: flex;
    }

    #textImg #Trois .text{
        text-align: center;
    }

    #textImg #Trois .img{
        display: flex;
        justify-content: space-around;
        align-items: center;

        padding: 20px 0;
    }

    #textImg #Trois .img img{
        height: auto;
        width: 23%;
    }


</style>

