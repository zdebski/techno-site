document.addEventListener("DOMContentLoaded", function(){ 

$(document).on('input', '#slider_radius', function() {
    $('.value_radius').html( $(this).val()+" cm");
    var radius = $("#slider_radius").val();
    
});
    
$(document).on('input', '#slider_height', function() {
    $('.value_height').html( $(this).val()+" cm");
    var height = $("#slider_height").val();
});

$("#coneValues").on('click', function() {
    var radius = $('#slider_radius').val();
    var height = $('#slider_height').val();
    
    var volumeCone = (1/3) * Math.PI * Math.pow(radius, 2) *  height;
    var slantHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2));
    console.log("Side: "+slantHeight)
    var surfaceArea = (Math.PI * radius * slantHeight) + Math.PI * Math.pow(radius, 2);
    
    console.log(volumeCone.toFixed(2));
    console.log(surfaceArea.toFixed(2)); 

    
    $("#volumeOfCone").html("Volume of Cone: "+volumeCone.toFixed(2)); 
    $("#surfaceArea").html("Total surface area: "+surfaceArea.toFixed(2)); 


});
    

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);

    
})