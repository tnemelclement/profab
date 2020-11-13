<template>
       
     <section id="categorie" class="warpper">
            

            <div v-if="!charged" style="text-align: center; padding: 250px; font-size: 30px">Loading...</div>
            <!-- génère un bloc de 12 jeux -->
            <div v-if="charged" id="pageJeux">
                <!-- affiche 12 jeux -->
                <div v-for="nb in nbJeuxAffiche" :key="nb" id="jeux">
                    <div v-for="(jeu, i) in donnees" :key="jeu.id" >
                        <VignetteGonf v-if=" ((nb-1)*12) <= i && i <= (nb*12-1)" 
                            :_ref="jeu._ref" 
                            :prix="jeu.prix" 
                            :refer="jeu.ref" 
                            :image="jeu.img1"
                            />
                    </div>
                    
                </div> 
                <div id="navPageCateg">
                    <h3>Gonflable affichés : {{ donnees.length > (nbJeuxAffiche*12) ? nbJeuxAffiche*12 : donnees.length  }} / {{ donnees.length }}</h3>
                    <a v-on:click="newPageCateg">Afficher plus</a>
                </div>
            </div>
        
    </section>
</template>





<script>

import VignetteGonf from "@/components/VignetteGonf.vue"
import fichier from "@/assets/jeux.json"
import categor from "@/assets/categories.json"

export default {
    name: 'AfficheVignette.vue',
    components: {
        VignetteGonf
    },
    props: {
        
    },
    data() {
        return {
            donnees : fichier.jeux,
            nbJeuxAffiche : 1,
            charged: false,
            categories: categor.categories,
            categories2: categor,
            textePage: {
                id: this.$route.params.cat,
                description: "loading..."
            }
        }
    },
    methods: {
        newPageCateg() {
            this.nbJeuxAffiche += 1
        }
    },
    mounted() {
        this.charged = !this.charged

    }
}

</script>






<style>
    @media (min-width: 992px) {
        
        #pageJeux {
            margin: 20px;
            text-align: center;
        }

        #jeux {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
        }

        #navPageCateg {
            margin-top: 20px;
        }

        #navPageCateg h3 {
            margin-bottom: 15px;
        }

        #navPageCateg a {
            border: solid 2px #777;
            padding: 4px 10px 6px 10px;
        }

        #navPageCateg a:hover {
            opacity: 60%;
        }
    }


    /* Mobile / Small tablet 576px */
    @media (min-width: 4px) and (max-width: 991px) {
        
    }
</style>

