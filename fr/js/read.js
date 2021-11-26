

////// LISTEN NEWS

listen=1;
listen_pause=false;
$(document).ready(function () {
  
  $("#player").on('click',function(){
    $(this).toggleClass("play_listen");
    console.log("click");
    $("#stop_player").removeClass("disable");


    if(listen){
      let texte_voice= $(".news_title").text() +  $(".news_body").text();
         responsiveVoice.speak(texte_voice,"French Female");
      listen=0;
    }

    if(responsiveVoice.isPlaying()){
      responsiveVoice.pause();
    }else{
      responsiveVoice.resume();     
    }
    
  });


  $("#stop_player").on('click',function(){

    $("#player").addClass("play_listen");
    responsiveVoice.cancel();
    listen=1;

  });

});