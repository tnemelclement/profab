<template>
       
     <section id="jeu" class="warpper">
            <div id="titreJeu">
                <div id="leftTitreJeu">
                    <h1 id="refJeu">{{ donnee.id }}</h1>
                    <h1 id="nomJeu">{{ donnee.nom }}</h1>
                </div>
                <div v-on:click="likeJ" id="likeJeu" v-if="false">
                    <img v-if="isLiked" src="@/assets/images/icones/coeur-rouge.png">
                    <img v-else src="@/assets/images/icones/coeur-noir.png">
                </div>
            </div>
            
            <div id="blocJeu">
                <div id="photoJeu">
                    <img :src="'http://amuztoi.com/img_gonf/photo_stock/'+donnee.img1">
                </div>
                <div id="infoJeu">
                    <div id="navJeu" >
                        <h2 id="leftNavJeu">Prix (Hors Taxes) : </h2>
                        <div>
                            <h2 id="rightNavJeu">{{donnee.prix_ht}} €</h2>
                        </div>
                    </div>
                    <div id="descriptionJeu">
                        <p>Longeur : {{donnee.longeur}} m.</p>
                        <p>Largeur : {{donnee.largeur}} m.</p>
                        <p v-if=" donnee.hauteur != null">Hauteur : {{donnee.hauteur}} m.</p>
                    </div>
                </div>
            </div>
            
            <div id="avisJeu"></div>
           
        
        
        
        </section>
</template>



<script>
import axios from 'axios'

export default {
    name: 'pageGonflables',
    data () {
        return {
            isLiked : false,
            longeur: 5,
            largeur: 6,
            donnee: null
        }
    },
    methods: {
        likeJ() {
            this.isLiked = !this.isLiked
            if (this.isLiked) {
                document.getElementById("likeJeu").classList.add("isLikedclass");
            } else {
                document.getElementById("likeJeu").classList.remove("isLikedclass");
            }
        },
        requete() {
            axios
                .get ('http://83.229.85.83:8082/api/v1/gonflables/'+this.$route.params.id)
                .then (reponse => this.donnee = reponse.data.result)
                .then(console.log(this.donnee))
                .catch (erreur => console.log(erreur + " ERREUR ICIIIIIII"));
            
        }
    },
     mounted() {
        this.requete()
        this.charged = !this.charged

    }
}
</script>



<style>
    @media (min-width: 992px) {
         #jeu {
             margin-top: 20px;
         }

        #titreJeu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }

        #titreJeu #leftTitreJeu {
            height: 52px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            border: solid #db1047;
            font-size: 20px;
        }

        #titreJeu #leftTitreJeu #nomJeu {
            background-color: #db1047;
            color: white;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            
        }

        #titreJeu #leftTitreJeu #refJeu {
            color: #db1047;
            background-color:white;
            height: 100%;
            padding: 0 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #titreJeu #likeJeu {
            border: solid #000;
            border-radius: 100%;
            height: 50px;
            width: 50px;
        }

        .isLikedclass {
            border: solid #db1047 !important;
        }

        #titreJeu #likeJeu:hover {
            border: solid #db1047;
            border-radius: 100%;
        }

        #titreJeu img {
            height: 40px;
            width: auto;
            padding: 5px 5px 0px 5px;
        }


        #titreJeu button {
            margin-right: 20px;
            font-size: 20px;
            height: 40px;
            width: 150px;
            border-radius: 5px;
        }

        #navJeu {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            height: 60px;
            background-color: #000;
        }

        #leftNavJeu {
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
            
        }

        #rightNavJeu {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            height: 40px;
            padding: 0 10px;
            background-color: aliceblue;
        }

        #rightNavJeu:hover {
            background: #db1047;
            color: white;
            transition: 0.3s;
        }

        #blocJeu {
            margin-top: 30px;
            
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            height: 400px;
        }

        #photoJeu {
            width: 50%;
            border: solid #000;
            height: 394px;
            
        }

        #photoJeu img {
            width: 100%;
            height: 100%;
            
        }
        #infoJeu {
            width: 50%;
            border-right: solid #000;
            border-bottom: solid #000;
            border-right: solid #000;
        }

        #descriptionJeu {
            padding: 10px 20px;
        }

        #avisJeu {}

        #descriptionJeu p {
            font-size: 20px;
            padding: 10px 0;
        }
    }

    /* Mobile / Small tablet 576px */
    @media (min-width: 4px) and (max-width: 991px) {
        
    }
</style>

