var add = function(answer1, answer2, answer3, answer4) {
 return answer1 + answer2 + answer3 + answer4;
};


$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var sum = add(answer1, answer2, answer3, answer4);

    if (sum<6){
        $('#java').show();
        $('#ruby').hide();
        $('#php').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $("#formOne").hide();
        $("#secondrow").hide();
      } else if (sum>6&&sum<10) {
        $('#ruby').show();
        $('#java').hide();
        $('#php').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $("#formOne").hide();
        $("#secondrow").hide();

      } else if (sum>10&&sum<14) {
        $('#php').show();
        $('#ruby').hide();
        $('#java').hide();
        $('#csharp').hide();
        $('#javaruby').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum==4) {
        $('#java').show();
        $('#ruby').hide();
        $('#php').hide();
        $('#csharp').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#javaruby').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum==8) {
        $('#ruby').show();
        $('#java').hide();
        $('#php').hide();
        $('#csharp').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#javaruby').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum==12) {
        $('#php').show();
        $('#ruby').hide();
        $('#java').hide();
        $('#csharp').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#javaruby').hide();
        $('#formOne').hide();
        $("#secondrow").hide();

      } else if (sum==16) {
        $('#csharp').show();
        $('#ruby').hide();
        $('#java').hide();
        $('#php').hide();
        $('#rubyphp').hide();
        $('#phpcsharp').hide();
        $('#javaruby').hide();
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
