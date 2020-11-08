<template>
    <section id="accueil" >

        <!-- HERO -->
        <section id="hero">
            <video autoplay muted loop playsinline>
                <source src="../assets/video/video_hero.mp4" type="video/mp4">
            </video>
            <div id="heroTitle">
                <h1><span style="font-family : Quicksand">Profab</span> France</h1>
                <h2>Fabricant de structures gonflables depuis 1991</h2>
            </div>
        </section>

        <!-- PRESENTATION -->
        <section id="presentation">
            <div id="blocPrincipal">
                <div id="bloc1"> 
                    <div class="bloc warpper rowStartCenter">
                        <div id="l1" class="colStartCenter">
                            <h1>QUI SOMMES NOUS ?</h1>
                            <p>Profab S.L. est une entreprise familiale créée en 1991 dans le village de Cabanes en Espagne (Castellon). Nous mettons tout en œuvre pour offrir à nos clients un produit et un service exceptionnel. Nous réalisons un chiffre d’affaires de 3 millions d’euros par an avec des clients en Europe, en Angleterre, en Russie, en Afrique et au Moyen-Orient.</p>
                            <p>Grace à l’expérience de nos 38 collaborateurs et à une technique de production avancée, nous sommes une marque leader mondialement reconnue, nos gonflables sont connu pour leur haute qualité et leur grande durabilité. </p>

                        </div>
                        <div id="r1" style="background-image: url(https://www.profab.es/wp-content/uploads/2018/05/profab.jpg)">

                        </div>
                    </div>
                </div>

                <!-- <div id="bloc2"> 
                    <div class="bloc warpper middle">
                            <h1>LEADER MONDIAL</h1>
                            <p>Grace à l’expérience de nos 38 collaborateurs et à une technique de production avancée, nous sommes une marque leader mondialement reconnue, nos gonflables sont connu pour leur haute qualité et leur grande durabilité. </p>
                    </div>
                </div> -->

                 <div id="bloc4"> 
                    <div class="bloc warpper rowStartCenter">
                        <div id="r4" style="background-image: url(data:image/png;base64,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)"></div>
                        <div id="l4" class="colStartCenter text">
                            <h1>FABRICATION</h1>
                            <p>Nos gonflables à thèmes (Pirate, Marin, Médiéval…) sont peints à la main avec des dessins et des formes très détaillés. Ceci nous permet d’avoir des gonflables magnifiques et de rendre chaque jeu unique.</p>
                            <p>Nous pouvons aussi réaliser des gonflables sur mesure selon vos idées ou personnalisés pour les besoins de communication de votre entreprise.</p>
                        </div>
                        
                    </div>
                </div>

                <div id="bloc3"> 
                    <div class="bloc warpper colStartCenter">
                        <div class="middle">
                            
                            
                            <div id="l3" class="middle">
                                <h1>CERTIFICAT DE CONFORMITÉ</h1>
                                <p>La conception de nos structures gonflables est régie par la norme EN-14960 et EN-1176, afin que les enfants puissent en profiter en toute sécurité.</p>
                                <p>Nous sommes la première entreprise en Espagne à produire ses structures gonflables conformément aux directrices de ces normes. En outre, nous avons plusieurs inspecteurs qualifiés autorisés par le "RPII" au Royaume-Uni, l'organisation qui a élaboré ces règlements. Par conséquent, tous nos gonflables quittent nos installations avec un certificat de sécurité ; dans la conception, la construction et les matériaux. Les personnalisations effectuées par nos clients seront toujours conformes à cette réglementation.</p>
                                <p>De nombreux articles gonflables ont été fabriqués avant cette réglementation. Beaucoup d'entre eux ne respectent pas les exigences de sécurité de ce règlement. Les autorités et les compagnies d'assurance exigent de plus en plus souvent cette documentation pour pouvoir utiliser la structure gonflable.</p>
                                <p>Nous offrons la possibilité d'inspecter ces structures gonflables et de fournir un certificat si elles sont conformes à la réglementation. Dans le cas où la structure gonflable n'est pas conforme à cette réglementation, notre entreprise peut faire une offre pour la modification nécessaire et la réaliser dans notre atelier.  De cette façon, la certification appropriée peut être obtenue.</p>
                            </div>
                        </div>
                        <div class="rowSpaceArrCenter" style="width: 100%">
                            <div class="photo photoNormes middle"> <img src="http://www.amuztoi.com/wp-content/uploads/2020/01/logo_ipma.jpg"> </div>
                            <div class="photo photoNormes middle"> <img src="https://lh3.googleusercontent.com/proxy/jpq7L5iHw-C2SvDtdX2pEgsA13RqXM424hyNz2fPQqOOC9Ly9-ponm7ozP02ml_j8aEdM9o1R0ittU9pao2bFbkLfjujqMfD5N6m5C7FMciuqXzM5_2d4VE5V2P1ao5f"> </div>
                            <div class="photo photoNormes middle"> <img src="https://www.concept1900.com/wp-content/uploads/2020/04/NEW-IAAPA_logo_2019.png"> </div>
                            <div class="photo photoNormes middle"> <img src="https://bouncycastlenetwork-res.cloudinary.com/image/upload/f_auto/thumbs/aHR0cHM6Ly93d3cubGFpbmRvbmxlaXN1cmUuY28udWsvdGh1bWJzLmFzaHg_Y3M9MzAwJmltZz1uZXctcGlwYS1pbnRlcmdyYXRpb24uanBn"> </div>
                        </div>
                    </div>
                </div>


                 <div id="bloc6"> 
                    <div class="bloc warpper middle">
                        <div class="middle">
                            <h1>EN FRANCE</h1>
                            <p>Dans le cadre du développement commercial dans les pays Francophones, nous avons confié la distribution des gonflables Profab à la société Française EURL Jr Mouly. Cela nous permet d’avoir un seul interlocuteur et de proposer un service après-vente au plus proche des clients (nettoyage, séchage, réparation, hivernage, certification…). </p>
                        </div>
                        

                        
                    </div>
                </div>

            </div>
        </section>


    </section> 
</template>

<script>

export default {
    name: 'Accueil',
    components: {
        
    }
}
</script>

<style>
    video {
        width: 100%;
        position: absolute;
        z-index: -10;
    }

    #hero {
        height: 400px;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #heroTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgb(0, 0, 0, 0.4);
        height: 100%;
        width: 100%;
    }

    #heroTitle h1 {
        font-size: 60px;
        color: #db1046;
    }

     #heroTitle h1 span {
        font-size: 100px;
        color: #db1046;
    }

     #heroTitle h2 {
        font-size: 35px;
        color: white;
    }

    #presentation {
        background: #FFF;

    }

    #blocPrincipal {
        background: rgb(255, 255, 255, 0.8);
        height: 100%;
    }



/**********************************************/
    .bloc{
    padding: 30px 0;
    } 

    #l1 {
        width: 46%;
        padding: 2%;
    }

    #r1 {
        background-size: cover;
        width: 50%;
        height: 280px;
    }
    

    .bloc p {
        margin-top: 20px;
        font-size: 16px;
        
    }

    .bloc h1 {
        font-size: 30px;
        font-family : 'Quicksand';
    }

    #bloc1 {
        background: #FFF;
        text-align: justify;
        height: 350px;
        padding-top: 40px;
    }
    
    #bloc2 {
        background: #444;
        color: white;
        text-align: center;
        
        padding: 40px 0;

    }
    #bloc3 {
        padding-bottom: 30px;
    }

    #bloc3 img {
        width: 150px;
        padding: 0 40px;
    }

    .photoNormes {
        
    }

    #bloc4 {
        background: #444;
        color: white;
        padding: 40px 0;
    }

    #r4 {
        background-size: cover;
        width: 50%;
        height: 240px;
    }

    #bloc5 {
        text-align: center;
        padding: 40px 0;
    }

    #bloc6 {
        background: #444;
        color: white;
        text-align: justify;
        padding: 40px 0;
    }

    #bloc6 img {
        height: 0px
    }



    .rowStartCenter {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    }

    .colStartCenter {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    .middle {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .rowSpaceArrCenter {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }

    .text {
        width: 46%;
        padding: 2%;
    }

    .photo {
        width: 50%;
    }

</style>