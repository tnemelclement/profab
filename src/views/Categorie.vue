<template>
       
     <section id="categorie" class="warpper">
         
            <div id="titre">
                
                <div id="titreCateg"><h1>Catégorie</h1></div>
                <div id="categorieCateg"> <h1 id="leftCategorieCateg">#{{$route.params.cat}}</h1> <h1 id="rightCategorieCateg">{{categories2[$route.params.cat > 10 ? "sousCategories" : "categories"][$route.params.cat > 10 ? (($route.params.cat)%10)-1 : ($route.params.cat)-1]["name"]}}</h1> </div>
            </div>
            <div style="padding-bottom: 20px; font-size: 16px">
                <p>{{categories2[$route.params.cat > 10 ? "sousCategories" : "categories"][$route.params.cat > 10 ? (($route.params.cat)%10)-1 : ($route.params.cat)-1]["description"]}}</p>
            </div>
            <div id="filtre">
                <div id="leftFiltre">Flitres</div>
                <div id="rightFiltre"> Test test test test</div>
            </div>

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
import axios from 'axios'

export default {
    name: 'Categorie',
    components: {
        VignetteGonf
    },
    data() {
        return {
            donnees2 : fichier.jeux,
            nbJeuxAffiche : 1,
            charged: false,
            donnees: null,
            longeurDonnee: 0,
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
        requete() {
            axios
                .get ('http://83.229.85.83:8082/api/v1/gonflables/categorie/'+this.$route.params.cat)
                .then (reponse => this.donnees = reponse.data.result)
                .catch (erreur => console.log(erreur + " ERREUR ICIIIIIII"));
        }
    },
    mounted() {
        console.log(this.$route.params.cat)
        
        this.requete()
        this.charged = !this.charged
        
        
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

