$(document).ready(function(){
   $("input").click(function(){
      let number0fListItem = $("#choices li").length;
      let randomChildNumber = Math.floor(Math.random()*number0fListItem);
      //alert("Hi");
      $("#random-result").text($("#choices li").eq(randomChildNumber).text());
      $("#random-pic").attr("src", pictures[randomChildNumber]);
   });
});

