var add = function(answer1, answer2, answer3) {
 return answer1 + answer2 + answer3;
};


$(document).ready(function() {


  $("#formOne").submit(function(event) {
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());

    var sum = add(answer1, answer2, answer3);
    alert(sum);

});

});
