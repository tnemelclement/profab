<template>

<section id="admin">
    <div id="top">
        <h1>Espace Administration</h1>
        <h2>Se déconnecter</h2>
    </div>
    <div id="nav">
        <h3>Formulaire de contact</h3>
        <h3>Gonflables en Stock</h3>
        <h3>Gonflables</h3>
        
    </div>
    <div id="display">
        <Tab :donnees="elt"/>
    </div>

</section>
    
</template>

<script>

import Tab from '@/components/adminTab.vue'
export default {
    name: 'Admin',
    components: {
        Tab
    },
    data() {
        return {
            elt: "test",
            elements: [
                {
                    name: "Formulaire de contact",
                    champs: ['Nom','Prénom','Société','Email','Téléphone','Message'],
                    url: ""
                },
                {
                    name: "Gonflables en Stock",
                    champs: ['id','ref','nom','longueur','largeur','hauteur','prix hors taxe', 'img1', 'img2'],
                    url: "http://83.229.85.83:8082/api/v1/gonflables"
                },
                {
                    name: "Gonflables",
                    champs: []
                }
            ],
            lesNoms: ['test1','test2','test1','test2','test1','test2']
        }
    }
    
}
</script>

<style>

    #admin {
        position: absolute;
        top: 0;

        background: white;
        width: 100%;
        min-height: 100vh;
    }

    #admin #top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 60px;
        border-bottom: solid;

        padding:  0 20px;
    }

    #admin #nav {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 60px;
        border-bottom: solid grey;

        background: black;
        color: white;
    }

</style>