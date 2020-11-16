<template>
    <section>
        <router-view></router-view>
        <div id="stop"> 
            <h2>Bientôt disponible...</h2>
            <a href="http://www.amuztoi.com/files/catalogue_profab.pdf">Ouvrir le catalogue PDF</a>
            <h2>ou</h2>
            <a href="http://www.amuztoi.com/profab/#/enstock">Voir les jeux en Stock</a>
        </div>
            
        

    </section>
    
</template>

<script>

export default {
    name: 'Catalogue',
    components: {
        
    }
}
</script>

<style>

    #stop {
        background-color: rgb(255, 255, 255,0.9);
        width: 100%;
        height: 748px;
        position: absolute;
        z-index: 10;
        top: 178px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #stop a {
        border: solid;
        padding: 15px;
        font-size: 30px;
        background: #db1047;
        text-decoration:none; 
        color: white;
        border:solid #db1047;
        transition: 0.3s;
        cursor: pointer;
    }

    #stop a:hover{
        background: white;
        color: #db1047;
        padding: 15px 25px;
        font-size: 35px;
        transition: 0.3s;
        
    }

    #stop h2 {
        padding: 30px 0;
    } 
    
 
</style>