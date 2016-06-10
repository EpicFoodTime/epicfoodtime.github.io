
$(document).ready(function(){
$("#Start1").hide();
$("#Page11").hide();
$("#Page1a1").hide(); 
$("#Page1b1").hide();
$("#Page2a1").hide();
$("#Page2b1").hide();
$("#Page3a1").hide();   
$("#Page3b1").hide();
$("#Trumpland1").hide();
$("#Jeffdialoguestart1").hide();
$("#Page2b12").hide();
$("#Page2a12").hide();
$("#Page3a12").hide();
$("#Page3b12").hide();
$("#Page3b13").hide();
$("#Page3b14").hide();
$("#Page3b15").hide();
$("#Page3a13").hide();    
$("#Page3a141").hide(); 
$("#Page3a151").hide(); 
$("#Page3b1").hide();
$("#explanation1").hide();


 $("#intro1").click(function(){
 $("#intro1").hide();
   $("#Start1").show();
    $("#Trumpland1").show();
   $("#Jeffdialoguestart1").hide();
    $("#explanation1").hide();
    $("#Page3a141").hide();
    $("#Page3a151").hide();

 });// this ends the intro click function

$("#Start1").click(function(){
 $("#Start1").hide();
  $("#Page11").show(); 
  $("#Trumpland1").hide();
  $("#Jeffdialoguestart1").show();
   $("explanation1").hide();
   $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the page one function

$("#Page11").click(function(){
 $("#Page11").hide();
  $("#Page1a1").show();
    $("#Page1b1").show();
  $("#Trumpland1").hide();
  $("#Jeffdialoguestart1").hide();
   $("#explaination1").hide();
   $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 1a choice 1b function

$("#Page1a1").click(function(){
 $("#Page1a1").hide();
   $("#Page1b1").hide();
  $("#Page2a1").show();
    $("#Page2b1").show();
  $("#Trumpland1").hide();
   $("#Jeffdialoguestart1").hide();
    $("#explanation1").hide();
    $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 2a choice 2b function

$("#Page2a1").click(function(){
 $("#Page2b1").hide();
   $("#Page2a1").hide();
   $('#exploreBody').css("backgroundImage","url(img/exploreLeft1.jpg)"); 
  $("#Page3a1").hide();
    $("#Page3b1").hide();
  $("#Trumpland1").hide();
  $("#Jeffdialoguestart1").hide();
  $("#explanation1").show();
  $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 3a choice 3b function

$("#Page3a1").click(function(){
 $("#Page3b1").hide();
   $("#Page3a1").hide();
  $("#Page4a1").show();
    $("#Page4b1").show();
     $('#exploreBody').css("backgroundImage","url(img/explore2-goBack2.jpg)"); 
  $("#Trumpland1").hide();
   $("#Jeffdialoguestart1").hide();
    $("#explanation1").hide();
    $("#Page3a141").show();
    $("#Page3a151").show();

});// this ends the Choice 3a choice 3b function

$("#Page11").click(function(){
 $("#Page11").hide();
  $("#Page1a1").show();
    $("#Page1b1").show();
  $("#Trumpland1").hide();
 $("#Jeffdialoguestart1").hide();
  $("#explanation1").hide();
  $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 1a choice 1b function

$("#Page1b1").click(function(){
 $("#Page1a1").hide();
   $("#Page1b1").hide();
  $("#Page2a1").show();
    $("#Page2b1").show();
  $("#Trumpland1").hide();
   $("#Jeffdialoguestart1").hide();
    $("#explanation1").hide();
    $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 2a choice 2b function

$("#Page2b1").click(function(){
 $("#Page2a1").hide();
   $("#Page2b1").hide();
  $("#Page3a1").show();
    $("#Page3b1").hide();
    $('#exploreBody').css("backgroundImage","url(img/Backgroundimage.png)"); 
  $("#Trumpland1").hide();
  $("#Jeffdialoguestart1").hide();
   $("#explanation1").hide();
   $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 3a choice 3b function

$("#Page3b1").click(function(){
 $("#Page3a1").hide();
   $("#Page3b1").hide();
  $("#Trumpland1").hide();
 $("#Jeffdialoguestart1").hide();
  $("#explanation1").hide();
  $("#Page3a141").hide();
$("#Page3a151").hide();

});// this ends the Choice 3a choice 3b function

});// this is where the document.ready ends