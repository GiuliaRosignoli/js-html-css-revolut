// console.log("jQuery", jQuery);


$(document).ready(function(){

    var dropDown = $(".with-dropdown");
    var dropPointers = dropDown.children(".pointer");
    var dropMenus = dropDown.children(".dropdown-menu");


// Click - Showing and hiding the sub-menu

    // First step - My droppointer (feature, plans, about us, help) 
    //has just received a click event so:

    dropPointers.click(function(event){  //my event
       
    // First step---> Reset

    var currentMenu = $(this).next(".dropdown-menu"); // That's the pointer I've just clicked, I'm interested in its next class: dropdown-menu

    dropMenus.not(currentMenu).hide(); // I want to hide all of them but not the one I've clicked on!


    currentMenu.toggle(); //

    

    /**********************************************
     * Version using hover method
    
    dropDown.hover(function(){
        $(this).children(dropMenus).toggle();
    });
    
      
     */

})


// End doc ready
});


