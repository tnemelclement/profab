<template>
       
     <section id="categorie" class="warpper">
         
            <div id="titre">
                
                <div id="titreCateg"><h1>Catalogue</h1></div>
                <div id="categorieCateg"> <h1 id="leftCategorieCateg">#00</h1> <h1 id="rightCategorieCateg">Jeux en Stock</h1> </div>
            </div>
            <div style="padding-bottom: 20px; font-size: 16px">
                <p></p>
            </div>
            <div id="filtre">
                <div id="leftFiltre">Flitres</div>
                <div id="rightFiltre">
                <div @click="requete(1)">Prix croissant</div>
                <div id="rightFiltreElt"> | </div>
                <div @click="requete(2)">Prix décroissant</div>
                <div id="rightFiltreElt"> | </div>
                <div @click="requete(0)" >Par ID</div>
                </div>
            </div>

            <div v-if="!charged" style="text-align: center; padding: 250px; font-size: 30px">Loading...</div>
            <!-- génère un bloc de 12 jeux -->
            <div v-if="charged" id="pageJeux">
                <!-- affiche 12 jeux -->
                <div v-for="nb in nbJeuxAffiche" :key="nb" id="jeux">
                    <div v-for="(jeu, i) in donnees" :key="jeu.id" >
                        <VignetteGonf v-if=" ((nb-1)*12) <= i && i <= (nb*12-1)" 
                            :_ref="jeu.nom" 
                            :prix="jeu.prix_ht" 
                            :refer="jeu.id" 
                            :image="jeu.img1"
                            />
                    </div>
                    
                </div> 
                <div id="navPageCateg">
                    <h3>Gonflable affichés : {{ longeurDonnee > (nbJeuxAffiche*12) ? nbJeuxAffiche*12 : longeurDonnee  }} / {{ longeurDonnee }}</h3>
                    <a v-on:click="newPageCateg">Afficher plus</a>
                </div>
            </div>
        
    </section>
</template>





<script>

import VignetteGonf from "@/components/VignetteGonf.vue"
import fichier from "@/assets/jeux.json"
import categor from "@/assets/categories.json"
//import $ from 'jquery'
import axios from 'axios'

export default {
    name: 'EnStock',
    components: {
        VignetteGonf
    },
    data() {
        return {
            donnees2 : fichier.jeux,
            nbJeuxAffiche : 1,
            charged: false,
            donnees: null,
            longeurDonnee : 0,
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
        },
        calculLengthDonnee() {
            let cpt = 0;
            this.donnees.forEach(elt => {
                console.log(elt.id)
                cpt++
            });
            this.longeurDonnee = cpt
        },
        requete(tri) {
            axios
                .get ('http://83.229.85.83:8082/api/v1/gonflables/enstockTri'+tri)
                .then (reponse => this.donnees = reponse.data.result)
                //.then (reponse => console.log(reponse.data.result))
                .catch (erreur => console.log(erreur + " ERREUR ICIIIIIII"));
        }
    },
    mounted() {
        //console.log(this.$route.params.cat)
        
        this.requete(0)


       
       this.charged = !this.charged;
       
        
        
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
            cursor: pointer;
        }

        #rightFiltreElt {
            padding: 0 20px;
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

