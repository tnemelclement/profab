<template>
  <div id="app">
    
    <!-- head -->
    <section id="head">
      <div id="inhead">
        <div id="headUn">
          <img @click="$router.push({name: 'Accueil'})" id="logo" src="@/assets/images/profab-1.png">
        </div>
        <div id="headUn">
          <h2 style="color : #db1047">contact@profab.fr</h2>
          <h2 style="color : #777">(+33) 06 38 90 65 24</h2>
        </div>
        
      </div>
    </section>
   
   <!-- NAVBAR -->
    <nav id="navbar">
      <div id="navEntete">
        <!-- img id="logo" src="@/assets/images/profab-1.png"-->
        <img class="navbarMobile" src="@/assets/images/icones/menu3_blanc.png">
      </div>
      <div id="pages">
        <router-link :to="{name: 'Accueil'}" class="linkNav">Accueil</router-link>
        <router-link :to="{name: 'NavCatalogue'}" class="linkNav">Catalogue</router-link>
        <router-link :to="{name: 'En Stock'}" class="linkNav">Jeux en Stock</router-link>
        <router-link :to="{name: 'Medias'}" class="linkNav">Medias</router-link>
        <router-link :to="{name: 'Sav'}" class="linkNav">Service Apres Vente</router-link>
        <router-link :to="{name: 'Contact'}" class="linkNav">Contact</router-link>
      </div>
    </nav>
    
    <!-- CONTENUE DE LA PAGE -->
    <router-view/>

    <!-- FOOTER -->
    <footer>
      <img src="@/assets/images/profab_blanc.png">
      <h3>Profab France © Tous droits réservés</h3>
    </footer>
  </div>
</template>


<style>

#head {
    height: 120px;
    background-image: url('assets/images/fond_profab.jpg');
    background-size: cover;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

#inhead {
  font-family: 'Lato', sans-serif;
  background-color:rgba(255, 255, 255, 0.9);
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

#headUn img {
  cursor: pointer;
}

/******************** NAVBAR ********************/

/**************************************** ORDI ****************************************/

  @media (min-width: 992px) {
    
    nav {
        /*position: fixed;*/
        top: 0px;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; 
        background-color:  white;
        border-top: 4px solid #db1047;
        border-bottom: 4px solid #777;
    }
    
    nav .linkNav {
      padding-right: 60px;
      font-size: 20px;
      text-decoration: none;
      outline: none;
      color: #444;
    }

    nav .linkNav:hover {
      color: #db1047;
    }
    
    nav #pages {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        list-style-type: none; 
    }
    

    #navEntete .navbarMobile {
      display: none; 
    }

    #navEntete {
      margin-top: 0px;
    }

    
  }

  /**************************************** MOBILE ****************************************/
  /* Mobile / Small tablet 576px */

  @media (min-width: 4px) and (max-width: 991px) {
      
    nav {
        background-color: #db1047;
        color: white ;
        top: 0px;
        width: 100%;
        transition: 0.5s;
        
        height: 53px;
    }

    #navEntete {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-start;
        padding-top: 10px;
    }

    #navEntete h1 {
      padding: 0 10px;
      font-size: 6.4vw;
    }

    .navbarMobile {
        height: 30px;
        width: 30px;
        padding: 0 10px;
    }
    
    nav {
        
        
    }
    
    nav #pages {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        list-style-type: none; 
        padding-left: 15px;
        
    }
    
    nav a {
        text-decoration: none !important;
        outline: none !important;
        color: white !important;
        background-color: rgba(0, 0, 0, 0.0);
        font-size: 20px;
        padding-top: 8px;
    }
    
    nav a:hover {
        text-decoration: none;
        outline: none;
        color: grey;
    }



  }


  /******************** FOOTER ********************/

footer {
  background-color: black;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 120px;
  margin-top: 40px;
}

footer img {
  height: auto;
  width: 160px;
  margin: 0 auto;
}

footer h3 {
	color: #777;
	text-align: center;
  font-size: 16px;
}

</style>


<script>
  window.scroll(function() {
        var lst = document.getElementsByClassName('linkNav');
        if (document.scrollTop() > 18) {
            document.getElementById("navbar").classList.add("autre");
            for (var k in lst) lst[k].classList.add("autre"); 
        } else {
            document.getElementById("navbar").classList.remove("autre");
            for (var l in lst) lst[l].classList.remove("autre");
        }
    });
</script>