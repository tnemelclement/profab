<template>
    <section id="vignetteGonf">
         <div id="imgVign"></div>
         <div id="infoVign">
             <div id="leftInfoVign">
                 <h1>#{{ refer }} </h1>
             </div>
             <div id="rightInfoVign">
                 <h1>{{ _ref }}</h1>
             </div>
         </div>
         <div id="prixVign">À partir de {{ prix }} €</div>

    </section>
</template>



<script>
export default {
    name: 'VignetteGonf',
    props: {
        refer: Number,
        _ref : String,
        prix : Number

    }
}
</script>




<style>
    @media (min-width: 992px) {
        #vignetteGonf {
            height: 290px;
            width: 280px;
            padding: 20px 10px 0 10px;
        }

        /* #vignetteGonf:hover {
            opacity: 60%;
        } */

        #imgVign {
            height: 200px;
            width: 100%;
            background-image: url(https://www.profab.es/tienda/4038-large_default/deslizante-de-agua-con-piscina.jpg);
            background-size: cover;
        }
        #infoVign {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: row;
            height: 40px;
            margin-bottom: 6px;
        }
        #leftInfoVign {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #db1047;
            color: white;
            height: 100%;
            border: solid #db1047;
            width: 30%;
        }
        #rightInfoVign {
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: white ;
            color: #db1047;
            height: 100%;
            border: solid #db1047;
            width: 70%;
        }
        #prixVign {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 30px;
            border: solid black;
            background: black;
            color: white;
            
        }
    }

    /* Mobile / Small tablet 576px */
    @media (min-width: 4px) and (max-width: 991px) {
       
    }
</style>

