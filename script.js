

$(".add").click(function() {
 let List = $(".picture-url").val();
   $(".gallery").append("<img src = " + List + ">" );
    
console.log(List);
   
   
   
});