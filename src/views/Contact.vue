<template>
    <section id="contact" class="warpper">
        <div id="left">
            <h1>CONTACT.</h1>
            <h2>Nous vous recontacterons rapidement.</h2>
            <div id="infoContact">
                <div class="infoContact">   <img src="../assets/images/icones/man.png">    <p>Jean-Romain Mouly</p>    </div>
                <div class="infoContact">   <img src="../assets/images/icones/phone.png">  <p>06 38 90 65 24</p>    </div>
                <div class="infoContact">   <img src="../assets/images/icones/mail.png">   <p>jr.mouly@profab.es</p>    </div>
                <div class="infoContact">   <img src="../assets/images/icones/home.png">   <p>Lacassagne, <br>12450 Calmont</p>    </div>
                <p id="infoSup">EURL JR MOULY distributeur Profab pays Francophones<br>&nbsp;<br>SIRET : 839 668 357 000 16</p>
                
            </div>
        </div>
        <div id="right">

            <form>

                <div id="nomPrenom">
                    <div class="champ nomPrenom">
                        <label>Nom :</label>
                        <input type="text">
                    </div>
                    <div class="champ nomPrenom">
                        <label>Prénom :</label>
                        <input type="text">
                    </div>
                </div>
                <div class="champ">
                    <label>Société :</label>
                    <input type="text">
                </div>
                <div class="champ">
                    <label>Téléphone :</label>
                    <input type="text">
                </div>
                <div class="champ">
                    <label>E-mail :</label>
                    <input type="text">
                </div>
                <div class="champ">
                    <label>Message :</label>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Envoyer</button>
                </div>

            </form>


        </div>
    </section>
</template>

<style>

#contact {
    margin: 70px auto;
    display: flex;
    flex-direction: row;
}

    #contact #left {
        width: 44%;
        color: white;
        background: #333;
        padding: 3%;
    }

        #contact #infoContact {}

        #contact h1 {
            font-size: 50px;
        }

        #contact h2 {
            font-size: 30px;
            font-weight: 200;
            padding-bottom: 20px;
        }

            #contact .infoContact {
                display: flex;
                justify-content: flex-start;
                align-content: center;
                flex-direction: row;
                margin-top:20px;
            }

                #contact img {
                    height: 30px;
                    width: 30px;
                }

                #contact p {
                    font-size: 20px;
                    color: white;
                    padding-left: 20px;
                }

                #contact #infoSup {
                    text-align: center;
                    margin: 50px 0px 20px 0;
                    font-weight: 300;
                }


    #contact #right {
        width: 44%;
        color:black; 
        background: white;
        padding: 3%;
    }

        #contact #nomPrenom {
            display: flex;
            justify-content: space-between;
            align-content: center;
            flex-direction: row;
        }

        #contact .nomPrenom {
            width: 46%;
        }

        #contact .champ {
            display: flex;
            justify-content: flex-start;
            align-content: center;
            flex-direction: column;
            padding-bottom: 20px;
        }

            #contact label {
                font-size: 20px;
            }

            #contact input[type=text] {
                margin-top: 5px ;
                border: none;
                border-bottom: 2px solid #db1047;
                font-size: 20px;
                font-weight: 300;
                padding: 2px 2px;
                outline: none;
            }

            #contact textarea {
                margin-top: 5px ;
                border: none;
                border: 2px solid #db1047;
                font-size: 18px;
                font-weight: 300;
                padding: 10px;
                height: 200px;
                outline: none;
            }


            #contact button {
                width: 100%;
                height: 40px;
                border: 2px solid #db1047;
                outline: none;
                background: white;
                color: #db1047;
                font-size: 20px;
            }

            #contact button:hover {
                background: #db1047;
                color: white;
                transition: 0.2s;
            }

</style>