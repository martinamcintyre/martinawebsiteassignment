
  

     $(function () {
        $('#name').keydown(function (e) {
            if (e.shiftKey || e.ctrlKey || e.altKey) {
                e.preventDefault();
            } else {
                var key = e.keyCode;
                if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                    e.preventDefault();
                }
            }
        });
    });
    
    $(function () {
        $('#surname').keydown(function (e) {
            if (e.shiftKey || e.ctrlKey || e.altKey) {
                e.preventDefault();
            } else {
                var key = e.keyCode;
                if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                    e.preventDefault();
                }
            }
        });
    });
    
    $(document).ready(function () {
       
        $("#phone").keypress(function (e) {
         
           if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            
              $("#errmsg").html("Digits Only").show().fadeOut("slow");
                     return false;
          }
         });
      });
      
    
    


