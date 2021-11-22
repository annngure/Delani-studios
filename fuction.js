//about us fuction to dispaly
$(document).ready(function(){
  $("#designone").click(function(){
  $("#designone").hide();
  $("#designone_clickable").toggle();
  $("#designone_clickable").show();
    
  });
  $("#designone_clickable").click(function(){
    $("#designone_clickable").hide();
    $("#designone").toggle();
    $("#designone").show();
  });

$("#developmenttwo").click(function(){
  $("#developmenttwo").hide();
  $("#developmenttwo_clickable").toggle();
  $("#developmenttwo_clickable").show();
    
  });
  $("#developmenttwo_clickable").click(function(){
    $("#developmenttwo_clickable").hide();
    $("#developmenttwo").toggle();
    $("#developmenttwo").show();
  });

  $("#productthree").click(function(){
    $("#productthree").hide();
    $("#productthree_clickable").toggle();
    $("#productthree_clickable").show();
      
    });
    $("#productthree_clickable").click(function(){
      $("#productthree_clickable").hide();
      $("#productthree").toggle();
      $("#productthree").show();
    });
   //for the popup message on the button
   
   function Popup(){
     $(".message").toggle();
   }

})
