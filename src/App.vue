<template>
  <div id="app">
    <section id="hero">
      <div id="inHero">
        <div id="heroUn">
          <img id="logo" src="@/assets/images/profab-1.png">
        </div>
        <div id="heroUn">
          <h2 style="color : #db1047">contact@profab-fr.fr</h2>
          <h2 style="color : #777">(+33) 06 07 08 09 10</h2>
        </div>
        
      </div>
    </section>
    <nav id="navbar">
      <div id="navEntete">
        <!-- img id="logo" src="@/assets/images/profab-1.png"-->
        <img class="navbarMobile" src="@/assets/images/icones/menu3_blanc.png">
      </div>
      <div id="pages">
        <router-link to="/"><a class="linkNav">Accueil</a></router-link>
        <router-link to="/gonflable"><a class="linkNav">Gonflables</a></router-link>
        <router-link to="/contact"><a class="linkNav">Contact</a></router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<style>

#hero {
    height: 120px;
    background-image: url('assets/images/fond_profab.jpg');
    background-size: cover;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

#inHero {
  font-family: 'Lato', sans-serif;
  background-color:rgba(255, 255, 255, 0.9);
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

/******************** NAVBAR ********************/

/**************************************** ORDI ****************************************/

  @media (min-width: 992px) {
    .autre {
        background-color:rgba(0, 0, 0, 0.9);
        color: white !important;
        height: 60px !important;
        transition: 0.1s;
    }
    
    nav {
        /*position: fixed;*/
        top: 0px;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        transition: 0.5s;
        color: black;
        font-size: 25px;
        background-color:  white;
        border-top: 4px solid #db1047;
        
        box-shadow: 0 5px rgba(119, 119, 119, 0.322);
    }
    
    
    nav #pages {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        list-style-type: none; 
    }
    
    nav a {
        text-decoration: none;
        outline: none;
        color: black;
        background-color: rgba(0, 0, 0, 0.0);
        font-size: 20px;
        padding-right: 20px;
    }
    
    nav a:hover {
        text-decoration: none;
        outline: none;
        color: grey;
    }

    #navEntete .navbarMobile {
      display: none; 
    }

    #navEntete {
      margin-top: 0px;
    }

    nav #logo {
      height: 70px;
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
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 120px;
    margin-top: 30px;
}

footer h3 {
	color: #FFF;
	text-align: center;
  font-size: 30px;
}
.copyright {
    padding-top: 15px;
	text-align: center;
	color: #777;
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