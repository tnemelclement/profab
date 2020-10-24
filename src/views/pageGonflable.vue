<template>
       
     <section id="jeu" class="warpper">
            <div id="titreJeu">
                <div id="leftTitreJeu">
                    <h1 id="refJeu">{{ $route.params.refer }}</h1>
                    <h1 id="nomJeu">{{ $route.params._ref }}</h1>
                </div>
                <div v-on:click="likeJ" id="likeJeu">
                    <img v-if="isLiked" src="@/assets/images/icones/coeur-rouge.png">
                    <img v-else src="@/assets/images/icones/coeur-noir.png">
                </div>
            </div>
            
            <div id="blocJeu">
                <div id="photoJeu"></div>
                <div id="infoJeu">
                    <div id="navJeu">
                        <h2 id="leftNavJeu">Décoration : </h2>
                        <div v-for="n in ['L','XL','M']" :key="n">
                            <h2 id="rightNavJeu">{{n}}</h2>
                        </div>
                    </div>
                    <div id="descriptionJeu">
                        <p>Dim : {{longeur}} x {{largeur}} m.</p>
                    </div>
                </div>
            </div>
            
            <div id="avisJeu"></div>
           
        
        
        
        </section>
</template>

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
            width: 70px;
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
            background-image: url(https://www.amuztoi.com/rodez/wp-content/uploads/2019/11/minion_10.jpg);
            background-size: cover ;
        }
        #infoJeu {
            width: 50%;
            border-right: solid #000;
            border-bottom: solid #000;
            border-right: solid #000;
        }

        #descriptionJeu {
            padding: 10px;
        }

        #avisJeu {}
    }

    /* Mobile / Small tablet 576px */
    @media (min-width: 4px) and (max-width: 991px) {
        
    }
</style>

<script>
export default {
    name: 'pageGonflables',
    data () {
        return {
            isLiked : false,
            longeur: 5,
            largeur: 6
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
        }
    }
}
</script>