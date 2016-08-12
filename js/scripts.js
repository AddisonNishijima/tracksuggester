$(document).ready(function() {
    $("form").submit(function(event){
        var like = parseInt($("input:radio[name=like]:checked").val());
        var building = parseInt($("#building").val());
        var language = parseInt($("#language").val());
        var clients = parseInt($("#clients").val());
        var prefer = parseInt($("input:radio[name=prefer]:checked").val());
        var successrate = (like + building + language + clients + prefer);
        if(successrate >5 && successrate <10) {
          $("#javaOut").show();
        }else if (successrate >10 && successrate <=15) {
          $("#phpOut").show();
        }else {
          $("#designout").show();
        }
        event.preventDefault();
    });
});
