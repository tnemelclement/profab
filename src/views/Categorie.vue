<template>
       
     <section id="categorie" class="warpper">
            <div id="titre">
                <div id="titreCateg"><h1>Catégorie</h1></div>
                <div id="categorieCateg"> <h1 id="leftCategorieCateg">#1</h1> <h1 id="rightCategorieCateg">Les Petits</h1> </div>
            </div>
            <div id="filtre">
                <div id="leftFiltre">Flitres</div>
                <div id="rightFiltre"> Test test test test</div>
            </div>
            <!-- génère un bloc de 12 jeux -->
            <div id="pageJeux">
                <!-- affiche 12 jeux -->
                <div v-for="nb in nbJeuxAffiche" :key="nb" id="jeux">
                    <div v-for="(jeu, i) in donnees" :key="jeu.id" >
                        <VignetteGonf v-if=" ((nb-1)*12) <= i && i <= (nb*12-1)" 
                            :_ref="jeu._ref" 
                            :prix="jeu.prix" 
                            :refer="jeu.ref" 
                            :ident="jeu.id" 
                            :longeur="jeu.longeur"
                            :largeur="jeu.largeur" />
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

export default {
    name: 'Categorie',
    components: {
        VignetteGonf
    },
    data() {
        return {
            donnees : fichier.jeux,
            nbJeuxAffiche : 1,
        }
    },
    methods: {
        newPageCateg() {
            this.nbJeuxAffiche += 1
        }
    }
}

</script>






<style>
    @media (min-width: 992px) {
        #titre {
            margin: 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            height: 40px;
        }

        #titre h1{
            font-size: 35px;
        } 

        #titreCateg {
            display: flex;
            justify-content: center;
            align-items: center;
            border: solid #FFF;
            height: 100%;
            padding: 5px 10px;
        }

        #categorieCateg {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        #leftCategorieCateg {
            background-color: #db1047;
            color: white;
            height: 100%;
            border: solid #db1047;
            padding: 5px 10px;
        }

        #rightCategorieCateg {
            background-color: white ;
            color: #db1047;
            height: 100%;
            padding: 5px 10px;
            border: solid #db1047;
        }

        #filtre {
            font-size: 25px;
            height: 40px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
        }
        #leftFiltre {
            width: 10%;
            border: solid black;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
        }
        #rightFiltre {
            width: 90%;
            border: solid black;
            height: 100%;
            background-color: black;
            color: #FFF;
            padding: 0 20px;

            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: row;
        }
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

