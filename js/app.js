$(function(){
    /* ******* Navbar menu *********** */
    $("#menu").hide();
    $("#menu-toggler").on("click",function(){
        $("#menu-toggler").toggleClass("open");
        $("#menu-toggler").toggleClass("closed");
        $("#menu").slideToggle(300);
    })
    /* ******* Navbar Menu End******************** */
    
})



