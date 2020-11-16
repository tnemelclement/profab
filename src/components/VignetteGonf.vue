<template>
    <section id="vignetteGonf">
         <div v-on:click="$router.push({ name: 'PageGonflable', params: { id: refer}})" id="imgVign" >
             <img :src="'http://amuztoi.com/img_gonf/photo_stock/'+image">
         </div>
         <div id="infoVign">
             <div id="leftInfoVign">
                 <h1>#{{ refer }} </h1>
             </div>
             <div id="rightInfoVign">
                 <h1>{{ _ref }}</h1>
             </div>
         </div>
         <p id="prixVign">Prix HT : {{ prix }} €</p>

    </section>
</template>



<script>


export default {
    name: 'VignetteGonf',
    props: {
        refer: null,
        _ref : null,
        prix : null,
        ident : null,
        image : null

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
            width: 274px;
            border-top: solid;
            border-right: solid;
            border-left: solid;
        }

        #imgVign img {
            height: 200px;
            width: 274px;
            
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
            padding: 0px 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            background-color: white ;
            color: #db1047;
            height: 100%;
            border: solid #db1047;
            width: 70%;
            white-space: nowrap;
            text-overflow: none;
            overflow: hidden;
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

