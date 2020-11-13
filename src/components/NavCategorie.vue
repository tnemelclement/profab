<template>
    <section id="categorie" class="warpper">
        
        <div id="sousCat">
            <img v-on:click="openSousCat" src="../assets/images/icones/croix.png">
            <div v-for="sousCat in sousCategorie" :key="sousCat.id">
                <div v-on:click="openCat(sousCat.id)" class="blocSousCategorie" :id="'id'+sousCat.id">
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
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 30px;
            border-bottom: solid #db1047;
        }

            .blocSousCategorie {
                margin-top: 50px;
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

            #sousCat img {
                height: 30px;
            }

            #sousCat img:hover {
               opacity: 50%;
            }
        


        
        
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
import categor from "@/assets/categories.json"



export default {
    name: 'NavCategorie',
    data () {
        return {
            SCopen: false,
            categories: categor.categories,
            sousCategorie: categor.sousCategories
        }
    },
    methods: {
        openCat: function (id) {
            if (id !=3 ) {
                //let cat = id
                this.$router.push({ name: 'Categorie', params: { cat: id }})
                //this.$router.push(`/catalogue/categorie/${cat}`)
            } else {
                this.openSousCat()
            }
        },
        openSousCat: function() {
            this.SCopen = !this.SCopen
            $('#sousCat').slideToggle();
            if (this.SCopen) 
                $('#Cat').css("opacity","40%")
            else
                $('#Cat').css("opacity","100%")
        }
    },
    mounted() {
        $('#sousCat').slideUp(1);  
    },
    updated() {
        $('#sousCat').slideUp(1);  
    }
}

// document.getElementById("id3").className.add("sousCat")
</script>