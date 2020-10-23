<template>
    <section id="categorie" class="warpper">
        <div v-for="cat in categories" :key="cat.id">
            <div id="blocCategorie">
                <h1>#{{cat.id}}</h1>
                <h1 id="tiret"> - </h1>
                <h2>{{cat.name}}</h2>
            </div>
        </div>  
    </section>
</template>

<style>
    @media (min-width: 992px) {
        #categorie {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 30px;
        }

        #blocCategorie {
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

        #blocCategorie:hover {
            width: 300px;
            height: 200px;
            background: white;
            color: #db1047;
            border: solid #db1047;
            transition: 0.3s;
        }

        #blocCategorie h1 {
            font-size: 95px;
            padding-left:20px ;
        }

        #blocCategorie h2 {
            font-size: 30px;
            padding: 0 20px ;
        }

        #blocCategorie #tiret {
            display: none;
        }
    }

    /* Mobile / Small tablet 576px */
    @media (min-width: 4px) and (max-width: 991px) {
        #blocCategorie {
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

        #blocCategorie:hover {
            background: white;
            color: #db1047;
            transition: 0.1s;
        }

        #blocCategorie h1 {
            font-size: 30px;
            padding-left:20px ;
        }

        #blocCategorie h2 {
            font-size: 30px;
            padding-left:20px ;
        }
    }
</style>

<script>
export default {
    name: 'NavCategorie',
    data () {
        return {
            categories: [
            {id: 1, name: "Les Petits"},
            {id: 2, name: "Les Toboggans "},
            {id: 3, name: "Compétition et Jeux d'Eau"},
            {id: 4, name: "Multi-Jeux "},
            {id: 5, name: "Goinfres"},
            {id: 6, name: "Promotion et Tentes"},
            {id: 7, name: "Adrénaline Extrême"},
            {id: 8, name: "Accesoires"},
            {id: 9, name: "Certificat de sécurité"}
        ]
        }
    }
}
</script>