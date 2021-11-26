<?php
$title1="About Us";
$title2="Learn more about us";
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


     


  <div class="main_body">
    <span class="main_body__struct">
    
        <!-- banner -->
        <?php include("assets/banner.php"); ?>
      <!-- End banner -->

      <div class="block Bgfond50">
        <span class="block__struct">
          <span class="block__inner_struct">
            
              <div class="propos">
                <div class="flex">

                  <span class="img">
                    <img src="images/pic.png" alt="">
                  </span>

                  <span class="text_block">
                        
                        <span class="text2">
                          <span class="after"><i class="fal fa-quote-left"></i></span>
                         
                          Etre disciple et faire des disciples du Seigneur Jésus-Christ
                        <span class="before"><i class="fal fa-quote-right"></i></span>  
                      </span>
                        <span class="text3">
                            A la phase 3, quiconque n'est pas comme Jésus et ne s'efforce pas de vivre comme Jésus, n'est pas un disciple et ne peut certainement pas faire de disciples pour le Seigneur Jésus.
                        </span>
                        <p>
                            La 3ème convention mondiale à été une manifestation du fait que le Seigneur dirige son peuple. Pendant ce moment nouveau de la célébration de notre Dieu pour ses bonnes oeuvres sur nous et notre ministère dès les premiers jours avec le frère Zacharias T.Fomum, plongé dans les enseignements de cette grande rencontre, l'église de Douala aux côtés de tous dans la communion a éte honorée de connaitre la methode de Dieu pour atteindre aussi l'objectif de la phase 3:
                            
                              <ul>
                            <li>
                                <span class="ico"><i class="fal fa-chevron-double-right"></i></span> 
                                <span class="txt">
                                1 000 000 de disciples
                                </span>
                            </li>
                            <li>

                            <span class="ico"><i class="fal fa-chevron-double-right"></i></span> 
                                <span class="txt">
                                50 000 dirigeants
                                </span>
                           
                            </li>
                            <li>
                            <span class="ico"><i class="fal fa-chevron-double-right"></i></span> 
                                <span class="txt">
                                100 familles
                                </span>
                            
                            </li>
                            <li>

                            <span class="ico"><i class="fal fa-chevron-double-right"></i></span> 
                                <span class="txt">
                                Construire Douala comme une base auxiliaire pour le travail selon les propheties données par le Frère ZTF et les instructions reçues du Leader lors des retraites des Leaders de cette années.
                                </span>
                            
                            </li>
                        </ul>
                        </p>

                        <p>
                        Je vous souhaite une bonne lecture en parcourant notre site internet. Que les graces du Seigneur Jésus-Christ, le Seigneur de la moisson, soient avec vous!
                        <br>
                        Soyez richement béni!
                        </p>


                  </span>
                  
                </div>


                

              </div>


          </span>

           


          <!-- 100% contain -->
        </span>


       

      </div>




      <div class="numbers_container">
      <!-- <video
          autoplay="true"
          
          src="video/banner.mp4"
          preload="metadata"
          loop
          class="live_cta"
        ></video> -->

        <img class="live_cta" src="images/slides/slide1.jpg" alt="">
      
        <div class="numbers">
                          <span class="text">
                            <p class="text1">NUMBERS</p>
                            <p class="text2">
                            WE INVITE YOU <br> TO TEAM UP WITH US
                            </p>
                            <p class="text3">
                            so that we hand over the Planet Earth to its rightful Owner the Lord Jesus Christ
                            </p>

                            <div class="numbers_block">
                                  <span class="numbers_item">
                                      <span class="ico">
                                        <i class="fas fa-globe-africa"></i>
                                      </span>
                                      <span class="txt">
                                          <span class="val">115+</span>
                                          <span class="title">Nations</span>
                                      </span>
                                  </span>

                                  <span class="numbers_item">
                                      <span class="ico">
                                      <i class="fas fa-users"></i>
                                      </span>
                                      <span class="txt">
                                          <span class="val">3000+</span>
                                          <span class="title">Diciples</span>
                                      </span>
                                  </span>

                                  <span class="numbers_item">
                                      <span class="ico">
                                        <i class="fas fa-church"></i>
                                      </span>
                                      <span class="txt">
                                          <span class="val">30000+</span>
                                          <span class="title">Churches</span>
                                      </span>
                                  </span>



                            </div>

                          </span>

                          <span class="img">
                                <img src="images/Realistic earth with clouds.H03.2k.png" alt="">
                          </span>
                          
                    </div>
      </div>


            

      

          

      <div class="block Bgfond50">

      


        <span class="block__struct">


                   



          <span class="block__inner_struct">

           


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
<script>
    $(window).load(function(e){
    no_carousel=false;
    vertical_menu=$('#vertical_menu');
    vertical_menu.addClass("vertical_menu_after");
  });

</script>

  </body>
 

</html>
