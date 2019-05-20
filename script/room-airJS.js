document.addEventListener("DOMContentLoaded", function () {

$(".submit").click(function(){
    
    var width = $("#slider_width").val();
    var height = $("#slider_height").val();
    var lenght = $("#slider_lenght").val();
    
    $.post(
    "https://technoisagirl.000webhostapp.com/room-air.php",
        {postWidth: width, postHeight: height, postLenght: lenght},
        function(response){
            console.log("Dupa");
            $('#hello').html(response);
        }
    
    );
    
    
});
    
    
       $(document).on('input', '#slider_width', function () {
        $('.value_radius').html($(this).val() + " cm");
        var radius = $("#slider_width").val();

    });

    $(document).on('input', '#slider_height', function () {
        $('.value_height').html($(this).val() + " cm");
        var height = $("#slider_height").val();
    });

    $(document).on('input', '#slider_lenght', function () {
        $('.value_lenght').html($(this).val() + " cm");
        var height = $("#slider_height").val();
    });
    
})
