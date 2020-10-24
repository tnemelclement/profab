<template>
    <section id="categorie" class="warpper">
        <div id="sousCat">
            <div v-for="sousCat in sousCategorie" :key="sousCat.id">
                <div v-on:click="openCat(cat.id)" class="blocSousCategorie" :id="'id'+sousCat.id">
                    <h1>#{{sousCat.id}}</h1>
                    <h1 id="tiret"> - </h1>
                    <h2>{{sousCat.name}}</h2>
                </div>
            </div>
        </div>

         <div id="Cat">
            <div v-for="cat in categories" :key="cat.id">
                
                <div v-on:click="openCat(cat.id)" class="blocCategorie" :id="'id'+cat.id">
                    <h1>#{{cat.id}}</h1>
                    <h1 id="tiret"> - </h1>
                    <h2>{{cat.name}}</h2>
                </div>

            </div>  
        </div>
    </section>
</template>

<style>
    @media (min-width: 992px) {
        #Cat {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 30px;
        }
            .shadow {
                opacity: 50%;
            }

            .blocCategorie {
                margin-right:20px;
                margin-bottom: 20px;
                width: 280px;
                height: 200px;
                background: #db1047;
                border: solid #db1047;
                color: white;

                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
            }

            .blocCategorie:hover {
                width: 300px;
                height: 200px;
                background: white;
                color: #db1047;
                border: solid #db1047;
                transition: 0.3s;
            }

            .blocCategorie h1 {
                font-size: 95px;
                padding-left:20px ;
            }

            .blocCategorie h2 {
                font-size: 30px;
                padding: 0 20px ;
            }

            .blocCategorie #tiret {
                display: none;
            }

        #sousCat {
            display: none;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 30px;
            border-bottom: solid #db1047;

            opacity: 0%;
            height: 0px;
        }

            .blocSousCategorie {
                margin-right:30px;
                margin-bottom: 20px;
                width: 260px;
                height: 140px;
                
                background: #db1047;
                border: solid #db1047;
                color: white;

                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
            }

             .blocSousCategorie:hover {
                width: 280px;
                height: 140px;
                background: white;
                color: #db1047;
                border: solid #db1047;
                transition: 0.3s;
            }

            .blocSousCategorie h1 {
                font-size: 60px;
                padding-left:20px ;
            }

            .blocSousCategorie h2 {
                font-size: 20px;
                padding: 0 20px ;
            }

            .blocSousCategorie #tiret {
                display: none;
            }

        .sousCatClass {
            height: 170px !important;
            opacity: 100% !important;
            transition: 0.2s;
        }

        .sousCatClass2 {
            display: flex !important;
        }

        .shadow{opacity: 40%;}
        


        
        
    }

    /* Mobile / Small tablet 576px */
    @media (min-width: 4px) and (max-width: 991px) {
        .blocCategorie {
            font-family: 'Quicksand';
            width: 100%;
            height: 50px;
            background: #db1047;
            color: white;
            border: solid #db1047;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;

            margin-top: 5px;
        }

        .blocCategorie:hover {
            background: white;
            color: #db1047;
            transition: 0.1s;
        }

        .blocCategorie h1 {
            font-size: 30px;
            padding-left:20px ;
        }

        .blocCategorie h2 {
            font-size: 30px;
            padding-left:20px;
            
        }
    }
</style>

<script>
import $ from 'jquery'

export default {
    name: 'NavCategorie',
    data () {
        return {
            SCopen: false,
            sousCategorie: [
                    {
                        id: 31,
                        name: "Gonflables De Compétition",
                        description: "Gonflables spécifiques pour l’animation ou les événements, destinés à un public enfant ou adulte. Il s’agit principalement de gonflables conçus pour concourir et s’amuser à deux ou en équipe. Des jeux qui font monter l’adrénaline et garantissent de passer un bon moment."
                    },
                    {
                        id: 32,
                        name: "Gonflables Aquatiques Terrestres",
                        description: "Gonflables posés sur un sol « en dur » pouvant être équipés d’un système rafraichissant (brumisateur, tuyau d’eau percé, pistolet à eau, obstacles équipés de jets d’eau) pour se rafraichir en s’amusant. Certains sont équipés d’une piscine en fin de course."
                    },
                    {
                        id: 33,
                        name: "Gonflables Aquatiques Flottants",
                        description: "Il s’agit de gonflables étanches à  disposer sur un bassin (piscine, lac….). Les utilisateurs doivent traverser les différents obstacles pour finir par un super toboggan. Il est important de laisser 3m de chaque côté du jeu pour que les enfants ne puissent pas rencontrer d’obstacles en dur."
                    },
                ],
            categories: [
            {
                id: 1, 
                name: "Les Tous Petits",
                description: "Gonflables parfaits pour les enfants jusqu’à 9 ans ou ils peuvent jouer et s’amuser dans un environnement sûr. Ces gonflables sont idéals pour des entreprises ayant un espace limité ou peu de personnel (et de matériel) pour la mise en place des gonflables (société de location, camping, restaurant, garderie, hôtel, snack…)."
            },
            {
                id: 2, 
                name: "Les Toboggans ",
                description: "Toboggans de toute taille et de tout style, avec des hauteurs de plateforme de 2,5 m à 11,5 m. Une ou plusieurs piste de glisse, avec ou sans obstacles et même avec des bassins de réception (équipés d’eau ou de balles)."
            },
            {
                id: 3, 
                name: "Compétition et Aquatique",
                description: " "
            },
            {
                id: 4, 
                name: "Obstacles et Combos",
                description: "Nos parcours d’obstacles et combos mélanges diverses activités telles que courir, glisser, grimper, des zone d’obstacles, des piscines de balles…  Ils peuvent être faits sur mesures pour être adaptés aux besoins du client!  Nous pouvons les réaliser en un ou plusieurs modules ce qui permet de les rendre interchangeables et  plus faciles à gérer."
            },
            {
                id: 5, 
                name: "Goinfres et Mouvements",
                description: "Être dévoré par une énorme bouche est une expérience passionnante qui éveille l’imagination des enfants. Le bas de la mâchoire comporte des marches qui permettent aux enfants de monter. La bouche se ferme et l’enfant passe par un toboggan intérieur et sort par l’arrière. La fréquence et les horaires d’ouverture et fermeture de la bouche sont contrôlées par une minuterie.  Nous réalisons en 3 tailles: mini, medium et large. Nous pouvons aussi fabriquer une plateforme oscillante sur laquelle les enfants peuvent s’amuser. Elles existent en deux versions: active ;  à travers l’utilisation d’un moteur - ou bien passive ; à travers les mouvements des enfants qui jouent. Pour les rendre plus facile à installer, nous les fabriquons en général en plusieurs modules."
            },
            {
                id: 6, 
                name: "Pub, Arches et Chapiteau",
                description: "Nos gonflables publicitaires sont très efficaces pour communiquer efficacement. Pour rendre nos produits plus flexibles, nous pouvons utiliser un système de bâches interchangeables (velcro)  afin que le même produit puisse être utilisé pour divers événements. La marque ou le logo du client peut être imprimé ou peint à la main.  Nous pouvons fabriquer toute sorte de gonflable sur mesure à la demande du client (Par exemple un camion gonflable pour une grande marque, une canette géante pour un fabriquant de boissons, une chaussure géante, un avion…). Avant la fabrication, nous réalisons une simulation et un devis précis selon la charte graphique et les données fournies par nos clients."
            },
            {
                id: 7, 
                name: "Parcours Adrénaline",
                description: "Dans cette section, nous regroupons le summum de ce qui peut être offert dans les expériences gonflables, en vous emmenant à la limite du possible. Nous pouvons concevoir des projets complets pour une utilisation intérieure et extérieure. Certains parcs statiques peuvent être créés en un seul bloc, mais d’autres projets sont modulaires et offrent la souplesse nécessaire pour s’adapter à différents endroits en combinant différentes difficultés physiques. Cette approche modulaire présente également l’avantage de pouvoir être installée et démontée avec moins de personnel et facilite le stockage et la manipulation. Inutile de mentionner que des structures gonflables aussi spectaculaires attirent l’attention par elles-mêmes et constituent donc un substrat idéal pour faire de la publicité."
            },
            {
                id: 8, 
                name: "Accesoires",
                description: "Accessoires en lien avec nos produits gonflables. Moteur (soufflerie), kit de réparation, piquets d’ancrage, produits d’entretien…"
            },
            {
                id: 9, 
                name: "Tout Les Jeux",
                description: "Visulaisez tous les jeux."
            }
        ]
        }
    },
    methods: {
        openCat: function (id) {
            if (id !=3 ) {
                this.$router.push({ name: 'Categorie', params: { idCateg: id}})
            } else {
                this.openSousCat()
            }
        },
        openSousCat: function() {
            console.log($('#id3'))
            this.SCopen = !this.SCopen;
            if (this.SCopen) {
                document.getElementById("sousCat").classList.add("sousCatClass2")
                setTimeout(function () {
                    document.getElementById("sousCat").classList.add("sousCatClass")
                    document.getElementById("id1").classList.add("shadow")
                    document.getElementById("id2").classList.add("shadow")
                    document.getElementById("id4").classList.add("shadow")
                    document.getElementById("id5").classList.add("shadow")
                    document.getElementById("id6").classList.add("shadow")
                    document.getElementById("id7").classList.add("shadow")
                    document.getElementById("id8").classList.add("shadow")
                    document.getElementById("id9").classList.add("shadow")
                },100)
            } else {
                document.getElementById("sousCat").classList.remove("sousCatClass2")
                setTimeout(function () {
                    document.getElementById("sousCat").classList.remove("sousCatClass")
                    document.getElementById("id1").classList.remove("shadow")
                    document.getElementById("id2").classList.remove("shadow")
                    document.getElementById("id4").classList.remove("shadow")
                    document.getElementById("id5").classList.remove("shadow")
                    document.getElementById("id6").classList.remove("shadow")
                    document.getElementById("id7").classList.remove("shadow")
                    document.getElementById("id8").classList.remove("shadow")
                    document.getElementById("id9").classList.remove("shadow")
                },100)
            }
            
        }
    }
}

// document.getElementById("id3").className.add("sousCat")
</script>