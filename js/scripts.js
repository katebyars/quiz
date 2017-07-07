var add = function(answer1, answer2, answer3, answer4, answer5) {
 return answer1 + answer2 + answer3 + answer4 + answer5;
};


$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var answer5 = parseInt($("#question5").val());

    var sum = add(answer1, answer2, answer3, answer4, answer5);

    if (sum<7){
        $('#java').show();
        $('#ruby').hide();
        $('#php').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $("#formOne").hide();
        $("#secondrow").hide();

      } else if (sum>6&&sum<9) {
        $('#javaruby').hide();
        $('#ruby').hide();
        $('#java').hide();
        $('#php').hide();
        $('#csharp').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $("#formOne").hide();
        $("#secondrow").hide();

      } else if (sum>8&&sum<12) {
        $('#php').hide();
        $('#ruby').show();
        $('#java').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum>11&&sum<14) {
        $('#php').hide();
        $('#ruby').hide();
        $('#java').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').show();
        $('#phpcsharp').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum>13&&sum<17) {
        $('#php').show();
        $('#ruby').hide();
        $('#java').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum>16&&sum<19) {
        $('#php').hide();
        $('#ruby').hide();
        $('#java').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').show();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else {
        $('#csharp').show();
        $('#ruby').hide();
        $('#java').hide();
        $('#php').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#javaruby').hide();
        $("#formOne").hide();
        $("#secondrow").hide();

      }
});

  $(".btnback").click(function() {
    $('#csharp').hide();
    $('#ruby').hide();
    $('#java').hide();
    $('#php').hide();
    $('#javaruby').hide();
    $('#rubyphp').hide();
    $('#phpcsharp').hide();
    $("#formOne").show();
    $("#secondrow").show();
});
});
