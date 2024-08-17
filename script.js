
// chech weight script

$("#btn1").click(function(){
    event.preventDefault();

    
    var w = $("#w").val();
    var h = $("#h").val();
    var BMI = (w / (h * h)) * 10000;

    if (BMI > 25){
        var result = "Overweight";
    } 
    else if (BMI > 18.5 && BMI < 25){
        var result = "Normal weight";
    } 
    else {
        var result = "Underweight";
    }
    $("#result").html(result);
});



// fading
$("#j").fadeIn(3000)

$(window).scroll(function(){
    $("#products").fadeIn(3000);
})