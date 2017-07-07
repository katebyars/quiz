var add = function(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12) {
 return answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9 + answer10 +answer11 +answer12;
};


$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var answer5 = parseInt($("#question5").val());
    var answer6 = parseInt($("#question6").val());
    var answer7 = parseInt($("#question7").val());
    var answer8 = parseInt($("#question8").val());
    var answer9 = parseInt($("#question9").val());
    var answer10 = parseInt($("#question10").val());
    var answer11 = parseInt($("#question11").val());
    var answer12 = parseInt($("#question12").val());

    // var allAnswers = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12];
    //
    // function mode(array)
    // {
    // if(array.length == 0)
    //     return null;
    // var modeMap = {};
    // var maxEl = array[0], maxCount = 1;
    // for(var i = 0; i < array.length; i++)
    // {
    //     var el = array[i];
    //     if(modeMap[el] == null)
    //         modeMap[el] = 1;
    //     else
    //         modeMap[el]++;
    //     if(modeMap[el] > maxCount)
    //     {
    //         maxEl = el;
    //         maxCount = modeMap[el];
    //     }
    // }
    // return maxEl;
// }
    var sum = add(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12);

    if (sum<=17){
        $('#java').show();
      } else if (sum>18 && sum<30) {
        $('#ruby').show();
      } else if (sum>30 && sum<42) {
        $('#php').show();
      } else if (sum>42 && sum<54) {
        $('#css').show();
      } else if (sum>54 && sum<61) {
        $('#net').show();
      } else if (sum===18) {
        $('#java/ruby').show();
      } else if (sum===30) {
        $('#ruby/php').show();
      } else if (sum===42) {
        $('php/css').show();
      } else if (sum===54) {
        $('#css/net').show();
      } else {
        $('#net').show();
      }
});
});
