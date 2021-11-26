<?php

?>
<html lang="fr">

    <!-- header  -->
      <?php include("assets/head.php"); ?>
    <!-- end header  -->

  <body>



    <!-- loading animation -->
        <?php include("assets/loading.php"); ?>
     <!-- End loading animation -->
   
    <!-- header  -->
        <?php include("assets/header.php"); ?>
        <?php include("assets/asideStyle.php"); ?>
    <!-- end header  -->


    <!-- vertical menu -->
    <?php include("assets/verticalMenu.php"); ?>
    <!-- End vertical menu -->

    <div class="container_pages">


    <div class="conterenduproclamation">


    <canvas id="confetti" ></canvas>

  


      <form class="form" action="" method="post">
        <span class="fond">
           <i class="fas fa-stopwatch"></i>
        </span>

        <span class="contain">
            <h1>Merci d'avoir proclamer</h1>
            <h4>
               S'il vous plait remplissez ce formulaire  pour nous envoyer le compte rendu
            </h4>
            
            <div class="flex">
                <input type="text" placeholder="Nom " class="boxe">
                <input type="Tel" placeholder="Tel " class="boxe">
            </div>
            
            <div class="flex">
                <input type="text" placeholder="Assemblée " class="boxe">
                <input type="email" placeholder="Email " class="boxe">
            </div>
            <div class="flex">
                <input type="text" placeholder="Famille " class="boxe">
                <button class="boxe" type="submit"> Envoyer </button>
            </div>
            
          

        </span>
        
        
    </form>
</div>


  <div class="main_body">
    <span class="main_body__struct">
    
      <!-- here -->

      <div class="banner_proclamation">
          <img class="image" src="images/banner/banner_pro.png" alt="">
          <!-- <img class="curve" src="images/svg/curve.svg" alt=""> -->
      </div>
      <div class="container_box">
          <div class="struct">
            <div class="dash">
                <span class="item item_statistique"> 
                     <span class="ico">
                        <i class="fas fa-user"></i>
                     </span>
                     <span class="text"> <b>245,2k</b> <span class="item_long_text">on proclamé(s)</span></span>
                </span>

                <span class="count_box">
                    <!-- <svg class="box_counter" style="background: none;display:none " viewBox="0 0 200 200" width="200" height="200">
                            <circle class="circle1" cx="100" cy="100" r="85" fill="rgba(0,0,0,0)" stroke-width="12"></circle>
                            <circle id="minuter" class="circle" cx="100" cy="100" r="85" fill="rgba(0,0,0,0)" stroke-width="12" style="stroke-dasharray: 533.8; stroke-dashoffset: 533.8;"></circle>
                    </svg> -->
                 
                    <span class="duration">
                        <span id="c" class="val"><span minute="0" id="MINUTES"></span> : <span id="SECONDES">00</span> </span>
                        <span class="text">Min <i class="fas fa-stopwatch text_ico" style="font-size: 48px;"></i> </span>
                    </span>

                </span>

                <span class="item active"> 
                     <span id="Start_proclamation" class="ico">
                       <i class="fas fa-play"></i>
                     </span>
                     <span id="Pause_proclamation" class="ico ico_appear">
                       <i class="fas fa-pause"></i>
                     </span>
                     <span id="Stop_proclamation" class="ico ico_appear">
                       <i class="fas fa-stop"></i>
                     </span>
                    
                </span>
            </div>

                

            <div class="topic">
                <div class="topic_struct">
                        <img  src="images/svg/cirdesign.svg" alt="" class="cirdesign">
                        <img  src="images/svg/cirdesign.svg" alt="" class="cirdesign cirdesign2">

                        <span class="quote quoteL">
                        <i class="fas fa-quote-left" style="font-size: 48px;"></i>
                        </span>

                        <span class="sujetdepriere">

                                <div class="title">
                                   <span class="text"> Sujet de Priere</span>
                                    <span class="line"></span>
                                </div>

                                Au Nom du Seigneur Jesus Christ
                                nous proclamons que le prince satanique 
                                de Douala a été renversé ! Amen.
                        </span>

                        <span class="quote quoteR">
                        <i class="fas fa-quote-right" style="font-size: 48px;"></i>
                        </span>
                </div>

                

            </div>

            <div class="warning">
                            <span class="warning_struct">
                                  <span class="contain">
                                      <span class="ico"><i class="fas fa-lightbulb-exclamation"></i></span>
                                      <span class="text">
                                        Nous comptons sur votre bonne foi d'enfant de Dieu
                                        pour prier de tout votre Coeur et nous envoyez votre compte 
                                        rendu.
                                        <br>
                                        <br>
                                        Appuyer sur start pour commencer à proclamer
                                        Remplissez le formulaire qui s'affichera a la fin pour nous 
                                        envoyer le compte rendu de votre proclamation
                                      </span>
                                  </span>
                            </span>
                </div>

          </div>
      </div>

      
      <div class="block Bgfond50">
        <span class="block__struct">
          <span class="block__inner_struct">
            
                <!-- here -->

          </span>

           


          <!-- 100% contain -->
        </span>


       

      </div>




  


            

      

          

      <div class="block Bgfond50">

      


        <span class="block__struct">


                   



          <span class="block__inner_struct">


          <!-- PROCLAMATIONS -->
          <?php include("assets/proclamations.php"); ?>
            <!-- PROCLAMATIONS -->

           


            <!-- partner -->
            <?php include("assets/partner.php"); ?>
            <!-- partner -->

             <!-- Newsletter -->
             <?php include("assets/Newsletter.php"); ?>
            <!-- Newsletter -->                      


          </span>
        </span>
      </div>




    </span>
  </div>
</div>




    
<!-- footer -->
  <?php include("assets/footer.php"); ?>
<!-- footer -->



  <!-- autre -->
  <?php include("assets/autre.php"); ?>
<!-- autre -->

    <script src="js/proclame.js"></script>
  </body>
 

</html>
