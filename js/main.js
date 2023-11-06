
let windowtopimg=$("#About").offset().top;
$(window).scroll(function () {  
    let windowscroll  = $ (window).scrollTop();
    if (windowscroll > windowtopimg ){
      $("#navcloro").css("backgroundColor","white" ,3000)
      $( "#btnup").show(500);
    }
    else{
      $("#navcloro").css("backgroundColor","transparent" ,3000)

      $( "#btnup").hide(500);
      
    }
    

});
